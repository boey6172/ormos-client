import React, {useState,useRef} from 'react';
import { MapContainer,TileLayer,Popup,Marker,useMapEvent,useMap,Rectangle} from "react-leaflet";
import { Button,ButtonGroup,IconButton,Divider,Paper,InputBase,Container } from '@material-ui/core';
import L from "leaflet";
import '../leaflet/leaflet.css';

const PtopMap =()=> {
  const [center, setCenter] = useState({lat: 13.4113, lng: 121.1808})
  const ZOOM_LEVEL = 13;
  // const mapRef = useRef();
  const [position, setPosition] = useState({lat: 13.4113, lng: 121.1808})

  const locationMarker=()=> {
    // const [position, setPosition] = useState(null)

  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  
return(
  <>
  <button onClick={locationMarker}>locate</button>
  <MapContainer
    center={center}
    zoom={ZOOM_LEVEL}
    // ref={mapRef}
  
  >
    <TileLayer url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=B7Qswco9rqEFCQ4fnonV" />
    {/* <Marker position={position}>
      <Popup>
        You are here <br /> 
      </Popup>
    </Marker> */}

  </MapContainer>

  </>
)
}

export default PtopMap