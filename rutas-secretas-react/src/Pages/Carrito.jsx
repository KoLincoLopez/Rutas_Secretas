// src/pages/Carrito.jsx

import React from 'react';
import { useCarrito } from '../hooks/useCarrito'; // Importamos el nuevo hook

function Carrito() {
    // Usamos el hook para obtener y manipular el estado del carrito
    const { carrito, cambiarCantidad, eliminarItem, vaciarCarrito } = useCarrito();

    const calcularTotal = () => {
        return carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    };

    const formatPrice = (price) => price.toLocaleString('es-CL');

    return (
        <main className="container mt-5 pt-5">
            <h2 id="carrito-titulo" className="text-center mb-4">Tu Carrito</h2>
            
            <div className="row" id="carrito-lista">
                {carrito.length === 0 ? (
                    <p className="text-center">Tu carrito está vacío</p>
                ) : (
                    carrito.map((p, i) => (
                        <div key={i} className="col-12 mb-3">
                            <div className="card item-card">
                                <div className="card-body d-flex align-items-center">
                                    <img src={p.img} className="img-fluid me-3" alt={p.nombre} style={{ height: '100px', objectFit: 'cover' }} />
                                    
                                    <div className="flex-grow-1">
                                        <h5 className="card-title">{p.nombre}</h5>
                                        <p className="card-text">Precio unitario: ${formatPrice(p.precio)}</p>
                                        <p className="card-text">
                                            Cantidad:
                                            <button className="btn btn-sm btn-outline-secondary mx-2" onClick={() => cambiarCantidad(i, -1)}>-</button>
                                            {p.cantidad}
                                            <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => cambiarCantidad(i, 1)}>+</button>
                                        </p>
                                        <p className="card-text fw-bold">Subtotal: ${formatPrice(p.precio * p.cantidad)}</p>
                                    </div>
                                    <button className="btn btn-sm btn-danger mt-2" onClick={() => eliminarItem(i)}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            
            {carrito.length > 0 && (
                <>
                    <div className="mt-4 text-end">
                        <h4>Total: $<span id="carrito-total">{formatPrice(calcularTotal())}</span></h4>
                        <button id="vaciar-carrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    </div>
                    
                    <div className="mt-4 text-end">
                        <button id="comprar-btn" className="btn btn-primary">Proceder a la Compra</button>
                    </div>
                </>
            )}
        </main>
    );
}

export default Carrito;