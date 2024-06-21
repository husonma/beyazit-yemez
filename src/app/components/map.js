'use client';
import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '80%',
  height: '400px',
};

const center = {
  lat: 38.433,
  lng: 27.1498,
};

function Map() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
