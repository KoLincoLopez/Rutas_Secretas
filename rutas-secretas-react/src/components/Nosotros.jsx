import { Link } from "react-router-dom";

export default function Nosotros() {
  return (
    <>
      <section className="nosotros">
        <div className="nosotros-titulo">
          <div className="line"></div>
          <h2>Nosotros</h2>
          <div className="line"></div>
        </div>
        <div className="nosotros-content">
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="image">
            <img src="/Images/Rutas_Secretas-removebg-preview.png" alt="Nosotros" />
          </div>
        </div>
      </section>

      <section className="nosotros-invertido mt-5">
        <div className="nosotros-content">
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <Link to="/contactos" className="btn">Contáctanos</Link>
          </div>
          <div className="image">
            <img src="https://img.freepik.com/foto-gratis/personas-plano-medio-agencia-viajes.jpg" alt="Equipo" />
          </div>
        </div>
      </section>
    </>
  );
}
