
import { useState } from 'react'
import Alerta from './Alerta'

function RegistroUsuario() {
  const [alerta, setAlerta] = useState(null)
  const [datos, setDatos] = useState({
    nombre: '',
    correo: '',
    celular: '',
    ciudad: '',
    contrasena: '',
    confirmarContrasena: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setDatos((anterior) => ({
      ...anterior,
      [name]: value
    }))
  }

const handleSubmit = (e) => {
  e.preventDefault()

  if (
    !datos.nombre.trim() ||
    !datos.correo.trim() ||
    !datos.celular.trim() ||
    !datos.ciudad.trim() ||
    !datos.contrasena.trim() ||
    !datos.confirmarContrasena.trim()
  ) {
    setAlerta({
      tipo: 'advertencia',
      titulo: '¡Un momento!',
      mensaje: 'Por favor, completa todos los campos para continuar.'
    })
    return
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo)) {
    setAlerta({
      tipo: 'error',
      titulo: 'Correo electrónico incorrecto',
      mensaje: 'Verifica tu correo electrónico e inténtalo nuevamente.'
    })
    return
  }

  if (!/^3\d{9}$/.test(datos.celular)) {
    setAlerta({
      tipo: 'advertencia',
      titulo: 'Verifica tu celular',
      mensaje: 'Ingresa un número de celular válido de 10 dígitos.'
    })
    return
  }

  if (datos.contrasena.length < 8) {
    setAlerta({
      tipo: 'advertencia',
      titulo: 'Protejamos tu cuenta',
      mensaje: 'Tu contraseña debe tener mínimo 8 caracteres.'
    })
    return
  }

  if (datos.contrasena !== datos.confirmarContrasena) {
    setAlerta({
      tipo: 'error',
      titulo: 'Las contraseñas no coinciden',
      mensaje: 'Verifica ambas contraseñas e inténtalo nuevamente.'
    })
    return
  }

  setAlerta({
    tipo: 'exito',
    titulo: '¡Bienvenido a Astroeque!',
    mensaje: 'Tu registro de prueba se ha completado correctamente.'
  })

  setDatos({
    nombre: '',
    correo: '',
    celular: '',
    ciudad: '',
    contrasena: '',
    confirmarContrasena: ''
  })
}

  return (
    <section className="registro-section">
      <div className="registro-encabezado">
  <h2>Crear cuenta en Astroeque</h2>
  <p>Regístrate para comenzar a intercambiar productos.</p>
</div>

      <form className="publicar-form" onSubmit={handleSubmit}>
        <label htmlFor="registro-nombre">Nombre completo</label>
        <input
          id="registro-nombre"
          name="nombre"
          value={datos.nombre}
          onChange={handleChange}
          placeholder="Ingresa tu nombre completo"
        />

        <label htmlFor="registro-correo">Correo electrónico</label>
        <input
          id="registro-correo"
          type="email"
          name="correo"
          value={datos.correo}
          onChange={handleChange}
          placeholder="ejemplo@correo.com"
        />

        <label htmlFor="registro-celular">Celular</label>
        <input
          id="registro-celular"
          type="tel"
          name="celular"
          value={datos.celular}
          onChange={handleChange}
          placeholder="Número de celular"
        />

        <label htmlFor="registro-ciudad">Ciudad</label>
        <input
          id="registro-ciudad"
          name="ciudad"
          value={datos.ciudad}
          onChange={handleChange}
          placeholder="Ejemplo: Bogotá"
        />

        <label htmlFor="registro-clave">Contraseña</label>
        <input
          id="registro-clave"
          type="password"
          name="contrasena"
          value={datos.contrasena}
          onChange={handleChange}
          placeholder="Crea una contraseña"
        />

        <label htmlFor="registro-confirmar">
          Confirmar contraseña
        </label>
        <input
          id="registro-confirmar"
          type="password"
          name="confirmarContrasena"
          value={datos.confirmarContrasena}
          onChange={handleChange}
          placeholder="Repite tu contraseña"
        />

        <button type="submit">Crear cuenta</button>
      </form>
         {alerta && (
      <Alerta
        tipo={alerta.tipo}
        titulo={alerta.titulo}
        mensaje={alerta.mensaje}
        onCerrar={() => setAlerta(null)}
      />
    )}
    
    </section>
  )
}

export default RegistroUsuario
