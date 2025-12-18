import { useState, useEffect, useCallback } from 'react';

const _getCarrito = () => JSON.parse(localStorage.getItem('carrito')) || [];
const _saveCarrito = (carrito) => localStorage.setItem('carrito', JSON.stringify(carrito));

export const useCarrito = () => {
    const [carrito, setCarrito] = useState(_getCarrito());
    const [totalItems, setTotalItems] = useState(0);

    const _recalcularTotales = useCallback((currentCarrito) => {
        const totalCant = currentCarrito.reduce((s, p) => s + (Number(p.cantidad) || 0), 0);
        setTotalItems(totalCant);
    }, []);

    useEffect(() => {
        _recalcularTotales(carrito);
    }, [carrito, _recalcularTotales]);

    const agregarItem = (nombre, precio, img) => {
        const precioNum = Number(String(precio).replace(/[^0-9.-]/g, ''));
        if (!nombre || !precioNum) return;

        let newCarrito = _getCarrito();
        const idx = newCarrito.findIndex(p => p.nombre === nombre);

        if (idx > -1) {
            newCarrito[idx].cantidad = (newCarrito[idx].cantidad || 0) + 1;
        } else {
            newCarrito.push({ nombre, precio: precioNum, img: img || '', cantidad: 1 });
        }

        _saveCarrito(newCarrito);
        setCarrito(newCarrito); 
        return true;
    };

    const cambiarCantidad = (index, delta) => {
        let newCarrito = [...carrito];
        newCarrito[index].cantidad += delta;

        if (newCarrito[index].cantidad <= 0) {
            newCarrito.splice(index, 1); 
        }

        _saveCarrito(newCarrito);
        setCarrito(newCarrito);
    };
    
    const eliminarItem = (index) => {
        let newCarrito = [...carrito];
        newCarrito.splice(index, 1);
        _saveCarrito(newCarrito);
        setCarrito(newCarrito);
    };

    const vaciarCarrito = () => {
        localStorage.removeItem('carrito');
        setCarrito([]);
    };


    return {
        carrito,
        totalItems,
        agregarItem,
        cambiarCantidad,
        eliminarItem,
        vaciarCarrito,
    };
};