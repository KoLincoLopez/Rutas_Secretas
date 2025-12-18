import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Carrito.css'; 
import '../styles/Global.css'; 

const Carrito = () => {
  const [carritoItems, setCarritoItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadCarrito();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [carritoItems]);

  const loadCarrito = () => {
    const storedCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarritoItems(storedCarrito);
  };

  const calculateTotal = () => {
    const newTotal = carritoItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  const removeItem = (id) => {
    const updatedCarrito = carritoItems.filter((item) => item.id !== id);
    setCarritoItems(updatedCarrito);
    localStorage.setItem('carrito', JSON.stringify(updatedCarrito));
  };

  const vaciarCarrito = () => {
    setCarritoItems([]);
    localStorage.removeItem('carrito');
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(price);
  };

  const handlePagar = () => {
    alert('¡Procesando pago!');
    vaciarCarrito(); 
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5 pt-5">
        <div className="container-fluid">
          <h2 id="carrito-titulo" className="text-center mb-4">
            Tu Carrito
          </h2>
          <section id="carritoSection">
            <ul id="listaCarrito">
              {carritoItems.length === 0 ? (
                <p className="text-center">El carrito está vacío.</p>
              ) : (
                carritoItems.map((item) => (
                  <li key={item.id}>
                    <img src={item.images[0]} alt={item.name} />
                    <h5>{item.name}</h5>
                    <p>
                      Cantidad: {item.quantity} | Precio:{' '}
                      {formatPrice(item.price)}
                    </p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Eliminar
                    </button>
                  </li>
                ))
              )}
            </ul>
          </section>

          <div className="mt-4 text-end">
            <h4>Total: <span id="carrito-total">{formatPrice(total)}</span></h4>
            <button id="vaciar-carrito" onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>
          </div>
          <div className="mt-4 text-end">
            <button id="Pagar" onClick={handlePagar}>
              Pagar
            </button>
          </div>
        </div>
      </main>
      <br /><br /><br />
      <Footer />
    </>
  );
};

export default Carrito;