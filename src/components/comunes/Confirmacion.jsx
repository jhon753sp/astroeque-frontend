import './Confirmacion.css'

function Confirmacion({
  tipo = 'eliminar',
  titulo,
  mensaje,
  descripcion,
  textoConfirmar = 'Confirmar',
  onConfirmar,
  onCancelar
}) {
  return (
    <div className="confirmacion-overlay">
      <div
        className="confirmacion-contenedor"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirmacion-titulo"
        aria-describedby="confirmacion-mensaje"
      >
        <div className="confirmacion-marca">
          🚀 ASTROEQUE
        </div>

        <div className={`confirmacion-icono ${tipo}`}>
          {tipo === 'eliminar' ? '🗑' : '↪'}
        </div>

        <h2 id="confirmacion-titulo">
          {titulo}
        </h2>

        <p id="confirmacion-mensaje">
          {mensaje}
        </p>

        {descripcion && (
          <p className="confirmacion-descripcion">
            {descripcion}
          </p>
        )}

        <div className="confirmacion-botones">
          <button
            type="button"
            className="confirmacion-cancelar"
            onClick={onCancelar}
          >
            Cancelar
          </button>

          <button
            type="button"
            className={`confirmacion-aceptar ${tipo}`}
            onClick={onConfirmar}
          >
            {textoConfirmar}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Confirmacion