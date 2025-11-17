import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';  
import Footer from './Footer';  
import '../styles/Index.css';  
import '../styles/Global.css'; 
import logoEmpresa from '../images/Rutas_Secretas-removebg-preview.png'; 

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-slider hero-banner hero-style relative">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://termasgeometricas.cl/inicio/_TGE0864.jpg" className="d-block w-100" alt="Bosque" />
                <div className="carousel-caption">
                  <h5>Descubre la magia del sur</h5>
                  <p>Paisajes ocultos, sin multitudes.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://observatoriocielosur.cl/wp-content/uploads/2023/07/Guia-de-viaje-de-Valle-Cochamo.webp"
                  className="d-block w-100" alt="Lago" />
                <div className="carousel-caption">
                  <h5>Explora lugares secretos</h5>
                  <p>Tours únicos en la naturaleza chilena.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://www.fundacionspa.cl/wp-content/uploads/2024/07/TOCONAO_2.webp" className="d-block w-100"
                  alt="Montaña" />
                <div className="carousel-caption">
                  <h5>Vive la experiencia local</h5>
                  <p>Acompañado de guías expertos.</p>
                </div>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </section>

        <br /><br /><br /><br />

        <section>
          <div className="container">
            <h3>Paquetes Destacados</h3>
            <br />
            <div className="cards-slider">
              <div className="card custom-card">
                <img
                  src="https://mlz713kvh2ay.i.optimole.com/w:1000/h:750/q:mauto/ig:avif/https://alsurexpediciones.cl/wp-content/uploads/2017/08/kayak-petrohue-peulla.jpg"
                  className="card-img-top" alt="Sur" />
                <div className="card-body">
                  <h4 className="card-title">Aventuras: Lagos y Volcanes</h4>
                  <br />
                  <p className="card-text">
                    Ven y descubre la magia del sur entre lagos cristalinos y montañas imponentes.
                    Camina por senderos unicos, siente la energia de los vocanes y navega en aguas de un verde intenso
                    que te dejaran sin aliento.
                  </p>
                  <br />
                  <div className="price-button">
                    <span className="price">Precio: $399.835 CLP</span>
                    <Link to="/detalle/1" className="btn btn-primary stretched-btn">Ver Más</Link>
                  </div>
                </div>
              </div>
              <div className="card custom-card">
                <img src="https://pbs.twimg.com/media/DUeITt_X4AAXb1C.jpg" className="card-img-top" alt="Chiloé" />
                <div className="card-body">
                  <h4 className="card-title">Encantos de Chiloé</h4>
                  <br />
                  <p className="card-text">
                    Sumérgete en la cultura y tradición de Chiloé. Palafitos de colores, mitos que viven
                    en cada rincon y sabores que solo esta isla puede regalarte. Vive la esencia de un lugar donde el tiempo
                    parece detenerse.
                  </p>
                  <br />
                  <div className="price-button">
                    <span className="price">Precio: $361.756 CLP</span>
                    <Link to="/detalle/2" className="btn btn-primary stretched-btn">Ver Más</Link>
                  </div>
                </div>
              </div>
              <div className="card custom-card">
                <img
                  src="https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/11/06/interior-de-la-capilla-de-marmol-donde-se-muestra-el-lago-general-carrera-en-chile-1.jpeg"
                  className="card-img-top" alt="Patagonia Norte" />
                <div className="card-body">
                  <h4 className="card-title">Secretos de la Patagonia Norte</h4>
                  <br />
                  <p className="card-text">Atrévete a explorar la Patagonía como nunca antes. Descubre formaciones naturales
                    únicas, Paisajes que parecen sacados de otro mundo y una naturaleza indomable que solo los verdaderos
                    viajeros conocen.</p>
                  <br />
                  <div className="price-button">
                    <span className="price">Precio: $618.793 CLP</span>
                    <Link to="/detalle/3" className="btn btn-primary stretched-btn">Ver Más</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br /><br /><br /><br />

        <section className="nosotros">
          <div className="nosotros-titulo">
            <div className="line"></div>
            <h2>Nosotros</h2>
            <div className="line"></div>
          </div>
          <div className="nosotros-content">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, id? Accusamus, quibusdam
                id vero alias nobis ipsa deserunt necessitatibus praesentium ipsam harum, magni
                deleniti reprehenderit nisi provident nam iste. Nemo! Lorem, ipsum dolor sit amet consectetur adipisicing
                elit.
                Doloremque repellendus aliquid quas asperiores praesentium inventore officiis
                temporibus ipsa in cupiditate, necessitatibus id soluta explicabo, iste laboriosam earum vel. Ea, nulla.
              </p>
            </div>

            <div className="image">
              <img src={logoEmpresa} alt="Imagen de la tienda" />
            </div>
          </div>
        </section>
        <br /><br /><br />
        <section className="nosotros-invertido">
          <div className="nosotros-content">
            <div className="text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia sapiente provident culpa quod numquam illo exercitationem obcaecati iusto
                temporibus, rem, ex consectetur, aperiam dolores? Rerum id quisquam commodi molestias minus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi omnis culpa similique accusantium sint.
                Debitis corrupti, dignissimos mollitia voluptatum maxime nobis molestias a, numquam nemo quam excepturi illo
                laborum similique!
              </p>
              <Link to="/contactos" className="btn">Contáctanos</Link>
            </div>
            <div className="image">
              <img
                src="https://img.freepik.com/foto-gratis/personas-plano-medio-agencia-viajes_52683-136451.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Otra imagen de la empresa" />
            </div>
          </div>
        </section>
      </main>

      <br /><br /><br /><br />

      <section className="blog-home py-5">
        <div className="container">
          <h2 className="text-center mb-4">Descubre nuestros blogs</h2>
          <p className="text-center mb-5">Conoce historias, rutas secretas y consejos para explorar Chile de manera única.</p>

          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <div className="blog-card">
                <img src="https://kamaleon.viajes/wp-content/uploads/2013/03/Explora-Salto-Chico-Torres-del-Paine_02.jpg"
                  className="img-fluid rounded" alt="Blog destacado" />
              </div>
            </div>

            <div className="col-md-6">
              <h5 className="blog-title">Explorando la Patagonia Secreta</h5>
              <p className="blog-text">
                Descubre rutas poco conocidas y paisajes escondidos en la región más austral de Chile. Aprende consejos
                útiles y experiencias únicas de viaje.
              </p>
              <Link to="/blogs" className="btn btn-primary mt-2">Ver todos los blogs</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;