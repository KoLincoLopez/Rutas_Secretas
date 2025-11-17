// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Blogs from "./pages/Blogs";
import Productos from "./pages/Productos";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contactos";
import Detalle from "./pages/Detalle";
import Carrito from "./pages/Carrito";

import { CarritoProvider } from "./hook/CarritoProvider.jsx";

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/carrito" element={<Carrito />} />

        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;
