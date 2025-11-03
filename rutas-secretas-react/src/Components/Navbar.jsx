// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container-fluid">
        
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/Images/logo_basic.png" alt="Rutas Secretas" className="navbar-logo me-2" />
          <span className="brand-text fs-4">Rutas Secretas</span>
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">Tours</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Más
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/contactos">Contacto</Link></li>
                <li><Link className="dropdown-item" to="/blogs">Blogs</Link></li>
              </ul>
            </li>
          </ul>

          <div className="navbar-right d-flex align-items-center">
            <Link to="/carrito" className="nav-btn">Carrito</Link>
            <Link to="/login" className="nav-btn highlight ms-2">Iniciar Sesión</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;