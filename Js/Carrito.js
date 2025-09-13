// Carrito como arreglo
let carrito = [];
let total = 0;

// Función para agregar productos con precio
function agregarCarrito(producto, precio) {
    carrito.push({producto, precio});
    total += precio;
    actualizarCarrito();
}

// Mostrar el carrito en la página
function actualizarCarrito() {
    let lista = document.getElementById("listaCarrito");
    lista.innerHTML = ""; // limpia antes de actualizar

    carrito.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio} CLP`;

        // Botón para eliminar producto
        let btn = document.createElement("button");
        btn.textContent = "X";
        btn.onclick = () => eliminarDelCarrito(index);

        li.appendChild(btn);
        lista.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

// Eliminar un producto por índice
function eliminarDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}
