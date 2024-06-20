import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const officeLocation = { lat: 19.215931263700508, lng: 72.86688085396443 }; // Replace with your office's latitude and longitude

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCP6LL1rIeLTOjM_NVHusUq1tP_e2ND0jo">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={officeLocation}
        zoom={15}
      >
        <Marker position={officeLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
