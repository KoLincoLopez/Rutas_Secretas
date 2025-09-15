function _parsePrecio(valor) {
  if (typeof valor === 'number') return valor;
  if (!valor) return 0;
  const num = Number(String(valor).replace(/[^\d.-]/g, ''));
  return isNaN(num) ? 0 : num;
}

function _actualizarBadge() {
  const clave = 'carrito';
  const carrito = JSON.parse(localStorage.getItem(clave)) || [];
  const totalCant = carrito.reduce((s, p) => s + (p.cantidad || 0), 0);
  const badge = document.querySelector('.cart-count');
  if (badge) badge.textContent = totalCant;
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
  mostrarCarrito();

  mostrarToast();
}


function eliminarItem(index) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  _actualizarBadge();
  mostrarCarrito();
}

document.addEventListener('DOMContentLoaded', () => {
  _actualizarBadge();
  mostrarCarrito();
});

document.querySelectorAll('.agregar-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const nombre = btn.dataset.nombre;
    const precio = btn.dataset.precio;
    const img = btn.dataset.img;
    agregarCarrito(nombre, precio, img);
  });
});

function mostrarToast() {
  const toast = document.getElementById("toast-carrito");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

function agregarCarrito(nombre) {
  console.log(`Agregado: ${nombre}`);

  mostrarToast();
}
