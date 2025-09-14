function _actualizarBadge() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const totalCant = carrito.reduce((s, p) => s + (p.cantidad || 0), 0);
  const badge = document.querySelector('.cart-count');
  if (badge) badge.textContent = totalCant;
}

function mostrarCarrito() {
  const lista = document.getElementById('carrito-lista');
  const totalSpan = document.getElementById('carrito-total');
  if (!lista || !totalSpan) return;

  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  lista.innerHTML = '';
  let total = 0;

  if (carrito.length === 0) {
    lista.innerHTML = '<p class="text-center">Tu carrito está vacío</p>';
  }

  carrito.forEach((p, i) => {
    const subtotal = p.precio * p.cantidad;
    total += subtotal;

    const div = document.createElement('div');
    div.className = 'col-12 col-md-4 mb-3';
    div.innerHTML = `
      <div class="card h-100">
        <img src="${p.img}" class="card-img-top" alt="${p.nombre}" style="height:200px; object-fit:cover;">
        <div class="card-body">
          <h5 class="card-title">${p.nombre}</h5>
          <p class="card-text">
            Cantidad: 
            <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${i}, -1)">-</button>
            ${p.cantidad}
            <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${i}, 1)">+</button>
          </p>
          <p class="card-text">Precio unitario: $${p.precio.toLocaleString('es-CL')}</p>
          <p class="card-text">Subtotal: $${subtotal.toLocaleString('es-CL')}</p>
          <button class="btn btn-sm btn-danger mt-2" onclick="eliminarItem(${i})">Eliminar Todo</button>
        </div>
      </div>
    `;
    lista.appendChild(div);
  });

  totalSpan.textContent = total.toLocaleString('es-CL');
}

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
});
