import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import config from './config.json';

const ThreeScene = () => {
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

  const containerRef = useRef();
  const loaderRef = useRef();

  const [currentPanoramaIndex, setCurrentPanoramaIndex] = useState(0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);

  let isTextureLoaded = false;

  const init = () => {
    const container = containerRef.current;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1100
    );

    camera.target = new THREE.Vector3(0, 0, 0);

    scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        config[currentPanoramaIndex].imageURL
      ),
    });

    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    arrowMeshes.forEach((mesh) => {
      scene.remove(mesh);
    });
    arrowMeshes = [];

    textMeshes.forEach((mesh) => {
      scene.remove(mesh);
    });
    textMeshes = [];

    if (config[currentPanoramaIndex].arrows) {
      config[currentPanoramaIndex].arrows.forEach((arrow) => {
        const loader = new STLLoader();
          loader.load('/fonts/Arrow.STL', function (geometry) {
            const material = new THREE.MeshBasicMaterial({
              color: arrow.color,
            });
            const arrowMesh = new THREE.Mesh(geometry, material);
            arrowMesh.position.set(...arrow.position);
            arrowMesh.rotation.set(arrow.rotationX, arrow.rotationY, arrow.rotationZ);
            arrowMesh.userData.panoramaId = arrow.panoramaId;
            scene.add(arrowMesh);
            arrowMeshes.push(arrowMesh);

            const loader = new TTFLoader();
            loader.load(
              '/fonts/Roboto-Regular.ttf',
              function (ttf) {
                const font = new FontLoader().parse(ttf);
                const textGeometry = new TextGeometry(arrow.note, {
                  font: font,
                  size: 20,
                  height: 1,
                });
                const textMaterial = new THREE.MeshBasicMaterial({
                  color: arrow.noteColor,
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
                
                scene.add(textMesh);
                textMeshes.push(textMesh);
              }
            );
            
            
        });
      });
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    renderer.domElement.addEventListener('click', (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const mouse = new THREE.Vector2();
      mouse.x = (x / renderer.domElement.clientWidth) * 2 - 1;
      mouse.y = -(y / renderer.domElement.clientHeight) * 2 + 1;
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      let intersects;
      for (let i = 0; i < arrowMeshes.length; i++) {
        intersects = raycaster.intersectObject(arrowMeshes[i]);
        if (intersects.length > 0) {
          break;
        }
      }

      if (intersects.length > 0) {
        loaderRef.current.style.display = 'block';
        renderer.domElement.style.filter = 'blur(10px)';
        
        setTimeout(() => {
          setCurrentPanoramaIndex(
            config.findIndex(
              (panorama) => panorama.id === intersects[0].object.userData.panoramaId
            )
          );
          init();
          
          isTextureLoaded = true;
        }, 1000);
      }
    });

    document.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mouseup', onDocumentMouseUp, false);
    document.addEventListener('wheel', onDocumentMouseWheel, false);

    window.addEventListener('resize', onWindowResize, false);
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const onDocumentMouseDown = (event) => {
    event.preventDefault();

    isUserInteracting = true;

    onPointerDownPointerX = event.clientX;
    onPointerDownPointerY = event.clientY;

    onPointerDownLon = lon;
    onPointerDownLat = lat;
  };

  const onDocumentMouseMove = (event) => {
    if (isUserInteracting === true) {
      lon =
        (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
      lat =
        (event.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
    }
  };

  const onDocumentMouseUp = (event) => {
    isUserInteracting = false;
  };

  const onDocumentMouseWheel = (event) => {
    camera.fov += event.deltaY * 0.05;
    camera.fov = Math.max(40, Math.min(105, camera.fov));
    camera.updateProjectionMatrix();
  };

  const animate = () => {
    requestAnimationFrame(animate);
    update();
  };

  const update = () => {
    if (isUserInteracting === false) {
      // lon += 0.1;
    }

    lat = Math.max(-85, Math.min(85, lat));
    phi = THREE.MathUtils.degToRad(90 - lat);
    theta = THREE.MathUtils.degToRad(lon);

    camera.target.x =
      Math.sin(phi) * Math.cos(theta) * 500;
      camera.target.y = 500 * Math.cos(phi);
      camera.target.z =
        Math.sin(phi) * Math.sin(theta) * 500;

      camera.lookAt(camera.target);

      renderer.render(scene, camera);
      
      if (isTextureLoaded) {
        renderer.domElement.style.filter = 'none';
        loaderRef.current.style.display = 'none';
        isTextureLoaded = false;
      }
};

useEffect(() => {
init();
animate();
}, [currentPanoramaIndex]);

return (
<div ref={containerRef} style={{ position: 'relative' }}>
<div
ref={loaderRef}
style={{
display: 'none',
position: 'absolute',
top: 0,
left: 0,
right: 0,
bottom: 0,
backgroundColor: 'rgba(255, 255, 255, 0.5)',
}}
/>
</div>
);
};

export default ThreeScene;
