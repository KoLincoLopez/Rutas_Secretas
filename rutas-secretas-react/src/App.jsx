// src/App.jsx

import React from 'react';
// Importamos el CSS de Bootstrap (instalado vía npm)
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Importamos tus estilos CSS
import './styles/Global.css'; 
import './styles/Index.css'; 

import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; // El contenido principal de tu Index.html

function App() {
  // Nota: En una aplicación con múltiples páginas, aquí usarías React Router 
  // para cambiar el componente entre <Home />, <Productos />, etc.
  
  return (
    <>
      <Navbar />
      <Home /> {/* Esto contiene todo el <main> */}
      <Footer />
    </>
  );
}

export default App;