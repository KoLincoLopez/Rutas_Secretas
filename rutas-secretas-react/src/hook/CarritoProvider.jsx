import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCarrito as useCarritoLogic } from './useCarrito.js'; 

const CarritoContext = createContext();

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe ser usado dentro de un CarritoProvider');
  }
  return context;
};


export const CarritoProvider = ({ children }) => {
  const { 
    carrito, 
    totalItems, 
    agregarItem, 
    cambiarCantidad, 
    eliminarItem, 
    vaciarCarrito 
  } = useCarritoLogic();

  const [showToast, setShowToast] = useState(false);

  const mostrarToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1800);
  };

  const agregarItemConToast = (nombre, precio, img) => {
    const itemAgregado = agregarItem(nombre, precio, img); 
    if (itemAgregado) { 
      mostrarToast();
    }
  };

  const value = {
    carrito,
    totalItems,
    agregarItem: agregarItemConToast, 
    cambiarCantidad,
    eliminarItem,
    vaciarCarrito,
    showToast,
    mostrarToastManualmente: mostrarToast 
  };

  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  );
};