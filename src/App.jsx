import { useState, useEffect } from 'react'
import './App.css'
import ProductoCard from './components/ProductoCard'
import FormularioProducto from './components/FormularioProducto'
import DetalleProducto from './components/DetalleProducto'
import IntercambioCard from './components/IntercambioCard'
import DetalleIntercambio from './components/DetalleIntercambio'
import EventoCard from './components/EventoCard'
import DetalleEvento from './components/DetalleEvento'
import { eventos } from './data/eventos'
import { intercambios } from './data/intercambios'
import { productosIniciales } from './data/productos'
import RegistroUsuario from './components/RegistroUsuario'
import Alerta from './components/comunes/Alerta'
import Confirmacion from './components/comunes/Confirmacion'

function App() {

const [alerta, setAlerta] = useState(null)

const [registroVisible, setRegistroVisible] = useState(false)
  const [producto, setProducto] = useState({
  nombre: '',
  categoria: '',
  ubicacion: '',
  descripcion: ''
})

const [productos, setProductos] = useState(() => {
  
  const productosGuardados = localStorage.getItem('astroeque_productos')

  return productosGuardados
    ? JSON.parse(productosGuardados)
    : productosIniciales
})

useEffect(() => {
  localStorage.setItem('astroeque_productos', JSON.stringify(productos))
}, [productos])

const handleEliminarProducto = (productoEliminar) => {
  setProductoAEliminar(productoEliminar)
  setConfirmarEliminacion(true)
}

const confirmarEliminarProducto = () => {
  if (!productoAEliminar) return

  setProductos((anteriores) =>
    anteriores.filter((item) => item !== productoAEliminar)
  )

  setProductoSeleccionado(null)
  setProductoAEliminar(null)
  setConfirmarEliminacion(false)
  setAlerta({
  tipo: 'exito',
  titulo: '¡Producto eliminado!',
  mensaje: 'Tu producto ha sido retirado correctamente del catálogo de Astroeque.'
})
}
const [productoSeleccionado, setProductoSeleccionado] = useState(null)
const [productoEnEdicion, setProductoEnEdicion] = useState(null)
const guardarEdicionProducto = (e) => {
  e.preventDefault()

  if (!productoEnEdicion) return

  setProductos((anteriores) =>
    anteriores.map((item) =>
      item === productoEnEdicion.original
        ? productoEnEdicion.datos
        : item
    )
  )

  setProductoEnEdicion(null)

  setAlerta({
    tipo: 'exito',
    titulo: '¡Producto actualizado!',
    mensaje: 'Los cambios de tu producto se han guardado correctamente. ¡Gracias por mantener tu publicación al día!'
  })
}
const [intercambioSeleccionado, setIntercambioSeleccionado] = useState(null)
const [eventoSeleccionado, setEventoSeleccionado] = useState(null)
const [loginVisible, setLoginVisible] = useState(false)
const [login, setLogin] = useState({ correo: '', contrasena: '' })
const [sesionIniciada, setSesionIniciada] = useState(false)
const [confirmarCierre, setConfirmarCierre] = useState(false)
const [productoAEliminar, setProductoAEliminar] = useState(null)
const [confirmarEliminacion, setConfirmarEliminacion] = useState(false)
const handleLogin = () => {
  if (!login.correo.trim() || !login.contrasena.trim()) {
    setAlerta({
      tipo: 'advertencia',
      titulo: '¡Un momento!',
      mensaje: 'Por favor, ingresa tu correo electrónico y contraseña.'
    })
    return
  }

  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!correoValido.test(login.correo.trim())) {
    setAlerta({
      tipo: 'error',
      titulo: 'Verifica tu correo',
      mensaje: 'Ingresa un correo electrónico válido e inténtalo nuevamente.'
    })
    return
  }

  setSesionIniciada(true)
  setLoginVisible(false)
  setLogin({ correo: '', contrasena: '' })

  setAlerta({
    tipo: 'exito',
    titulo: '¡Bienvenido a Astroeque!',
    mensaje: 'Has iniciado sesión correctamente. ¡Comienza a explorar nuestra comunidad!'
  })
}
const handleChange = (e) => {
  setProducto({
    ...producto,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) => {
  e.preventDefault()

 if (
  !producto.nombre.trim() ||
  !producto.categoria.trim() ||
  !producto.ubicacion.trim() ||
  !producto.descripcion.trim()
) {
setAlerta({
  tipo: 'advertencia',
  titulo: '¡Un momento!',
  mensaje: 'Completa todos los campos para publicar tu producto en Astroeque.'
})
  return
}
 if (producto.nombre.trim().length > 60) {
 setAlerta({
  tipo: 'advertencia',
  titulo: 'Revisa el nombre de tu producto',
  mensaje: 'El nombre del producto no puede superar los 60 caracteres.'
})
  return
}

setProductos([
  ...productos,
  {
nombre: producto.nombre,
categoria: producto.categoria,
ubicacion: producto.ubicacion,
descripcion: producto.descripcion,
icono: '📦'
  }
])
  setAlerta({
  tipo: 'exito',
  titulo: '¡Producto publicado!',
  mensaje: `Tu producto "${producto.nombre}" ya está disponible en Astroeque. ¡Que comiencen los intercambios!`
})

  setProducto({
    nombre: '',
    categoria: '',
    ubicacion: '',
    descripcion: ''
  })
}
 useEffect(() => {
  if (productoSeleccionado) {
    document.getElementById('detalle-producto')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}, [productoSeleccionado])
useEffect(() => {
  if (intercambioSeleccionado) {
    document.getElementById('detalle-intercambio')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}, [intercambioSeleccionado])
useEffect(() => {
  if (eventoSeleccionado) {
    document.getElementById('detalle-evento')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}, [eventoSeleccionado])
  return (
    <>
     
<header className="header">
  <div className="logo">ASTROEQUE</div>

  <nav className="nav">
    <a href="#inicio">Inicio</a>
    <a href="#productos">Productos</a>
    <a href="#intercambios">Intercambios</a>
    <a href="#eventos">Eventos</a>
  </nav>

  <div className="header-acciones">

    {!sesionIniciada && (
      <button
        type="button"
        className="btn-crear-cuenta"
        onClick={() => {
          setLoginVisible(false)
          setRegistroVisible(!registroVisible)
        }}
      >
        {registroVisible ? 'Volver' : 'Crear cuenta'}
      </button>
    )}

    <button
      className={`login-btn ${sesionIniciada ? 'sesion-activa' : ''}`}
      onClick={() => {
        if (sesionIniciada) {
          setConfirmarCierre(true)
        } else {
          setRegistroVisible(false)
          setLoginVisible(true)
        }
      }}
    >
      {sesionIniciada ? '✓ Sesión iniciada' : 'Iniciar sesión'}
    </button>

  </div>
</header>

{registroVisible && !sesionIniciada && (
  <RegistroUsuario />
)}


     {confirmarCierre && (
  <Confirmacion
    tipo="cerrar"
    titulo="¿Cerrar sesión?"
    mensaje="¿Deseas cerrar tu sesión en Astroeque?"
    descripcion="Recuerda que siempre puedes volver a nuestra comunidad."
    textoConfirmar="Sí, cerrar sesión"
    onCancelar={() => setConfirmarCierre(false)}
   onConfirmar={() => {
  setSesionIniciada(false)
  setConfirmarCierre(false)

  setAlerta({
    tipo: 'exito',
    titulo: '¡Hasta pronto!',
    mensaje: 'Has cerrado sesión correctamente. Gracias por formar parte de nuestra comunidad. ¡Te esperamos pronto!'
  })
}}
  />
)}
{confirmarEliminacion && productoAEliminar && (
  <Confirmacion
    tipo="eliminar"
    titulo="¿Eliminar producto?"
    mensaje={
      <>
        ¿Estás seguro de que deseas eliminar{' '}
        <strong>{productoAEliminar.nombre}</strong>
        {' '}de Astroeque?
      </>
    }
    descripcion="Esta acción no se puede deshacer."
    textoConfirmar="Sí, eliminar"
    onCancelar={() => {
      setConfirmarEliminacion(false)
      setProductoAEliminar(null)
    }}
    onConfirmar={confirmarEliminarProducto}
  />
)}

      {loginVisible && (
  <section className="login-section">
    <div className="login-card">
      <h2>Iniciar sesión</h2>

      <label>Correo electrónico</label>
     <input
  type="email"
  placeholder="correo@astroeque.com"
  value={login.correo}
  onChange={(e) =>
    setLogin({ ...login, correo: e.target.value })
  }
/>

      <label>Contraseña</label>
     <input
  type="password"
  placeholder="Ingresa tu contraseña"
  value={login.contrasena}
  onChange={(e) =>
    setLogin({ ...login, contrasena: e.target.value })
  }
/>

     <button
  type="button"
  onClick={handleLogin}
>
  Ingresar
</button>

      <button
        type="button"
        onClick={() => setLoginVisible(false)}
      >
        Cerrar
      </button>
    </div>
  </section>
)}

      <main id="inicio">
        <h1>Astroeque</h1>

        <h2>
          Intercambia, conecta y dale una nueva vida a tus productos
        </h2>

        <p>
          Plataforma digital para publicar productos y realizar intercambios
          entre usuarios de manera sencilla y organizada.
        </p>

        <a href="#productos" className="explorar-btn">
  Explorar productos
</a>
      </main>

    <section id="productos" className="productos">
      <h2>Productos disponibles</h2>
      <p className="productos-descripcion">
        Encuentra productos disponibles para intercambiar en Astroeque.
      </p>
      <a href="#publicar" className="publicar-btn">
  + Publicar producto
</a>

      <div className="productos-grid">

{productos.map((item, index) => (
  <ProductoCard
    key={index}
    producto={item}
    onVerProducto={setProductoSeleccionado}
    onEditarProducto={(item) => {
  setProductoEnEdicion({
    original: item,
    datos: { ...item }
  })

  setTimeout(() => {
    document.getElementById('formulario-edicion')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }, 100)
}}
    onEliminarProducto={handleEliminarProducto}
  />
))}
      </div>
    </section>
  
<DetalleProducto
  productoSeleccionado={productoSeleccionado}
  onCerrar={() => {
    setProductoSeleccionado(null)

    setTimeout(() => {
      document.getElementById('productos')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }}
/>
{productoEnEdicion && (
  <div id="formulario-edicion">
    <FormularioProducto
      producto={productoEnEdicion.datos}
      modoEdicion={true}
      handleChange={(e) => {
        setProductoEnEdicion({
          ...productoEnEdicion,
          datos: {
            ...productoEnEdicion.datos,
            [e.target.name]: e.target.value
          }
        })
      }}
      handleSubmit={guardarEdicionProducto}
    />
  </div>
)}
  <FormularioProducto
  producto={producto}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
/>
    <section id="intercambios" className="intercambios">
  <h2>Intercambios</h2>

  <p className="intercambios-descripcion">
    Conoce algunas propuestas de intercambio realizadas en Astroeque.
  </p>

  <div className="intercambios-grid">
    {intercambios.map((intercambio, index) => (
  <IntercambioCard
    key={index}
    intercambio={intercambio}
    onVerIntercambio={setIntercambioSeleccionado}
  />
))}
</div>
</section>

<DetalleIntercambio
  intercambioSeleccionado={intercambioSeleccionado}
  onCerrar={() => {
    setIntercambioSeleccionado(null)

    setTimeout(() => {
      document.getElementById('intercambios')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }}
/>

<section id="eventos" className="eventos">
  <h2>Eventos de trueque</h2>

  <p className="eventos-descripcion">
    Participa en nuestros eventos y conecta con la comunidad Astroeque.
  </p>

  <div className="eventos-grid">

    {eventos.map((evento, index) => (
  <EventoCard
    key={index}
    evento={evento}
    onVerEvento={setEventoSeleccionado}
  />
))}

  </div>
  
<DetalleEvento
  eventoSeleccionado={eventoSeleccionado}
  onCerrar={() => {
    setEventoSeleccionado(null)

    setTimeout(() => {
      document.getElementById('eventos')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }}
/>
</section>

{alerta && (
  <Alerta
    tipo={alerta.tipo}
    titulo={alerta.titulo}
    mensaje={alerta.mensaje}
    onCerrar={() => setAlerta(null)}
  />
)}
    </>
  )
 }

export default App
