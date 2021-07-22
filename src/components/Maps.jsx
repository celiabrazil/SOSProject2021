import React from "react";
import MapSection from './mapComponents/Map';

const location = {
  address: 'Indianapolis, Indiana',
  lat: 39.7775,
  lng: -86.200,
} // our location object from earlier

function Maps() {
  return (
    <div className="maps">
      <div class="container">
        
          <div>
            <MapSection location={location} zoomLevel={9.5} />
          </div>
      </div>
    </div>
  );
}

export default Maps;