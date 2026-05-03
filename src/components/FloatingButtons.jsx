export default function FloatingButtons({ onToggleLegend }) {
  return (
    <div className="floating-btns">
      <button 
        className="floating-btn" 
        onClick={onToggleLegend}
        aria-label="Mostrar/ocultar leyenda"
        title="Leyenda"
      >
        ℹ️
      </button>
    </div>
  )
}
