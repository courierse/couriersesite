import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Maps.module.css';

const locations = [
  { name: 'Location A', coords: [51.505, -0.09] },
  { name: 'Location B', coords: [51.51, -0.1] },
  { name: 'Location C', coords: [51.52, -0.12] },
  { name: 'Location D', coords: [51.53, -0.08] },
  { name: 'Location E', coords: [51.54, -0.13] },
  { name: 'Location F', coords: [51.55, -0.11] },
  { name: 'Location G', coords: [51.56, -0.14] },
  { name: 'Location H', coords: [51.57, -0.15] },
  { name: 'Location I', coords: [51.58, -0.16] }
];

const Maps = () => {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {locations.map((location, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => setActiveLocation(location)}
          >
            {location.name}
          </div>
        ))}
      </div>
      <div className={styles.map}>
        <MapContainer center={activeLocation.coords} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={activeLocation.coords}>
            <Popup>{activeLocation.name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Maps;
