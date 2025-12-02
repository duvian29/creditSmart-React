import Navbar from "../componentes/navbar.jsx";
import CreditCard from "../componentes/CreditCard.jsx";
import { creditsData } from "../data/creditsData";

export default function Inicio() {
  return (
    <>
      <Navbar />

      <main>
        <section className="catalogo">
          <h2>catálogo de los créditos</h2>

          <div className="container">
            {creditsData.map((credito) => (
              <CreditCard
                key={credito.id}
                nombre={credito.nombre}
                tasa={credito.tasa}
                min={credito.min}
                max={credito.max}
                plazo={credito.plazo}
                imagen={credito.imagen}
              />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>2025 Creditsmart</p>
      </footer>
    </>
  );
}
