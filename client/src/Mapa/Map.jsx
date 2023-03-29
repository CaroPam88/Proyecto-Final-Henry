import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
 width: '500px',
 height: '500px'
};

const center = {
 lat: -34.60366820600605,
 lng: -58.381527515343535,
};

const position = {
  lat: -34.599136724205856, 
  lng: -58.37479336006881,
}

const divStyle = {
  background: `white`,
 
}

const onLoad = infoWindow => {
  console.log('infoWindow: ', infoWindow)
}



function MyComponent() {
  const [selectedMarker, setSelectedMarker] = useState(null);
 const { isLoaded } = useJsApiLoader({
  id: 'google-map-script',
  googleMapsApiKey: "AIzaSyBFT0EzQ-RoQBWnUxtyTS53uhgGjqULgcY"
 });

 const [map, setMap] = useState(null);

 const onUnmount = React.useCallback(function callback() {
  setMap(null);
 }, []);

 return isLoaded ? (
  <GoogleMap
   mapContainerStyle={containerStyle}
   center={center}
   zoom={15}
   onLoad={map => {

    setMap(map);
  }}
  onUnmount={onUnmount}
  >
   { /* Child components, such as markers, info windows, etc. */}
   <Marker
      position={position}
      onClick={() => setSelectedMarker(position)}
    />
    {selectedMarker && (
      <InfoWindow
        position={selectedMarker}
        onCloseClick={() => setSelectedMarker(null)}
        onLoad={infoWindow => console.log('infoWindow: ', infoWindow)}
      >
        <div style={divStyle}>
          <h6>DressMe</h6>
          <p>Av. Córdoba 550</p>
          <p>C1054 CABA</p>
          <p>Argentina</p>
        </div>
      </InfoWindow>
    )}
   <></>
  </GoogleMap>
 ) : <></>;
}

export default React.memo(MyComponent);
