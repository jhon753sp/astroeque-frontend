
function DetalleIntercambio({ intercambioSeleccionado, onCerrar }) {
  if (!intercambioSeleccionado) return null

  return (
    <section
      id="detalle-intercambio"
      className="detalle-producto"
    >
      <h2>Detalle del intercambio</h2>

      <div className="detalle-card">
        <div className="producto-icono">🔄</div>

        <h3>{intercambioSeleccionado.intercambio}</h3>

        <p>
          <strong>Usuario:</strong>{' '}
          {intercambioSeleccionado.usuario}
        </p>

        <p>
          <strong>Estado:</strong>{' '}
          {intercambioSeleccionado.estado}
        </p>

        <button type="button" onClick={onCerrar}>
          Cerrar
        </button>
      </div>
    </section>
  )
}

export default DetalleIntercambio
