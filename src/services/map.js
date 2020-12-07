import React, {useState,useRef} from 'react';
import { MapContainer,TileLayer,Popup,Marker,useMapEvents,useMap,useMapEvent,Rectangle} from "react-leaflet";
import { Button,ButtonGroup,IconButton,Divider,Paper,InputBase,Container } from '@material-ui/core';
import L from "leaflet";
import '../leaflet/leaflet.css';

const LocationMarker =()=> {
  const [center, setCenter] = useState({lat: 13.4113, lng: 121.1808})
  const ZOOM_LEVEL = 13;
  // const mapRef = useRef();
  const position = [13.4113, 121.1808]

  
return(
  <>
  <MapContainer
    center={center}
    zoom={ZOOM_LEVEL}
    // ref={mapRef}
  >
    <TileLayer url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=B7Qswco9rqEFCQ4fnonV" />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>

  </MapContainer>

  </>
)
}

export default LocationMarker