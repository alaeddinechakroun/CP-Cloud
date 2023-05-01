import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const [map, setMap] = useState(null);
  const center = { lat: 37.7749, lng: -122.4194 }; // San Francisco coordinates

  const onLoad = (map) => {
    setMap(map);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={{ height: "100vh", width: "100%" }} center={center} zoom={10} onLoad={onLoad}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
