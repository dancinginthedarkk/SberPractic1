import React, { useEffect, useRef } from 'react';
import * as PANOLENS from 'panolens';
import * as THREE from 'three';
import { PanoContainer } from '../../styles/panorama';

// eslint-disable-next-line react/prop-types
export const Pano = ({ isMovable }) => {
  const viewerRef = useRef();

  useEffect(() => {
    const panoramaStart = new PANOLENS.ImagePanorama('https://i.ibb.co/KLr9bQp/Hold.jpg');
    const panoramaHoll = new PANOLENS.ImagePanorama('https://i.ibb.co/y4DkW8h/Hall-1.jpg');
    const panoramaKitchen = new PANOLENS.ImagePanorama('https://i.ibb.co/0Dj7CDF/Kitchen-2.jpg');
    const panoramaHall2 = new PANOLENS.ImagePanorama('https://i.ibb.co/b5NqzvB/Hall-2.jpg');
    const panoramaHall3 = new PANOLENS.ImagePanorama('https://i.ibb.co/sbTC69j/Hall-3.jpg');

    const viewer = new PANOLENS.Viewer({
      container: viewerRef.current,
      autoHideInfospot: true,
      controlButtons: ['fullscreen']
    });

    const lookAtPositions = [
      new THREE.Vector3(6000.39, 1000.07, 1000.41),
      new THREE.Vector3(6000.39, -1000.07, 1000.41),
      new THREE.Vector3(4000.39, -1000.07, 6500.41),
      new THREE.Vector3(2000.39, -500.07, -4000.41)
    ];

    panoramaStart.addEventListener('enter-fade-start', function () {
      viewer.tweenControlCenter(lookAtPositions[0], 0);
    });

    panoramaHoll.addEventListener('enter-fade-start', function () {
      viewer.tweenControlCenter(lookAtPositions[1], 0);
    });

    panoramaHall2.addEventListener('enter-fade-start', function () {
      viewer.tweenControlCenter(lookAtPositions[2], 0);
    });

    panoramaHall3.addEventListener('enter-fade-start', function () {
      viewer.tweenControlCenter(lookAtPositions[3], 0);
    });

    const infospot = new PANOLENS.Infospot(500, PANOLENS.DataImage.Arrow);
    infospot.position.set(-5000.94, -500.17, 3000.32);
    infospot.addHoverText('Подняться наверх');
    infospot.addEventListener('click', function () {
      viewer.setPanorama(panoramaHoll);
    });
    panoramaStart.add(infospot);

    const infospot2 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Arrow);
    infospot2.position.set(-7000.94, -2000.17, 3000.32);
    infospot2.addHoverText('Спуститься на первый этаж');
    infospot2.addEventListener('click', function () {
      viewer.setPanorama(panoramaStart);
    });

    const infospot3 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Arrow);
    infospot3.position.set(4000.94, -1000.17, -6000.32);
    infospot3.addHoverText('Там дальше будет кухня!');
    infospot3.addEventListener('click', function () {
      viewer.setPanorama(panoramaHall2);
    });
    panoramaHoll.add(infospot2, infospot3);

    const infospot4 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Arrow);
    infospot4.position.set(-3900.94, -1000.17, 6000.32);
    infospot4.addHoverText('Выйти в холл');
    infospot4.addEventListener('click', function () {
      viewer.setPanorama(panoramaHall2);
    });
    panoramaKitchen.add(infospot4);

    const infospot5 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Arrow);
    infospot5.position.set(6000.94, -1000.17, 6000.32);
    infospot5.addHoverText('Выпить кофе');
    infospot5.addEventListener('click', function () {
      viewer.setPanorama(panoramaKitchen);
    });

    panoramaHall2.add(infospot5);

    const infospot6 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Arrow);
    infospot6.position.set(-5000.94, -1000.17, 100.32);
    infospot6.addHoverText('Выйти в холл');
    infospot6.addEventListener('click', function () {
      viewer.setPanorama(panoramaHoll);
    });

    panoramaHall2.add(infospot6);

    const infospot7 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Arrow);
    infospot7.position.set(1000.94, -1000.17, 6000.32);
    infospot7.addHoverText('К переговоркам');
    infospot7.addEventListener('click', function () {
      viewer.setPanorama(panoramaHall3);
    });

    panoramaHall2.add(infospot7);

    viewer.add(panoramaStart, panoramaHoll, panoramaKitchen, panoramaHall2, panoramaHall3);
    if (!isMovable) {
      return;
    }
  }, [isMovable]);

  return <PanoContainer ref={viewerRef}></PanoContainer>;
};
