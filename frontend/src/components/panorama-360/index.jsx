import React, { useEffect, useRef } from 'react';
import * as PANOLENS from 'panolens';
import * as THREE from 'three';
import { PanoContainer } from '../../styles/panorama';
import config from './config.json';
import PanelImage from '../../assets/panel-background.svg';

const noteStyle = `
width: 270px;
height: 250px;
background-image: url(${PanelImage});
background-repeat: no-repeat;
background-size: cover;
background-position: bottom;
padding: 0 34px;
line-height: 230px;
`;

// eslint-disable-next-line react/prop-types
export const Pano = ({ isMovable, initialPanoramaId }) => {
  const containerRef = useRef();

  useEffect(() => {
    const viewer = new PANOLENS.Viewer({
      container: containerRef.current,
      autoHideInfospot: true,
      controlBar: true,
      controlButtons: ['fullscreen'],
      autoHideControlBar: false
    });
    containerRef.current.style.pointerEvents = isMovable ? 'auto' : 'none';
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

      if (panoramaConfig.notes) {
        panoramaConfig.notes.forEach(noteConfig => {
          const note = document.createElement('div');
          note.setAttribute('style', noteStyle);

          const noteText = document.createElement('p');
          noteText.setAttribute(
            'style',
            `
              margin: 0;
              color: #052617;
              vertical-align: middle;
              display: inline-block;
              line-height: 1;
              text-align: center;
            `
          );

          noteText.textContent = noteConfig.text;
          note.appendChild(noteText);

          const infospot = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
          infospot.position.set(...noteConfig.position);
          infospot.addHoverElement(note, 150);
          panoramas[panoramaConfig.id].add(infospot);
        });
      }
    });

    viewer.add(...Object.values(panoramas));

    if (initialPanorama) {
      viewer.setPanorama(initialPanorama);
    }
  }, [isMovable]);

  return <PanoContainer ref={containerRef}></PanoContainer>;
};

