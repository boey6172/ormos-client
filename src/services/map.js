import React, { useState, forwardRef,createRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { map } from "leaflet";

import '../leaflet/leaflet.css';

import useGeoLocation from "../hooks/useGeoLocation";




const MarkersMap = () => {
  const [center, setCenter] = useState({ lat: 13.4113, lng: 121.1808 });
  const ZOOM_LEVEL = 14;
  const mapRef = createRef();

  const location = useGeoLocation();

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      console.log(mapRef)
      console.log(location)
      // mapRef.current.leafletElement.flyTo(
      //   [location.coordinates.lat, location.coordinates.lng],
      //   ZOOM_LEVEL,
      //   { animate: true }
        
      // );
      
      return false;
    } else {
      alert(location);
    }
  };

  return (
    <>
     

     

      <div className="row">
        <div className="col text-center">
          <h2>React-leaflet - Get user location</h2>
          <p>Get user location and highlight it with a marker</p>
          <div className="col">
            <MapContainer center={center} zoom={ZOOM_LEVEL}  >
              <TileLayer
                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=B7Qswco9rqEFCQ4fnonV" 
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />

              {location.loaded && !location.error && (
                <Marker
                 
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}

                ></Marker>
              )}
            </MapContainer>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col d-flex justify-content-center">
          <button className="btn btn-primary" onClick={(e) => {e.preventDefault()  
            showMyLocation();
            }}>
            Locate Me
          </button>
        </div>
      </div>
      <div className="row my-4">
        <div className="col d-flex justify-content-center">
          <button className="btn btn-primary" >
            Locate Me
          </button>
        </div>
      </div>
    </>
  );
};

export default MarkersMap;