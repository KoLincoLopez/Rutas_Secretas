// src/pages/Contact.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Contactos';


function Contact() {
  return (
    <>
      <Navbar />

      <main className="d-flex justify-content-center align-items-center min-vh-100 contact-page">
        <section className="contact-box">
          <h2 className="text-center mb-4">Contáctanos</h2>

          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Tu nombre"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="gmail" className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="gmail"
                placeholder="ejemplo@gmail.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                id="mensaje"
                rows="4"
                placeholder="Escribe tu mensaje..."
              ></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
