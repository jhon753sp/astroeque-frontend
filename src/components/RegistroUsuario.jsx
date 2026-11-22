
import Alerta from './comunes/Alerta'
import useRegistroUsuario from '../hooks/useRegistroUsuario'

function RegistroUsuario() {
  const {
    alerta,
    setAlerta,
    datos,
    handleChange,
    handleSubmit
  } = useRegistroUsuario()

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
