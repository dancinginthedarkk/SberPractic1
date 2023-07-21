import React, { useEffect, useRef } from 'react';
import * as PANOLENS from 'panolens';
import * as THREE from 'three';
import { PanoContainer } from '../../styles/panorama';
import config from './config.json';

// eslint-disable-next-line react/prop-types
export const Pano = ({ isMovable, initialPanoramaId }) => {
  const containerRef = useRef();

  useEffect(() => {
    const viewer = new PANOLENS.Viewer({
      container: containerRef.current,
      autoHideInfospot: true,
      controlButtons: ['fullscreen']
    });

    const panoramas = {};
    // eslint-disable-next-line react/prop-types
    let initialPanorama;
    config.panoramas.forEach(panoramaConfig => {
      const panorama = new PANOLENS.ImagePanorama(panoramaConfig.image);
      panoramas[panoramaConfig.id] = panorama;

      if (panoramaConfig.id === initialPanoramaId) {
        initialPanorama = panorama;
      }

      if (panoramaConfig.lookAtPosition) {
        panorama.addEventListener('enter-fade-start', function () {
          viewer.tweenControlCenter(new THREE.Vector3(...panoramaConfig.lookAtPosition), 0);
        });
      }

      panoramaConfig.infospots.forEach(infospotConfig => {
        const infospot = new PANOLENS.Infospot(500, PANOLENS.DataImage.Arrow);
        infospot.position.set(...infospotConfig.position);
        infospot.addHoverText(infospotConfig.text);
        infospot.addEventListener('click', function () {
          viewer.setPanorama(panoramas[infospotConfig.panoramaId]);
        });
        panorama.add(infospot);
      });
    });

    viewer.add(...Object.values(panoramas));

    if (initialPanorama) {
      viewer.setPanorama(initialPanorama);
    }
  }, []);

  return <PanoContainer ref={containerRef}></PanoContainer>;
};
