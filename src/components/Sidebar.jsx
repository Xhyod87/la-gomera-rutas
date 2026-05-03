export default function Sidebar({ 
  isOpen, 
  routes, 
  selectedRoute, 
  onRouteSelect, 
  searchTerm, 
  onSearchChange, 
  filterDifficulty, 
  onFilterChange 
}) {
  const difficulties = ['all', 'fácil', 'media', 'alta']

  const getDifficultyLabel = (d) => {
    switch (d) {
      case 'all': return 'Todas'
      case 'fácil': return 'Fácil'
      case 'media': return 'Media'
      case 'alta': return 'Alta'
      default: return d
    }
  }

  return (
    <aside className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar ruta o lugar..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Buscar rutas"
        />
      </div>

      <div className="filter-container">
        {difficulties.map(d => (
          <button
            key={d}
            className={`filter-btn ${filterDifficulty === d ? 'active' : ''}`}
            onClick={() => onFilterChange(d)}
          >
            {getDifficultyLabel(d)}
          </button>
        ))}
      </div>

      <div className="routes-list">
        {routes.length === 0 ? (
          <p style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
            No se encontraron rutas
          </p>
        ) : (
          routes.map(route => (
            <div
              key={route.id}
              className={`route-card ${selectedRoute?.id === route.id ? 'selected' : ''}`}
              onClick={() => onRouteSelect(route)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && onRouteSelect(route)}
            >
              <div className="route-card-header">
                <span className="route-name">{route.nombre}</span>
                <span className={`route-difficulty ${route.dificultad.toLowerCase()}`}>
                  {route.dificultad}
                </span>
              </div>
              {route.esRutaEjemplo360 && (
                <div style={{ fontSize: '11px', color: '#3b82f6', fontWeight: '600', marginBottom: '4px' }}>
                  📷 Street View 360 disponible (18 puntos)
                </div>
              )}
              <p style={{ fontSize: '12px', opacity: 0.8, marginBottom: '8px' }}>
                {route.descripcion.substring(0, 80)}...
              </p>
              <div className="route-info">
                <span>📏 {route.distancia} km</span>
                <span>⏱️ {route.duracion}</span>
              </div>
              <div className="route-stats">
                <span className="stat">⛰️ {route.desnivel}m</span>
                <span className="stat">📍 {route.inicio}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </aside>
  )
}
