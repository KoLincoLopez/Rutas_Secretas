import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCarrito } from '../hook/useCarrito';
import { PRODUCTOS_DATA } from './Productos';
import "../styles/Detalle.css";

function Detalle() {
  const { id } = useParams();
  const { agregarItem } = useCarrito();
  const [producto, setProducto] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setProducto(PRODUCTOS_DATA[id] || { titulo: "No encontrado", descripcion: <p>Producto no existe</p>, precio: 0 });
  }, [id]);

  const handleAgregarCarrito = () => {
    if (!producto || !producto.precio) return;
    agregarItem(producto.titulo, producto.precio, producto.imagen);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  if (!producto) return <div>Cargando...</div>;

  return (
    <main className="container py-5 pt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-3">{producto.titulo}</h2>
        <img src={producto.imagen} className="img-fluid rounded mb-3 detalle-img" alt={producto.titulo} />
        <div>{producto.descripcion}</div>
        <p className="fw-bold fs-5 mt-2">Precio: ${producto.precio.toLocaleString('es-CL')} CLP</p>
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={handleAgregarCarrito}>Agregar al carrito</button>
        </div>
      </div>

      {showToast && <div className="toast-carrito show">¡Se agregó al carrito!</div>}
    </main>
  );
}

export default Detalle;
