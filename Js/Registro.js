// Elementos del DOM
    const form = document.getElementById('registroForm');
    const password = document.getElementById('password');
    const confirmar = document.getElementById('confirmar');
    const showPassword = document.getElementById('showPasswordRegistro');
    const emailInput = document.getElementById('exampleInputEmail1');
    const passwordError = document.getElementById('passwordError');
    const confirmError = document.getElementById('confirmError');
    const emailError = document.getElementById('emailError');
    const nombreInput = document.getElementById('nombres');

    showPassword.addEventListener('change', function() {
      const type = this.checked ? 'text' : 'password';
      password.type = type;
      confirmar.type = type;
    });

    password.addEventListener('input', function() {
      passwordError.style.display = 'none';
      password.classList.remove('error');
      if (this.value.length > 0 && (this.value.length < 4 || this.value.length > 10)) {
        passwordError.textContent = 'La contraseña debe tener entre 4 y 10 caracteres.';
        passwordError.style.display = 'block';
        password.classList.add('error');
      }
    });

    confirmar.addEventListener('input', function() {
      confirmError.style.display = 'none';
      confirmar.classList.remove('error');
      if (password.value && this.value !== password.value) {
        confirmError.textContent = 'Las contraseñas no coinciden.';
        confirmError.style.display = 'block';
        confirmar.classList.add('error');
      }
    });

    emailInput.addEventListener('input', function() {
      emailError.style.display = 'none';
      emailInput.classList.remove('error');
    });

    function validarEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault(); 
      passwordError.style.display = 'none';
      confirmError.style.display = 'none';
      emailError.style.display = 'none';
      password.classList.remove('error');
      confirmar.classList.remove('error');
      emailInput.classList.remove('error');

      const pwd = password.value.trim();
      const conf = confirmar.value.trim();
      const email = emailInput.value.trim();
      const nombre = nombreInput.value.trim();

      if (!validarEmail(email)) {
        emailError.textContent = 'Introduce un correo válido.';
        emailError.style.display = 'block';
        emailInput.classList.add('error');
        emailInput.focus();
        return;
      }

      if (pwd.length < 4 || pwd.length > 10) {
        passwordError.textContent = 'La contraseña debe tener entre 4 y 10 caracteres.';
        passwordError.style.display = 'block';
        password.classList.add('error');
        password.focus();
        return;
      }

      if (pwd !== conf) {
        confirmError.textContent = 'Las contraseñas no coinciden.';
        confirmError.style.display = 'block';
        confirmar.classList.add('error');
        confirmar.focus();
        return;
      }

      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

      const existe = usuarios.some(u => u.email && u.email.toLowerCase() === email.toLowerCase());
      if (existe) {
        emailError.textContent = 'El correo ya está registrado.';
        emailError.style.display = 'block';
        emailInput.classList.add('error');
        emailInput.focus();
        return;
      }

      const nuevoUsuario = {
        nombre: nombre || '',
        email: email,
        password: pwd,
        creadoEn: new Date().toISOString()
      };

      usuarios.push(nuevoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      alert('Registro exitoso. Ya puedes iniciar sesión.');
      form.reset();
    });
 