function _parsePrecio(valor) {
  if (typeof valor === 'number') return valor;
  if (!valor) return 0;
  const num = Number(String(valor).replace(/[^\d.-]/g, ''));
  return isNaN(num) ? 0 : num;
}

function agregarCarrito(nombre, precio, img) {
  const precioNum = _parsePrecio(precio);
  const clave = 'carrito';
  let carrito = JSON.parse(localStorage.getItem(clave)) || [];

  const idx = carrito.findIndex(p => p.nombre === nombre);
  if (idx > -1) {
    carrito[idx].cantidad += 1;
  } else {
    carrito.push({ nombre, precio: precioNum, img: img, cantidad: 1 });
  }

  localStorage.setItem(clave, JSON.stringify(carrito));
  _actualizarBadge();
  mostrarCarrito(); // Actualiza visualmente las cards
}

function _actualizarBadge() {
  const clave = 'carrito';
  const carrito = JSON.parse(localStorage.getItem(clave)) || [];
  const totalCant = carrito.reduce((s, p) => s + (p.cantidad || 0), 0);
  const badge = document.querySelector('.cart-count');
  if (badge) badge.textContent = totalCant;
}

// Función para mostrar carrito como cards
function mostrarCarrito() {
  const lista = document.getElementById('carrito-lista');
  if (!lista) return;

  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  lista.innerHTML = '';

  carrito.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'col-12 col-md-4';
    div.innerHTML = `
      <div class="card h-100">
        <img src="${p.img}" class="card-img-top" alt="${p.nombre}">
        <div class="card-body">
          <h5 class="card-title">${p.nombre}</h5>
          <p class="card-text">Cantidad: ${p.cantidad}</p>
          <p class="card-text"><strong>$${p.precio.toLocaleString('es-CL')}</strong></p>
          <button class="btn btn-sm btn-danger" onclick="eliminarItem(${i})">Eliminar</button>
        </div>
      </div>
    `;
    lista.appendChild(div);
  });
}

function eliminarItem(index) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  _actualizarBadge();
  mostrarCarrito();
}

// Inicializar badge y carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  _actualizarBadge();
  mostrarCarrito();
});

// Asignar evento a todos los botones de agregar al carrito
document.querySelectorAll('.agregar-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const nombre = btn.dataset.nombre;
    const precio = btn.dataset.precio;
    const img = btn.dataset.img;
    agregarCarrito(nombre, precio, img);
  });
});

