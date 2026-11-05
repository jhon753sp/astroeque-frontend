
function EventoCard({ evento, onVerEvento }) {
  return (
    <div className="evento-card">
      <div className="evento-icono">🌎</div>

      <h3>{evento.nombre}</h3>

      <p>{evento.descripcion}</p>

      <p>
        <strong>📍 Ubicación:</strong> {evento.ubicacion}
      </p>

      <p>
        <strong>📅 Fecha:</strong> {evento.fecha}
      </p>

      <p>
        <strong>🕒 Hora:</strong> {evento.hora}
      </p>

      <p>
        <strong>Estado:</strong> {evento.estado}
      </p>

      <button
        type="button"
        onClick={() => onVerEvento(evento)}
      >
        Ver evento
      </button>
    </div>
  )
}

export default EventoCard
