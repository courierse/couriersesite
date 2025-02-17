import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet"; 
import "leaflet/dist/leaflet.css";
import styles from "./Maps.module.css";

import customPin from "/assets/hero/map-pin.png";

28.4711971,77.4875385
const locations = [
  { name: "Ecotech III", coords: [28.5408514, 77.4567558] },
  { name: "Ecotech II", coords: [28.4971886,77.4597304] },
  { name: "Ecotech I", coords: [28.4381356, 77.5641937 ] },
  { name: "Surajpur", coords: [28.5138343, 77.4794697] },
  { name: "Sector 63", coords: [28.6247006, 77.3804217] },
  { name: "Sector 9", coords: [ 28.5872325, 77.3256343] },
  { name: "Sector 58", coords: [28.6068774, 77.3577906] },
  { name: "Knowledge Park", coords: [28.4711971, 77.4875385] },
  { name: "Noida Phase 2", coords: [28.5328865, 77.4059268] },
];

const customIcon = L.icon({
  iconUrl: customPin,
  iconSize: [45, 45], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32], 
});

const ChangeMapView = ({ coords }) => {
  const map = useMap();
  map.setView(coords, 12, { animate: true });
  return null;
};

const Maps = () => {
  const [activeLocation, setActiveLocation] = useState(null);
  const popupRefs = useRef([]);

  popupRefs.current = locations.map(() => null);

  const handleCardClick = (location, index) => {
    setActiveLocation(location);
    if (popupRefs.current[index]) {
      popupRefs.current[index].openPopup();
    }
  };

  return (
    <section className={styles.container} id="mapsSection">
      <h2 className={styles.title}>Our Zones</h2>
      <div className={styles.content}>
        {/* Map Container */}
        <div className={styles.map}>
          <MapContainer
            center={[28.5501, 77.4003]} // Default center
            zoom={10}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Markers for all locations */}
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={location.coords}
                icon={customIcon}
                ref={(el) => (popupRefs.current[index] = el)}
                eventHandlers={{
                  click: () => {
                    setActiveLocation(location);
                  },
                }}
              >
                <Popup>{location.name}</Popup>
              </Marker>
            ))}

            {/* Center map on selected location */}
            {activeLocation && <ChangeMapView coords={activeLocation.coords} />}
          </MapContainer>
        </div>

        {/* Cards Container */}
        <div className={styles.cards}>
          {locations.map((location, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => handleCardClick(location, index)}
              role="button" 
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCardClick(location, index);
                }
              }}
            >
              {location.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Maps;
