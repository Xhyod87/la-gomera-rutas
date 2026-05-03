export default function RouteDetail({ route, onClose, onOpen360, has360 }) {
  if (!route) return null

  const getAccessibilityLevel = () => {
    switch (route.dificultad.toLowerCase()) {
      case 'fácil':
        return { nivel: 'Accesible', color: '#4ade80', icono: '♿' }
      case 'media':
        return { nivel: 'Moderado', color: '#fbbf24', icono: '⚠️' }
      case 'alta':
        return { nivel: 'No accesible', color: '#f87171', icono: '🚫' }
      default:
        return { nivel: 'Desconocido', color: '#9ca3af', icono: '❓' }
    }
  }

  const accessibility = getAccessibilityLevel()

  return (
    <div className="route-detail">
      <div className="route-detail-header">
        <div>
          <h2 style={{ fontSize: '16px', marginBottom: '4px' }}>{route.nombre}</h2>
          <span style={{ fontSize: '12px', opacity: 0.8 }}>
            {route.tipo} · {route.dificultad}
          </span>
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Cerrar detalles">
          ✕
        </button>
      </div>

      <div className="route-detail-body">
        <div className="detail-section">
          <div className="accessibility-badge" style={{ background: accessibility.color + '20', color: accessibility.color }}>
            <span>{accessibility.icono}</span>
            <span>{accessibility.nivel}</span>
          </div>
        </div>

        <div className="detail-stats">
          <div className="detail-stat">
            <div className="detail-stat-value">{route.distancia}</div>
            <div className="detail-stat-label">Kilómetros</div>
          </div>
          <div className="detail-stat">
            <div className="detail-stat-value">{route.duracion}</div>
            <div className="detail-stat-label">Duración</div>
          </div>
          <div className="detail-stat">
            <div className="detail-stat-value">{route.desnivel}</div>
            <div className="detail-stat-label">Desnivel (m)</div>
          </div>
          <div className="detail-stat">
            <div className="detail-stat-value">{route.etapas?.length || 0}</div>
            <div className="detail-stat-label">Etapas</div>
          </div>
        </div>

        <div className="detail-section">
          <h3>Descripción</h3>
          <p style={{ fontSize: '13px', lineHeight: '1.6' }}>{route.descripcion}</p>
        </div>

        <div className="detail-section">
          <h3>Recorrido</h3>
          <p style={{ fontSize: '13px' }}>
            <strong>Inicio:</strong> {route.inicio}<br />
            <strong>Fin:</strong> {route.fin}
          </p>
        </div>

        {route.etapas && route.etapas.length > 0 && (
          <div className="detail-section">
            <h3>Etapas</h3>
            <ul className="etapas-list">
              {route.etapas.map((etapa, index) => (
                <li key={index}>
                  <span>{etapa.nombre}</span>
                  <span style={{ color: '#666' }}>{etapa.distancia} km</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="detail-section">
          <button
            className="filter-btn"
            style={{ 
              width: '100%', 
              padding: '12px', 
              background: has360 ? '#3b82f6' : '#ccc',
              color: has360 ? '#fff' : '#666',
              cursor: has360 ? 'pointer' : 'not-allowed',
              fontSize: '14px',
              fontWeight: has360 ? '600' : '400'
            }}
            onClick={onOpen360}
            disabled={!has360}
          >
            📷 Abrir Street View 360° {has360 ? '(18 puntos)' : '(próximamente)'}
          </button>
          {has360 && (
            <p style={{ fontSize: '11px', color: '#666', marginTop: '6px', textAlign: 'center' }}>
              Recorre la ruta paso a paso como si estuvieras andando
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
