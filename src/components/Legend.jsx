export default function Legend() {
  return (
    <div className="legend">
      <h3 className="legend-title">Leyenda</h3>
      <div className="legend-item">
        <div className="legend-color" style={{ background: '#4ade80' }} />
        <span>Fácil / Accesible</span>
      </div>
      <div className="legend-item">
        <div className="legend-color" style={{ background: '#fbbf24' }} />
        <span>Dificultad Media</span>
      </div>
      <div className="legend-item">
        <div className="legend-color" style={{ background: '#f87171' }} />
        <span>Dificultad Alta</span>
      </div>
      <div className="legend-item">
        <span style={{ fontSize: '16px' }}>🚶</span>
        <span>Inicio de ruta</span>
      </div>
      <div className="legend-item">
        <div className="legend-color" style={{ background: '#3b82f6' }} />
        <span>Ruta ejemplo 360°</span>
      </div>
    </div>
  )
}
