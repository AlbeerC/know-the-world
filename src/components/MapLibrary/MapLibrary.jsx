import './MapLibrary.css'
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import FloatingCardContainer from '../FloatingCardContainer/FloatingCardContainer'

function MapLibrary() {

  const [geoJsonData, setGeoJsonData] = useState(null)
  const [selectedCountry, setSelectedCoutry] = useState(null)
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json")
      .then(response => response.json())
      .then(data => setGeoJsonData(data))
      .catch(error => console.error('Error cargando el GeoJSON:', error))
  }, [])

  const onCountryClick = (e) => {
    setSelectedCoutry(e.sourceTarget.feature.properties.name)
    setShowCard(true)
  }

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: onCountryClick,
    })
  }

  const onCloseCard = () => {
    setShowCard(false)
    setSelectedCoutry(null)
  }

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '90vh', width: '100%', margin: '0 auto' }}>
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

      {
        showCard && selectedCountry && (
          <div className="overlay" onClick={onCloseCard}>
            <div className="floating-card" onClick={(e) => e.stopPropagation()}>
              <FloatingCardContainer selectedCountry={selectedCountry} />
            </div>
          </div>
        )
      }
      
    </MapContainer>
  )
}

export default MapLibrary;
