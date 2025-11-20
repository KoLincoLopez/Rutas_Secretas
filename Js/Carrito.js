// Archivo: Js/Carrito.js

function _actualizarBadge() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const totalCant = carrito.reduce((s, p) => s + (p.cantidad || 0), 0);
  const badge = document.querySelector('.cart-count');
  if (badge) badge.textContent = totalCant;
}

function mostrarCarrito() {
  const lista = document.getElementById('carrito-lista');
  const totalSpan = document.getElementById('carrito-total');
  const subtotalDisplay = document.getElementById('carrito-subtotal-display');

  if (!lista || !totalSpan || !subtotalDisplay) return;

  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  lista.innerHTML = '';
  let total = 0;

  if (carrito.length === 0) {
    lista.innerHTML = '<div class="col-12"><p class="text-center p-5 border rounded">Tu carrito está vacío. ¡Explora nuestros <a href="Productos.html">Tours</a>!</p></div>';
  }

  carrito.forEach((p, i) => {
    const subtotal = p.precio * p.cantidad;
    total += subtotal;

    const div = document.createElement('div');
    div.className = 'col-12 col-md-6 mb-4';
    div.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${p.img}" class="card-img-top" alt="${p.nombre}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.nombre}</h5>
          <p class="card-text text-muted small">${p.descripcion || 'Sin descripción.'}</p>
          <p class="card-text fw-bold">Precio unitario: $${p.precio.toLocaleString('es-CL')}</p>

          <div class="d-flex align-items-center mb-3 mt-auto">
            <span class="me-3">Cantidad:</span>
            <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${i}, -1)">-</button>
            <span class="mx-2">${p.cantidad}</span>
            <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${i}, 1)">+</button>
          </div>

          <p class="card-text fw-bold">Subtotal: $${subtotal.toLocaleString('es-CL')}</p>
          <button class="btn btn-sm btn-danger mt-2" onclick="eliminarItem(${i})">Eliminar Tour</button>
        </div>
      </div>
    `;
    lista.appendChild(div);
  });

  totalSpan.textContent = total.toLocaleString('es-CL');
  subtotalDisplay.textContent = total.toLocaleString('es-CL');

  function eliminarItem(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    _actualizarBadge();
    mostrarCarrito();
  }

  function cambiarCantidad(index, delta) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito[index].cantidad += delta;

    if (carrito[index].cantidad <= 0) {
      carrito.splice(index, 1);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    _actualizarBadge();
    mostrarCarrito();
  }

  document.addEventListener('DOMContentLoaded', () => {
    _actualizarBadge();
    mostrarCarrito();

    const vaciarBtn = document.getElementById('vaciar-carrito');
    if (vaciarBtn) {
      vaciarBtn.addEventListener('click', () => {
        localStorage.removeItem('carrito');
        _actualizarBadge();
        mostrarCarrito();
      });
    }

    const pagarBtn = document.getElementById('Pagar');
    if (pagarBtn) {
      pagarBtn.addEventListener('click', () => {
        alert("Procesando pago... ¡Gracias por tu compra!");
      });
    }
  })
  };