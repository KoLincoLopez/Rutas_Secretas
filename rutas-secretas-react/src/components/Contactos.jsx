import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Contactos.css'; 
import '../styles/Global.css'; 

const Contactos = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario de contacto enviado');
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <body className="contact-page">
        <main className="d-flex justify-content-center align-items-center min-vh-100">
          <section className="contact-box">
            <h2 className="text-center mb-4">Contáctanos</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" required />
              </div>
              <div className="mb-3">
                <label htmlFor="gmail" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="gmail" placeholder="ejemplo@gmail.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="4" placeholder="Escribe tu mensaje..." required></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Enviar</button>
              </div>
            </form>
          </section>
        </main>
        {showToast && (
          <div className="toast-success show">
            Mensaje enviado con éxito!
          </div>
        )}
      </body>
      <Footer />
    </>
  );
};

export default Contactos;