
function DetalleEvento({ eventoSeleccionado, onCerrar }) {
  if (!eventoSeleccionado) return null

  return (
    <section id="detalle-evento" className="detalle-producto">
      <h2>Detalle del evento</h2>

      <div className="detalle-card">
        <div className="producto-icono">🌎</div>

        <h3>{eventoSeleccionado.nombre}</h3>

        <p>{eventoSeleccionado.descripcion}</p>

        <p>
          <strong>📍 Ubicación:</strong> {eventoSeleccionado.ubicacion}
        </p>

        <p>
          <strong>📅 Fecha:</strong> {eventoSeleccionado.fecha}
        </p>

        <p>
          <strong>🕒 Hora:</strong> {eventoSeleccionado.hora}
        </p>

        <p>
          <strong>Estado:</strong> {eventoSeleccionado.estado}
        </p>

        <button type="button" onClick={onCerrar}>
          Cerrar
        </button>
      </div>
    </section>
  )
}

export default DetalleEvento
