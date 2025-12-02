import{ Link }from"react-router-dom";

export default function Navbar(){
  return (
    <header>
      <nav className="navbar">
        <h1>Creditsmart</h1>
        <ul className="nav-paginas">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/simular">Simulador</Link></li>
          <li><Link to="/solicitar">Solicitar</Link></li>
        </ul>
      </nav>
    </header>
  );
}
