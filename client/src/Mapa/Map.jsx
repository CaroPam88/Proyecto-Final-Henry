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

const position2 = {
   lat: -34.60366820600605,
   lng: -58.381527515343535,
}

const divStyle = {
  background: `white`,
 
}

const onLoad = infoWindow => {
  console.log('infoWindow: ', infoWindow)
}



function MyComponent() {
 const [selectedMarker, setSelectedMarker] = useState(null);
 const [markers, setMarkers] = useState([
  {
    position: {
      lat: -34.599136724205856,
      lng: -58.37479336006881
    },
    info: {
      name: "DressMe Principal",
      address: "Av. Córdoba 550, CABA, Argentina",
      postal:"C1054"
    }
  },
  {
    position: {
      lat: -34.60366820600605,
      lng: -58.381527515343535
    },
    info: {
      name: "DressMe Corrientes",
      address: "Av. Corrientes 400, CABA, Argentina",
      postal:"C1043"
    }
  },
  {
    position: {
      lat: -34.604022042476845,
      lng: -58.38626321471586
    },
    info: {
      name: "DressMe Florida",
      address: "Florida 100, CABA, Argentina",
      postal:"C1005AAB"
    }
  }
]);

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
   zoom={14}
   onLoad={map => {

    setMap(map);
  }}
  onUnmount={onUnmount}
  >
   { /* Child components, such as markers, info windows, etc. */}
   {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          onClick={() => setSelectedMarker(index)}
        />
      ))}
      {selectedMarker !== null && (
        <InfoWindow
          position={markers[selectedMarker].position}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div style={divStyle}>
            <h6>{markers[selectedMarker].info.name}</h6>
            <p>{markers[selectedMarker].info.address}</p>
            <p>{markers[selectedMarker].info.postal}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : <></>;
}


export default React.memo(MyComponent);
