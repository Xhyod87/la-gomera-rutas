import { useState, useEffect, useRef } from 'react'

export default function Viewer360({ images, onClose, routeId }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const viewerRef = useRef(null)
  const containerRef = useRef(null)
  const [isPannellumReady, setIsPannellumReady] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const currentImage = images?.[currentIndex]
  const progress = images ? ((currentIndex + 1) / images.length) * 100 : 0

  // Cargar pannellum desde CDN
  useEffect(() => {
    if (window.pannellum) {
      setIsPannellumReady(true)
      return
    }

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js'
    script.onload = () => {
      setIsPannellumReady(true)
    }
    script.onerror = () => setError('No se pudo cargar el visor')
    document.head.appendChild(script)
  }, [])

  // Crear/actualizar viewer
  useEffect(() => {
    if (!isPannellumReady || !currentImage || !containerRef.current) return

    setLoading(true)
    setError(null)

    if (viewerRef.current) {
      viewerRef.current.destroy()
      viewerRef.current = null
    }

    containerRef.current.innerHTML = ''

    try {
      const viewer = window.pannellum.viewer(containerRef.current, {
        type: 'equirectangular',
        panorama: currentImage.imagen,
        autoLoad: true,
        showControls: true,
        showFullscreenCtrl: false,
        title: currentImage.nombre,
      })

      viewer.on('load', () => {
        setLoading(false)
      })

      viewer.on('error', () => {
        setError('Error al cargar la imagen')
        setLoading(false)
      })

      viewerRef.current = viewer
    } catch (e) {
      console.error('Error creando viewer:', e)
      setError('Error al inicializar')
      setLoading(false)
    }

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy()
        viewerRef.current = null
      }
    }
  }, [isPannellumReady, currentIndex])

  const handlePrev = () => setCurrentIndex((p) => (p > 0 ? p - 1 : images.length - 1))
  const handleNext = () => setCurrentIndex((p) => (p < images.length - 1 ? p + 1 : 0))

  const fadeStyle = {
    background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)',
    position: 'absolute',
    top: 0, left: 0, bottom: 0, width: '100px',
    zIndex: 20, cursor: 'pointer', border: 'none', color: 'white',
    fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    opacity: currentIndex === 0 ? 0.3 : 1,
    transition: 'opacity 0.3s',
    pointerEvents: currentIndex === 0 ? 'none' : 'auto'
  }

  const fadeStyleRight = {
    ...fadeStyle,
    left: 'auto', right: 0,
    background: 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)'
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.85)'
    }}>
      <div style={{
        width: '90vw', height: '85vh',
        maxWidth: '1200px', maxHeight: '900px',
        background: '#000',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: '12px', right: '12px',
          background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none',
          borderRadius: '50%', width: '36px', height: '36px', fontSize: '20px',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 30
        }}>✕</button>

        <div className="viewer-360-header" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '12px 16px', background: 'rgba(0,0,0,0.5)',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div>
            <span style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>
              Vista 360 - Paso {currentIndex + 1} de {images?.length || 0}
            </span>
            <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '2px', color: '#ccc' }}>
              {currentImage?.distanciaRecorrida} recorridos · {currentImage?.tiempoEstimado}
            </div>
          </div>
        </div>

        <div className="viewer-360-body" style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
          <div ref={containerRef} style={{ width: '100%', height: '100%', background: '#000' }} />
          
          {loading && (
            <div className="viewer-placeholder" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, background: '#000' }}>
              <p>Cargando vista 360...</p>
            </div>
          )}
          
          {error && (
            <div className="viewer-placeholder" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, background: '#000' }}>
              <p style={{ color: '#f87171' }}>{error}</p>
            </div>
          )}

          {/* Flechas difuminadas sobre la imagen */}
          {images && images.length > 1 && (
            <>
              <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                style={fadeStyle}
                aria-label="Punto anterior"
              >
                ‹
              </button>
              <button 
                onClick={handleNext}
                disabled={currentIndex === images.length - 1}
                style={fadeStyleRight}
                aria-label="Siguiente punto"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Barra de progreso estilo street view */}
        <div style={{ padding: '8px 16px', background: 'rgba(0,0,0,0.5)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', color: '#ccc', fontSize: '11px' }}>
            <span>🏁 Inicio</span>
            <span>🏔️ Cima (1.487m)</span>
            <span>🏁 Fin</span>
          </div>
          <div style={{ height: '6px', background: '#333', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: 'var(--primary)', borderRadius: '3px', transition: 'width 0.3s ease' }} />
          </div>
        </div>

        {/* Info de la imagen actual */}
        <div style={{ padding: '12px 16px', background: 'rgba(0,0,0,0.5)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ fontSize: '13px', color: '#fff', marginBottom: '4px', fontWeight: '500' }}>
            {currentImage?.nombre}
          </p>
          <p style={{ fontSize: '12px', color: '#aaa', lineHeight: '1.5', marginBottom: '8px' }}>
            {currentImage?.descripcion}
          </p>

          {images && images.length > 1 && (
            <>
              {/* Miniaturas de todos los puntos */}
              <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
                {images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      minWidth: '36px', height: '36px', borderRadius: '6px',
                      border: idx === currentIndex ? '2px solid var(--primary)' : '2px solid transparent',
                      background: idx === currentIndex ? 'var(--primary)' : '#333',
                      cursor: 'pointer', fontSize: '10px', fontWeight: '600',
                      color: idx === currentIndex ? 'white' : '#aaa',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
