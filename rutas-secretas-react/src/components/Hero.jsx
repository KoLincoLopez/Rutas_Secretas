export default function Hero() {
  return (
    <section className="hero-slider hero-banner hero-style relative">
      <div id="carouselHome" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="2"></button>
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
            <img src="https://observatoriocielosur.cl/wp-content/uploads/2023/07/Guia-de-viaje-de-Valle-Cochamo.webp" className="d-block w-100" alt="Lago" />
            <div className="carousel-caption">
              <h5>Explora lugares secretos</h5>
              <p>Tours únicos en la naturaleza chilena.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.fundacionspa.cl/wp-content/uploads/2024/07/TOCONAO_2.webp" className="d-block w-100" alt="Montaña" />
            <div className="carousel-caption">
              <h5>Vive la experiencia local</h5>
              <p>Acompañado de guías expertos.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-slide="prev" data-bs-target="#carouselHome">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-slide="next" data-bs-target="#carouselHome">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}
