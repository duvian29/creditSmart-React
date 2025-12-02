export default function CreditCard({ nombre,tasa,min,max,plazo,imagen }) {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>

      <p>Tasa de interés: <strong>{tasa}% mensual</strong></p>
      <p>Montos: ${min.toLocaleString()}-${max.toLocaleString()}</p>
      <p>Plazo máximo: {plazo} meses</p>

      <button className="btn">Ver detalles</button>
    </div>
  );
}
