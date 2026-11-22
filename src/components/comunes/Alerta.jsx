import { useEffect, useRef } from 'react'
import './Alerta.css'

function Alerta({
  tipo = 'advertencia',
  titulo,
  mensaje,
  onCerrar
}) {
  const botonRef = useRef(null)

  useEffect(() => {
    botonRef.current?.focus()

    const cerrarConEscape = (e) => {
      if (e.key === 'Escape') {
        onCerrar()
      }
    }

    document.addEventListener('keydown', cerrarConEscape)

    return () => {
      document.removeEventListener('keydown', cerrarConEscape)
    }
  }, [onCerrar])

  const iconos = {
    exito: '✓',
    advertencia: '!',
    error: '✕',
    informacion: 'i'
  }

  return (
    <div className="alerta-overlay">
      <div
        className={`alerta-contenedor alerta-${tipo}`}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="alerta-titulo"
        aria-describedby="alerta-mensaje"
      >
        <div className="alerta-marca">
          🚀 ASTROEQUE
        </div>

        <div className="alerta-icono">
          {iconos[tipo]}
        </div>

        <h2 id="alerta-titulo">{titulo}</h2>

        <p id="alerta-mensaje">{mensaje}</p>

        <button
          ref={botonRef}
          type="button"
          className="alerta-boton"
          onClick={onCerrar}
        >
          Entendido
        </button>
      </div>
    </div>
  )
}

export default Alerta