
import { useState, useEffect } from 'react'
import { productosIniciales } from '../data/productos'

function useProductos() {
  const [productos, setProductos] = useState(() => {
    const productosGuardados = localStorage.getItem('astroeque_productos')

    return productosGuardados
      ? JSON.parse(productosGuardados)
      : productosIniciales
  })

  useEffect(() => {
    localStorage.setItem('astroeque_productos', JSON.stringify(productos))
  }, [productos])

  const eliminarProducto = (productoAEliminar) => {
  setProductos((anteriores) =>
    anteriores.filter((item) => item !== productoAEliminar)
  )
}

const actualizarProducto = (productoOriginal, datosActualizados) => {
  setProductos((anteriores) =>
    anteriores.map((item) =>
      item === productoOriginal ? datosActualizados : item
    )
  )
}

return {
  productos,
  setProductos,
  eliminarProducto,
  actualizarProducto
}
}

export default useProductos
