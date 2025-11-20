import { Link } from "react-router-dom";

export default function BlogHome() {
  return (
    <section className="blog-home py-5">
      <div className="container">
        <h2 className="text-center mb-4">Descubre nuestros blogs</h2>
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <div className="blog-card">
              <img src="https://kamaleon.viajes/wp-content/uploads/2013/03/Explora-Salto.jpg" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-6">
            <h5>Explorando la Patagonia Secreta</h5>
            <p>Descubre rutas poco conocidas y paisajes escondidos en la región más austral de Chile.</p>
            <Link to="/blogs" className="btn btn-primary mt-2">Ver todos los blogs</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
