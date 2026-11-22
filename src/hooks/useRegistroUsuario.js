import { useState } from 'react'

function useRegistroUsuario() {
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

  return {
  alerta,
  setAlerta,
  datos,
  setDatos,
  handleChange,
  handleSubmit
}
}

export default useRegistroUsuario