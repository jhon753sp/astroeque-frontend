
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

  return { productos, setProductos }
}

export default useProductos
