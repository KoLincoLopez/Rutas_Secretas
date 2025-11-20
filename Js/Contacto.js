// Elementos del DOM
const form = document.querySelector('form');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('gmail');
const mensajeInput = document.getElementById('mensaje');

const nombreError = document.getElementById('nombreError');
const emailError = document.getElementById('emailError');
const mensajeError = document.getElementById('mensajeError');

function validarEmail(email) {
  if (!email) return true;
  if (email.length > 100) return false;
  const re = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
  return re.test(email);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  nombreError.textContent = '';
  emailError.textContent = '';
  mensajeError.textContent = '';

  let valido = true;

  const nombre = nombreInput.value.trim();
  if (!nombre) {
    nombreError.textContent = 'El nombre es obligatorio.';
    valido = false;
  } else if (nombre.length > 100) {
    nombreError.textContent = 'El nombre no puede exceder los 100 caracteres.';
    valido = false;
  }

  const email = emailInput.value.trim();
  if (!validarEmail(email)) {
    emailError.textContent = 'Correo inválido. Debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com y máximo 100 caracteres.';
    valido = false;
  }

  const mensaje = mensajeInput.value.trim();
  if (!mensaje) {
    mensajeError.textContent = 'El mensaje es obligatorio.';
    valido = false;
  } else if (mensaje.length > 500) {
    mensajeError.textContent = 'El mensaje no puede exceder los 500 caracteres.';
    valido = false;
  }

  if (!valido) return;

  const contacto = {
    nombre,
    email,
    mensaje,
    fecha: new Date().toISOString()
  };

  let contactos = JSON.parse(localStorage.getItem('contactos') || '[]');
  contactos.push(contacto);
  localStorage.setItem('contactos', JSON.stringify(contactos));

  const successToast = document.createElement('div');
  successToast.textContent = 'Mensaje enviado correctamente.';
  successToast.className = 'toast-success';
  document.body.appendChild(successToast);
  setTimeout(() => successToast.classList.add('show'), 10);
  setTimeout(() => {
    successToast.classList.remove('show');
    document.body.removeChild(successToast);
    form.reset();
  }, 2500);
});
