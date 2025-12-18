import React, { createContext, useState, useEffect, useContext } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => {
  return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const localCarrito = localStorage.getItem('carrito');
    return localCarrito ? JSON.parse(localCarrito) : [];
  });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const parsePrecio = (valor) => {
    if (typeof valor === 'number') return valor;
    if (!valor) return 0;
    const num = Number(String(valor).replace(/[^\d.-]/g, ''));
    return isNaN(num) ? 0 : num;
  };

  const agregarCarrito = (nombre, precio, img) => {
    if (!nombre) return;
    const precioNum = parsePrecio(precio);
    setCarrito((prevCarrito) => {
      const idx = prevCarrito.findIndex((p) => p.nombre === nombre);
      if (idx > -1) {
        const newCarrito = [...prevCarrito];
        newCarrito[idx].cantidad = (newCarrito[idx].cantidad || 0) + 1;
        return newCarrito;
      } else {
        return [...prevCarrito, { nombre, precio: precioNum, img: img || '', cantidad: 1 }];
      }
    });
    mostrarToast();
  };

  const mostrarToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1800);
  };

  const totalItems = carrito.reduce((sum, item) => sum + (item.cantidad || 0), 0);

  const value = {
    carrito,
    agregarCarrito,
    totalItems,
    showToast,
  };

  return <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>;
};