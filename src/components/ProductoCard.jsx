function ProductoCard({
  producto,
  onVerProducto,
  onEditarProducto,
  onEliminarProducto
}) {
  return (
    <div className="producto-card">
      <div className="producto-icono">{producto.icono}</div>

      <h3>{producto.nombre}</h3>

      <p>
        <strong>Categoría:</strong> {producto.categoria}
      </p>

      <p>
        <strong>Ubicación:</strong> {producto.ubicacion}
      </p>

      <button onClick={() => onVerProducto(producto)}>
        Ver producto
      </button>
      <button
  type="button"
  className="btn-editar"
  onClick={() => onEditarProducto(producto)}
>
  ✏️ Editar producto
</button>

<button
  type="button"
  className="btn-eliminar"
  onClick={() => onEliminarProducto(producto)}
>
  🗑️ Eliminar producto
</button>
    </div>
  )
}

export default ProductoCard
