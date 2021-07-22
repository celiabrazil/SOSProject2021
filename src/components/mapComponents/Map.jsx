import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
import {Icon,InlineIcon} from '@iconify/react';
import outlinePlace from '@iconify-icons/ic/outline-place';
let locations = [
    {
        name: `Tesla Indianapolis`,
        location:{lat:39.906990,lng:-86.071300},
        address:'8280 Castleton Corner Dr,\n Indianapolis, IN\n 46250'
    },
    {
        name: `Hubler Chevrolet, Inc`,
        location:{lat:39.645600,lng:-86.134200},
        address:'8220 US-31,\n Indianapolis, IN\n 46227'
    },
    {
        name: `O'brien Toyota`,
        location:{lat:39.804190,lng:-86.048140},
        address:'2550 Shadeland Ave,\n Indianapolis, IN\n 46219'
    }
];



const LocationPin = ({ title, address }) => (
    <div className="pin">
      <Icon icon={outlinePlace} className="location-icon" />
      <div className="location-text">
        <h3 className="location-title">{title}</h3>
        <p className="location-address">{address}</p>
      </div>
    </div>
  );


const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Closest Dealerships</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAn8iO-ytPwkhCxQISqiKnHGhznyowI90A' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={locations[0].location.lat}
            lng={locations[0].location.lng}
            title={locations[0].name}
            address={locations[0].address}
            />
            <LocationPin
            lat={locations[1].location.lat}
            lng={locations[1].location.lng}
            title={locations[1].name}
            address={locations[1].address}
            />
            <LocationPin
            lat={locations[2].location.lat}
            lng={locations[2].location.lng}
            title={locations[2].name}
            address={locations[2].address}
            />
        </GoogleMapReact>
      </div>
    </div>
  );

export default Map