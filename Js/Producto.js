(function () {
  'use strict';

  function _parsePrecio(valor) {
    if (typeof valor === 'number') return valor;
    if (!valor) return 0;
    const num = Number(String(valor).replace(/[^\d.-]/g, ''));
    return isNaN(num) ? 0 : num;
  }

  function _getCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
  }

  function _saveCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function agregarCarrito(nombre, precio, img) {
    if (!nombre) return;

    const precioNum = _parsePrecio(precio);
    const carrito = _getCarrito();
    const idx = carrito.findIndex(p => p.nombre === nombre);

    if (idx > -1) {
      carrito[idx].cantidad = (carrito[idx].cantidad || 0) + 1;
    } else {
      carrito.push({ nombre, precio: precioNum, img: img || '', cantidad: 1 });
    }

    _saveCarrito(carrito);
    _actualizarBadge();
    mostrarToast();
  }

  function _actualizarBadge() {
    const carrito = _getCarrito();
    const totalCant = carrito.reduce((s, p) => s + (Number(p.cantidad) || 0), 0);
    const badge = document.getElementById('carrito-count') || document.querySelector('.cart-count');
    if (badge) badge.textContent = totalCant;
  }

  function mostrarToast() {
    const toast = document.getElementById('toast-carrito');
    if (!toast) return;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
  }

  function mostrarCarrito() {
    const lista = document.getElementById('carrito-lista');
    const totalSpan = document.getElementById('carrito-total');
    const carrito = _getCarrito();
    let total = 0;

    if (!lista && !totalSpan) return;

    if (lista) {
      lista.innerHTML = '';
      if (carrito.length === 0) {
        lista.innerHTML = '<p class="text-center">Tu carrito está vacío</p>';
      } else {
        carrito.forEach((p, i) => {
          const precioNum = Number(p.precio) || 0;
          const cantidad = Number(p.cantidad) || 0;
          const subtotal = precioNum * cantidad;
          total += subtotal;

          const div = document.createElement('div');
          div.className = 'col-12 col-md-4 mb-3';
          div.innerHTML = `
                        <div class="card h-100">
                          <img src="${p.img || 'https://via.placeholder.com/600x400'}" class="card-img-top" alt="${p.nombre}" style="height:200px; object-fit:cover;">
                          <div class="card-body">
                            <h5 class="card-title">${p.nombre}</h5>
                            <p class="card-text">
                              Cantidad:
                              <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${i}, -1)">-</button>
                              ${cantidad}
                              <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${i}, 1)">+</button>
                            </p>
                            <p class="card-text">Precio unitario: $${precioNum.toLocaleString('es-CL')}</p>
                            <p class="card-text">Subtotal: $${subtotal.toLocaleString('es-CL')}</p>
                            <button class="btn btn-sm btn-danger mt-2" onclick="eliminarItem(${i})">Eliminar Todo</button>
                          </div>
                        </div>
                      `;
          lista.appendChild(div);
        });
      }
    }

    if (totalSpan) totalSpan.textContent = total.toLocaleString('es-CL');
  }

  window.eliminarItem = function (index) {
    const carrito = _getCarrito();
    if (index < 0 || index >= carrito.length) return;
    carrito.splice(index, 1);
    _saveCarrito(carrito);
    _actualizarBadge();
    mostrarCarrito();
  };

  window.cambiarCantidad = function (index, delta) {
    const carrito = _getCarrito();
    if (!carrito[index]) return;
    carrito[index].cantidad = (Number(carrito[index].cantidad) || 0) + delta;
    if (carrito[index].cantidad <= 0) carrito.splice(index, 1);
    _saveCarrito(carrito);
    _actualizarBadge();
    mostrarCarrito();
  };

  function initializeSliders() {
    document.querySelectorAll('.slider').forEach(slider => {
      const images = slider.querySelectorAll('img');
      const prevButton = slider.querySelector('.prev');
      const nextButton = slider.querySelector('.next');
      let currentIndex = 0;

      if (images.length === 0 || !prevButton || !nextButton) return;

      function updateSlider() {
        images.forEach((img, index) => {
          img.classList.remove('active');
        });

        if (images[currentIndex]) {
          images[currentIndex].classList.add('active');
        }
      }

      updateSlider();

      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
      });

      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    _actualizarBadge();

    initializeSliders();

    document.querySelectorAll('.agregar-btn').forEach(btn => {
      const handler = () => {
        const nombre = btn.dataset.nombre;
        const precio = btn.dataset.precio;
        const img = btn.dataset.img;
        agregarCarrito(nombre, precio, img);
      };
      btn.addEventListener('click', handler);
      btn._agregarHandler = handler;
    });

    document.querySelectorAll('.reservar-btn').forEach(btn => {
      const handler = () => {
        const nombre = btn.dataset.nombre;
        const precio = btn.dataset.precio;
        localStorage.setItem('tour', nombre || '');
        localStorage.setItem('precio', precio || '0');
        window.location.href = 'Reserva.html';
      };
      btn.addEventListener('click', handler);
      btn._reservarHandler = handler;
    });

    const vaciarBtn = document.getElementById('vaciar-carrito');
    if (vaciarBtn) {
      vaciarBtn.addEventListener('click', () => {
        if (confirm('¿Vaciar todo el carrito?')) {
          localStorage.removeItem('carrito');
          _actualizarBadge();
          mostrarCarrito();
        }
      });
    }

    if (document.getElementById('carrito-lista') || document.getElementById('carrito-total')) {
      mostrarCarrito();
    }
  });

})();