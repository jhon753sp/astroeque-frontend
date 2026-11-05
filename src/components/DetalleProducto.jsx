
function DetalleProducto({ productoSeleccionado, onCerrar }) {
  if (!productoSeleccionado) return null

  return (
    <section id="detalle-producto" className="detalle-producto">
      <h2>Detalle del producto</h2>

      <div className="detalle-card">
        <div className="producto-icono">
          {productoSeleccionado.icono}
        </div>

        <h3>{productoSeleccionado.nombre}</h3>

        <p>
          <strong>Categoría:</strong> {productoSeleccionado.categoria}
        </p>

        <p>
          <strong>Ubicación:</strong> {productoSeleccionado.ubicacion}
        </p>

<p className="descripcion-producto">
  <strong>Descripción:</strong>{' '}
  {productoSeleccionado.descripcion || 'Sin descripción disponible'}
</p>

<button type="button" onClick={onCerrar}>
  Cerrar
</button>
      </div>
    </section>
  )
}

export default DetalleProducto
