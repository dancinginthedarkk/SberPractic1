import React, { useRef } from 'react';
import { useThreeScene } from './useThreeScene';

// eslint-disable-next-line react/prop-types
export const ThreeScene = ({ initialPanoramaId }) => {
  const containerRef = useRef();
  const loaderRef = useRef();

  const [] = useThreeScene(containerRef, loaderRef, initialPanoramaId);

  return (
    <>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          borderRadius: '60px',
          height: '100%',
          position: 'relative'
        }}
      >
        <div
          ref={loaderRef}
          style={{
            display: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255,255,255,0.5)'
          }}
        />
      </div>
    </>
  );
};
