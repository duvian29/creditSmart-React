import { useState } from "react";
import Navbar from "../componentes/navbar.jsx";
import "../assets/style.css";
import "./solicitar.css";

export default function Solicitar() {
  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    email: "",
    telefono: "",
    tipo: "Crédito Libre Inversión",
    monto: "",
    plazo: "6",
    destino: "",
    empresa: "",
    cargo: "",
    ingresos: ""
  });

  const [solicitudes, setSolicitudes] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [mostrarResumen, setMostrarResumen] = useState(false);

  // MANEJO DE CAMBIOS
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // CÁLCULO DE CUOTA MENSUAL (simple)
  const calcularCuota = () => {
    if (!form.monto || !form.plazo) return 0;
    const tasa = 0.01; // tasa simple para ejemplo
    const cuota = (form.monto * (1 + tasa * form.plazo)) / form.plazo;
    return Math.round(cuota);
  };

  const cuotaMensual = calcularCuota();

  // ENVIAR FORMULARIO
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (!form.nombre || !form.cedula || !form.email || !form.monto) {
      setMensaje("Por favor completa los campos obligatorios.");
      return;
    }

    // Mostrar resumen antes de guardar
    setMostrarResumen(true);
  };

  // CONFIRMAR ENVÍO DEFINITIVO
  const enviarDefinitivo = () => {
    setSolicitudes([...solicitudes, form]); // Guardar en memoria
    setMensaje("Solicitud enviada con éxito.");
    setMostrarResumen(false);

    // Limpiar formulario
    setForm({
      nombre: "",
      cedula: "",
      email: "",
      telefono: "",
      tipo: "Crédito Libre Inversión",
      monto: "",
      plazo: "6",
      destino: "",
      empresa: "",
      cargo: "",
      ingresos: ""
    });
  };

  return (
    <>
      <Navbar />

      <main className="formulario">
        <h2>Solicitud de Crédito</h2>

        {mensaje && <p className="mensaje">{mensaje}</p>}

        {/* RESUMEN */}
        {mostrarResumen ? (
          <div className="resumen">
            <h3>Resumen de la solicitud</h3>
            <p><strong>Nombre:</strong> {form.nombre}</p>
            <p><strong>Cédula:</strong> {form.cedula}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Tipo de crédito:</strong> {form.tipo}</p>
            <p><strong>Monto:</strong> ${Number(form.monto).toLocaleString()}</p>
            <p><strong>Plazo:</strong> {form.plazo} meses</p>
            <p><strong>Cuota mensual estimada:</strong> ${cuotaMensual.toLocaleString()}</p>

            <button className="btn" onClick={enviarDefinitivo}>
              Confirmar y Enviar
            </button>

            <button className="btn limpiar" onClick={() => setMostrarResumen(false)}>
              Volver y editar
            </button>
          </div>
        ) : (
          <form className="form-credit" onSubmit={handleSubmit}>
            <h3>Datos Personales</h3>

            <div className="grupo">
              <label>Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grupo">
              <label>Cédula</label>
              <input
                type="number"
                name="cedula"
                value={form.cedula}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grupo">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grupo">
              <label>Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
              />
            </div>

            <h3>Datos del Crédito</h3>

            <div className="grupo">
              <label>Tipo de crédito</label>
              <select name="tipo" value={form.tipo} onChange={handleChange}>
                <option>Crédito Libre Inversión</option>
                <option>Crédito Vehicular</option>
                <option>Crédito Vivienda</option>
                <option>Crédito Educativo</option>
                <option>Crédito Empresarial</option>
              </select>
            </div>

            <div className="grupo">
              <label>Monto solicitado</label>
              <input
                type="number"
                name="monto"
                value={form.monto}
                onChange={handleChange}
                required
              />
              {form.monto && (
                <p className="cuota">
                  Cuota mensual estimada: <strong>${cuotaMensual.toLocaleString()}</strong>
                </p>
              )}
            </div>

            <div className="grupo">
              <label>Plazo (meses)</label>
              <select name="plazo" value={form.plazo} onChange={handleChange}>
                <option>6</option>
                <option>12</option>
                <option>24</option>
                <option>36</option>
                <option>48</option>
                <option>60</option>
              </select>
            </div>

            <div className="grupo">
              <label>Destino del crédito</label>
              <textarea
                name="destino"
                rows="4"
                value={form.destino}
                onChange={handleChange}
              ></textarea>
            </div>

            <h3>Datos Laborales</h3>

            <div className="grupo">
              <label>Empresa donde trabaja</label>
              <input
                type="text"
                name="empresa"
                value={form.empresa}
                onChange={handleChange}
              />
            </div>

            <div className="grupo">
              <label>Cargo</label>
              <input
                type="text"
                name="cargo"
                value={form.cargo}
                onChange={handleChange}
              />
            </div>

            <div className="grupo">
              <label>Ingresos mensuales</label>
              <input
                type="number"
                name="ingresos"
                value={form.ingresos}
                onChange={handleChange}
              />
            </div>

            <div className="botones">
              <button className="btn" type="submit">Enviar Solicitud</button>
              <button className="btn limpiar" type="reset">Limpiar</button>
            </div>
          </form>
        )}
      </main>

      <footer>
        <p>© 2025 Creditsmart</p>
      </footer>
    </>
  );
}
