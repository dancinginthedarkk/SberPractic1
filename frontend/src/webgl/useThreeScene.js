import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import config from './config.json';
import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import ArrowModel from '../fonts/Arrow.STL';
import Roboto from '../fonts/Roboto-Regular.ttf';

gsap.registerPlugin(CSSPlugin);

export const useThreeScene = (containerRef, loaderRef, initialPanoramaId = 1) => {
  let camera, scene;
  let arrowMeshes = [];
  let textMeshes = [];
  let isUserInteracting = false,
    onPointerDownPointerX = 0,
    onPointerDownPointerY = 0,
    lon = 0,
    onPointerDownLon = 0,
    lat = 0,
    onPointerDownLat = 0,
    phi = 0,
    theta = 0;
  let panoramaMeshes = [];
  let currentPanoramaIndex = config.findIndex(panorama => panorama.id === initialPanoramaId);

  const [currentPanoramaId, setCurrentPanoramaId] = useState(initialPanoramaId);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0x000000, 0);
  renderer.gammaFactor = 2.2;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;

  const init = () => {
    const container = containerRef.current;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);

    camera.target = new THREE.Vector3(0, 0, 0);

    scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    config.forEach(panorama => {
      const texture = new THREE.TextureLoader().load(panorama.imageURL);
      const material = new THREE.MeshBasicMaterial({
        map: texture
      });
      const panoramaMesh = new THREE.Mesh(geometry, material);
      panoramaMesh.visible = false;
      scene.add(panoramaMesh);
      panoramaMeshes.push(panoramaMesh);
    });

    panoramaMeshes[currentPanoramaIndex].visible = true;

    arrowMeshes.forEach(mesh => {
      scene.remove(mesh);
    });
    arrowMeshes = [];

    textMeshes.forEach(mesh => {
      scene.remove(mesh);
    });
    textMeshes = [];

    if (config[currentPanoramaIndex].arrows) {
      config[currentPanoramaIndex].arrows.forEach(arrow => {
        const loader = new STLLoader();
        loader.load(ArrowModel, function (geometry) {
          const material = new THREE.MeshBasicMaterial({
            color: arrow.color
          });
          const arrowMesh = new THREE.Mesh(geometry, material);
          arrowMesh.scale.set(0.5, 0.5, 0.5);
          arrowMesh.position.set(...arrow.position);
          arrowMesh.rotation.set(arrow.rotationX, arrow.rotationY, arrow.rotationZ);
          arrowMesh.userData.panoramaId = arrow.panoramaId;
          scene.add(arrowMesh);
          arrowMeshes.push(arrowMesh);

          const loader = new TTFLoader();
          loader.load(Roboto, function (ttf) {
            const font = new FontLoader().parse(ttf);
            const textGeometry = new TextGeometry(arrow.note, {
              font: font,
              size: 20,
              height: 1
            });
            const textMaterial = new THREE.MeshBasicMaterial({
              color: arrow.noteColor
            });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);

            const angle = Math.atan2(
              camera.position.x - arrowMesh.position.x,
              camera.position.z - arrowMesh.position.z
            );

            const offsetX = 50 * Math.sin(angle);
            const offsetZ = 50 * Math.cos(angle);

            textMesh.position.set(arrow.position[0] - offsetX, arrow.position[1] + 30, arrow.position[2] - offsetZ);

            textMesh.rotation.y = angle;

            textMesh.visible = false;

            scene.add(textMesh);
            textMeshes.push(textMesh);
          });
        });
      });
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    renderer.domElement.addEventListener('click', event => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const mouseClickPositionVector2D = new THREE.Vector2();
      mouseClickPositionVector2D.x = (x / renderer.domElement.clientWidth) * 2 - 1;
      mouseClickPositionVector2D.y = -(y / renderer.domElement.clientHeight) * 2 + 1;
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouseClickPositionVector2D, camera);

      let intersects = [];
      for (let i = 0; i < arrowMeshes.length; i++) {
        intersects = raycaster.intersectObject(arrowMeshes[i]);
        if (intersects.length > 0) {
          break;
        }
      }

      if (intersects.length > 0) {
        loaderRef.current.style.display = 'block';
        renderer.domElement.style.filter = 'blur(10px)';

        const direction = intersects[0].object.position.clone().normalize();

        gsap.to(camera.position, {
          x: direction.x * 200,
          y: direction.y * 200,
          z: direction.z * 200,
          duration: 0.5,
          onComplete: () => {
            currentPanoramaIndex = config.findIndex(
              panorama => panorama.id === intersects[0].object.userData.panoramaId
            );
            panoramaMeshes.forEach(mesh => {
              mesh.visible = false;
            });
            panoramaMeshes[currentPanoramaIndex].visible = true;

            arrowMeshes.forEach(mesh => {
              scene.remove(mesh);
            });
            arrowMeshes = [];

            textMeshes.forEach(mesh => {
              scene.remove(mesh);
            });
            textMeshes = [];

            if (config[currentPanoramaIndex].arrows) {
              config[currentPanoramaIndex].arrows.forEach(arrow => {
                const loader = new STLLoader();
                loader.load(ArrowModel, function (geometry) {
                  const material = new THREE.MeshBasicMaterial({
                    color: arrow.color
                  });
                  const arrowMesh = new THREE.Mesh(geometry, material);
                  arrowMesh.scale.set(0.5, 0.5, 0.5);
                  arrowMesh.position.set(...arrow.position);
                  arrowMesh.rotation.set(arrow.rotationX, arrow.rotationY, arrow.rotationZ);
                  arrowMesh.userData.panoramaId = arrow.panoramaId;
                  scene.add(arrowMesh);
                  arrowMeshes.push(arrowMesh);

                  const loader = new TTFLoader();
                  loader.load(Roboto, function (ttf) {
                    const font = new FontLoader().parse(ttf);
                    const textGeometry = new TextGeometry(arrow.note, {
                      font: font,
                      size: 20,
                      height: 1
                    });
                    const textMaterial = new THREE.MeshBasicMaterial({
                      color: arrow.noteColor
                    });
                    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

                    const angle = Math.atan2(
                      camera.position.x - arrowMesh.position.x,
                      camera.position.z - arrowMesh.position.z
                    );

                    const offsetX = 50 * Math.sin(angle);
                    const offsetZ = 50 * Math.cos(angle);

                    textMesh.position.set(
                      arrow.position[0] - offsetX,
                      arrow.position[1] + 30,
                      arrow.position[2] - offsetZ
                    );

                    textMesh.rotation.y = angle;

                    textMesh.visible = false;

                    scene.add(textMesh);
                    textMeshes.push(textMesh);
                  });
                });
              });
            }

            gsap.to(camera.position, {
              x: 0,
              y: 0,
              z: 0,
              duration: 0.5,
              onComplete: () => {
                renderer.domElement.style.filter = 'none';
                loaderRef.current.style.display = 'none';
                setCurrentPanoramaId(config[currentPanoramaIndex].id);
              }
            });
          }
        });
      }
    });

    document.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mouseup', onDocumentMouseUp, false);
    document.addEventListener('wheel', onDocumentMouseWheel, false);
    renderer.domElement.addEventListener('wheel', onDocumentMouseWheel, false);
    window.addEventListener('resize', onWindowResize, false);
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const onDocumentMouseDown = event => {
    event.preventDefault();

    isUserInteracting = true;

    onPointerDownPointerX = event.clientX;
    onPointerDownPointerY = event.clientY;

    onPointerDownLon = lon;
    onPointerDownLat = lat;
  };

  const mouse = new THREE.Vector2();

  const onDocumentMouseMove = event => {
    if (isUserInteracting === true) {
      lon = (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
      lat = (event.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
    }

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  const onDocumentMouseUp = event => {
    isUserInteracting = false;
  };

  const onDocumentMouseWheel = event => {
    camera.fov += event.deltaY * 0.05;
    camera.fov = Math.max(40, Math.min(105, camera.fov));
    camera.updateProjectionMatrix();
  };

  const animate = () => {
    requestIdleCallback(animate);
    update();

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(arrowMeshes);

    if (intersects.length > 0) {
      const index = arrowMeshes.indexOf(intersects[0].object);

      if (index >= 0 && index < textMeshes.length) {
        textMeshes[index].visible = true;
      }
    } else {
      textMeshes.forEach(mesh => {
        mesh.visible = false;
      });
    }
  };

  const update = () => {
    if (isUserInteracting === false) {
      //   lon += 0.1;
    }
    lat = Math.max(-85, Math.min(85, lat));
    phi = THREE.MathUtils.degToRad(90 - lat);
    theta = THREE.MathUtils.degToRad(lon);

    camera.target.x = Math.sin(phi) * Math.cos(theta) * 500;
    camera.target.y = 500 * Math.cos(phi);
    camera.target.z = Math.sin(phi) * Math.sin(theta) * 500;

    camera.lookAt(camera.target);

    renderer.render(scene, camera);
  };

  useEffect(() => {
    init();
    animate();
  }, []);

  return [currentPanoramaId, setCurrentPanoramaId];
};
