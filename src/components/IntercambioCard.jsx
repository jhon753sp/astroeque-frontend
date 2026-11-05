
function IntercambioCard({ intercambio, onVerIntercambio }) {
  return (
    <div className="intercambio-card">
      <h3>{intercambio.nombre}</h3>

      <p>
        <strong>Usuario:</strong> {intercambio.usuario}
      </p>

      <p>
        <strong>Estado:</strong> {intercambio.estado}
      </p>

      <button
        type="button"
        onClick={() => onVerIntercambio(intercambio)}
      >
        Ver intercambio
      </button>
    </div>
  )
}

export default IntercambioCard
