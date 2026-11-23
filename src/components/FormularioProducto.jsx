 // Funcionalidad: Publicación y edición de productos.
// Proyecto: Astroeque.
// Este componente permite ingresar los datos
// de los productos que los usuarios desean intercambiar.
 function FormularioProducto({
  producto,
  handleChange,
  handleSubmit,
  modoEdicion = false
}) {
  return (
 <section id="publicar" className="publicar-section">
  <h2>
  {modoEdicion ? '✏️ Editar producto' : 'Publicar producto'}
</h2>

  <p className="publicar-descripcion">
    Completa la información del producto que deseas intercambiar.
  </p>

  <form className="publicar-form" onSubmit={handleSubmit}>
    <label htmlFor="nombre">Nombre del producto</label>
 <input
  type="text"
  id="nombre"
  name="nombre"
  value={producto.nombre}
  onChange={handleChange}
  placeholder="Ejemplo: Bicicleta todoterreno"
/>
<label htmlFor="categoria">Categoría</label>
<select
  id="categoria"
  name="categoria"
  value={producto.categoria}
  onChange={handleChange}
>
  <option value="">Selecciona una categoría</option>
  <option value="deportes">Deportes</option>
  <option value="tecnologia">Tecnología</option>
  <option value="hogar">Hogar</option>
  <option value="instrumentos">Instrumentos musicales</option>
  <option value="otros">Otros</option>
</select>

    <label htmlFor="ubicacion">Ubicación</label>
<input
  type="text"
  id="ubicacion"
  name="ubicacion"
  value={producto.ubicacion}
  onChange={handleChange}
  placeholder="Ejemplo: Bogotá"
/>

    <label htmlFor="descripcion">Descripción</label>
 <textarea
  id="descripcion"
  name="descripcion"
  value={producto.descripcion}
  onChange={handleChange}
  placeholder="Describe brevemente el producto"
></textarea>

    <button type="submit">
  {modoEdicion ? '💾 Guardar cambios' : 'Publicar producto'}
</button>
  </form>
</section>
  )
}

export default FormularioProducto