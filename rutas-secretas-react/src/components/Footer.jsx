import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-simple mt-5">
      <div className="footer-top">
        <img src="/Images/logo_basic.png" alt="Logo" className="footer-logo" />
        <p className="footer-slogan">Descubre Chile como nunca antes</p>
      </div>
      <div className="footer-bottom">
        <nav className="footer-nav">
          <Link to="/">Inicio</Link>
          <Link to="/productos">Paquetes</Link>
          <Link to="/contactos">Contacto</Link>
          <Link to="/nosotros">Nosotros</Link>
        </nav>
        <p className="footer-copy">© 2018 Rutas Secretas Chile. Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
