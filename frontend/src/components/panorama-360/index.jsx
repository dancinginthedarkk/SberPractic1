import React, { useEffect, useRef } from 'react';
import * as PANOLENS from 'panolens';
import panoramaImage from '../../assets/panorams/pano-1.jpg';
import panoramaImage2 from '../../assets/panorams/pano-2.jpg';
import panoramaImage3 from '../../assets/panorams/pano-3.jpg';
import * as THREE from 'three';
import { PanoramaContainer, PanoramaContent } from '../../styles/panorama';

const Pano = () => {
  const viewerRef = useRef();

  useEffect(() => {
    const panorama = new PANOLENS.ImagePanorama(panoramaImage);
    const panorama2 = new PANOLENS.ImagePanorama(panoramaImage2);
    const viewer = new PANOLENS.Viewer({
      container: viewerRef.current,
      autoHideInfospot: false,
      controlButtons: ['fullscreen']
    });
    panorama.link(panorama2, new THREE.Vector3(126.94, 1312.17, 4814.32));
    viewer.add(panorama, panorama2);
  }, []);

  return (
    // <PanoramaContainer ref={viewerRef}></PanoramaContainer>
    <div className="panoContainer" ref={viewerRef} style={{ width: '100%', height: '100%' }} />
  );
};

export default Pano;
