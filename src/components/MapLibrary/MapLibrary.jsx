import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function MapLibrary() {

  const [geoJsonData, setGeoJsonData] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json")
      .then(response => response.json())
      .then(data => setGeoJsonData(data))
      .catch(error => console.error('Error cargando el GeoJSON:', error))
  }, [])

  const onCountryClick = (e) => {
    console.log('País clickeado:', e.sourceTarget.feature.properties.name);
  }

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: onCountryClick,
    })
  }

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '85vh', width: '95%', margin: '10px auto' }}>
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {geoJsonData && (
        <GeoJSON
          data={geoJsonData}
          onEachFeature={onEachFeature}
          style={() => ({
            weight: 0,
            opacity: 0,
            fillOpacity: 0,
          })}
        />
      )}
    </MapContainer>
  );
}

export default MapLibrary;
