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

const startRouteIcon = L.divIcon({
  html: `<div style="
    width: 30px; height: 30px;
    background: #22c55e;
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  ">🚶</div>`,
  className: '',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
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
            center={[28.10, -17.25]}
            zoom={12}
            minZoom={12}
            maxZoom={16}
            maxBounds={[[27.85, -17.50], [28.35, -16.95]]}
            maxBoundsViscosity={1.0}
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

            {rutas.map(route => (
              <Marker
                key={`start-${route.id}`}
                position={route.coordenadas[0]}
                icon={startRouteIcon}
                eventHandlers={{
                  mouseover: (e) => {
                    e.target.bindTooltip(
                      `<strong>${route.nombre}</strong><br/>📏 ${route.distancia} km · ${route.dificultad}`,
                      { className: 'route-tooltip', sticky: true, direction: 'top' }
                    ).openTooltip()
                  },
                  click: () => setSelectedRoute(route)
                }}
              >
                <Popup>
                  <strong>🚶 Inicio: {route.nombre}</strong>
                  <p style={{ margin: '4px 0 0', fontSize: '12px' }}>{route.descripcion}</p>
                  <p style={{ fontSize: '11px', color: '#666', marginTop: '6px' }}>
                    {route.distancia} km · {route.duracion} · {route.dificultad}
                  </p>
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
