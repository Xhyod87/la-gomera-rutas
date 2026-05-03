export default function Header({ onMenuToggle, sidebarOpen }) {
  return (
    <header className="header">
      <button 
        className="menu-btn" 
        onClick={onMenuToggle}
        aria-label={sidebarOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>
      <span className="header-icon">🥾</span>
      <div>
        <h1 className="header-title">Rutas La Gomera</h1>
        <p className="header-subtitle">Senderismo accesible con vistas 360°</p>
      </div>
    </header>
  )
}
