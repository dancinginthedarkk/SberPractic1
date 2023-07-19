// AIzaSyAgIQFuXfLjU_3JDXcQbghS2_pHZIEYT9w
import React from 'react';
import GoogleMapReact from 'google-map-react';

type AnyReactComponentProps = {
  lat: number;
  lng: number;
  text: string;
};

const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ text }) => <div>{text}</div>;

export const SimpleMap: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAgIQFuXfLjU_3JDXcQbghS2_pHZIEYT9w' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
