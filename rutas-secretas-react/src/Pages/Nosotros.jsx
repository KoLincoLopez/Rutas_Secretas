// src/pages/Nosotros.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Nosotros'; 

function Nosotros() {
    return (
        <>
            <Navbar />

            <section className="hero mt-5 pt-4">
                <h1 className="fs-1 text-center">Descubre Chile de manera única</h1>
            </section>

            <main className="container pt-4">
                <section className="contenido-nosotros px-3">
                    <h2 className="text-center mb-4">Quiénes Somos</h2>
                    <p className="text-center mb-5">
                        En <strong>Rutas Secretas</strong> nos apasiona mostrar la belleza de Chile más allá de los circuitos turísticos tradicionales.
                        Nos especializamos en <strong>tours por lugares poco conocidos</strong>, pero igual de impresionantes y memorables.
                    </p>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card card-nosotros">
                                <img src="https://i0.wp.com/sinmordaza.com/wp-content/uploads/2019/01/PATAGONIA.jpg?fit=696%2C464&ssl=1"
                                    className="card-img-top" alt="Patagonia" />
                                <div className="card-body">
                                    <h5 className="card-title">Aventuras en la Patagonia</h5>
                                    <p className="card-text">Senderos escondidos, glaciares y paisajes que pocos turistas conocen.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card-nosotros">
                                <img src="https://mayurutour.com/wp-content/uploads/2020/01/Salar-de-surire.jpg"
                                    className="card-img-top" alt="Desierto del Norte" />
                                <div className="card-body">
                                    <h5 className="card-title">Rincones del Norte</h5>
                                    <p className="card-text">Explora valles y salares poco visitados que guardan secretos milenarios.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Nosotros;
