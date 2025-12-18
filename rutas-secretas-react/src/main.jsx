
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './styles/Global.css'; 
import './styles/Index.css'; 
import './styles/blogs.css';
import './styles/Carrito.css';
import './styles/Contactos.css';
import './styles/Detalle.css';
import './styles/Login.css';
import './styles/Nosotros.css';
import './styles/productos.css';
import './styles/Registro.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)