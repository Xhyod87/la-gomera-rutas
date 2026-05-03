import { useState, useCallback, useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RouteDetail from './components/RouteDetail'
import Viewer360 from './components/Viewer360'
import Legend from './components/Legend'
import FloatingButtons from './components/FloatingButtons'
import { rutas, puntosInteres, imagenes360 } from './data/rutas'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
  iconUrl: '/images/leaflet/marker-icon.png',
  shadowUrl: '/images/leaflet/marker-shadow.png',
})

const customIcon = (color = '#2d6a4f') => L.divIcon({
  html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="${color}">
    <circle cx="12" cy="12" r="10" fill="${color}" stroke="white" stroke-width="2"/>
    <circle cx="12" cy="12" r="5" fill="white"/>
  </svg>`,
  className: '',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
})

const camera360Icon = L.divIcon({
  html: `<svg width="32" height="32" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="14" fill="#2d6a4f" stroke="white" stroke-width="2"/>
    <text x="16" y="21" text-anchor="middle" font-size="16" fill="white">📷</text>
  </svg>`,
  className: '',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

function FitToRoute({ selectedRoute }) {
  const map = useMap()

  useEffect(() => {
    if (selectedRoute && selectedRoute.coordenadas) {
      const bounds = L.latLngBounds(selectedRoute.coordenadas)
      map.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [map, selectedRoute])

  return null
}

function App() {
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterDifficulty, setFilterDifficulty] = useState('all')
  const [viewer360Open, setViewer360Open] = useState(false)
  const [showLegend, setShowLegend] = useState(true)

  const filteredRoutes = rutas.filter(route => {
    const matchesSearch = route.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = filterDifficulty === 'all' ||
                             route.dificultad.toLowerCase() === filterDifficulty
    return matchesSearch && matchesDifficulty
  })

  const getRouteColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'fácil': return '#4ade80'
      case 'media': return '#fbbf24'
      case 'alta': return '#f87171'
      default: return '#2d6a4f'
    }
  }

  return (
    <>
      <Header
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />

      <div className="main-container">
        <Sidebar
          isOpen={sidebarOpen}
          routes={filteredRoutes}
          selectedRoute={selectedRoute}
          onRouteSelect={setSelectedRoute}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterDifficulty={filterDifficulty}
          onFilterChange={setFilterDifficulty}
        />

        <div className="map-container">
          <MapContainer
            center={[28.1, -17.25]}
            zoom={11}
            zoomControl={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <FitToRoute selectedRoute={selectedRoute} />

            {selectedRoute && (
              <>
                <Polyline
                  key={`${selectedRoute.id}-border`}
                  positions={selectedRoute.coordenadas}
                  color="#ffffff"
                  weight={11}
                  opacity={0.9}
                />
                <Polyline
                  key={selectedRoute.id}
                  positions={selectedRoute.coordenadas}
                  color={selectedRoute.esRutaEjemplo360 ? '#3b82f6' : getRouteColor(selectedRoute.dificultad)}
                  weight={7}
                  opacity={1}
                />
              </>
            )}

            {puntosInteres.map(punto => (
              <Marker
                key={punto.id}
                position={punto.coordenadas}
                icon={customIcon('#d4a373')}
              >
                <Popup>
                  <strong>{punto.nombre}</strong>
                  <p style={{ margin: '4px 0 0', fontSize: '12px' }}>{punto.descripcion}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {selectedRoute && (
            <RouteDetail
              route={selectedRoute}
              onClose={() => setSelectedRoute(null)}
              onOpen360={() => setViewer360Open(true)}
              has360={!!imagenes360[selectedRoute.id]}
            />
          )}

          {viewer360Open && selectedRoute && (
            <Viewer360
              images={imagenes360[selectedRoute.id] || []}
              onClose={() => setViewer360Open(false)}
              routeId={selectedRoute?.id}
            />
          )}

          {showLegend && <Legend />}

          <FloatingButtons
            onToggleLegend={() => setShowLegend(!showLegend)}
          />
        </div>
      </div>
    </>
  )
}

export default App
