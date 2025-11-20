const form = document.getElementById("loginForm");

if (!form) {
  console.warn("Validation.js: No es la página de login, no se ejecuta.");
} else {

  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  document.getElementById("showPassword").addEventListener("change", function () {
    passwordInput.type = this.checked ? "text" : "password";
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      passwordError.textContent = "Debe ingresar correo y contraseña.";
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    const usuario = usuarios.find(u =>
      u.email.toLowerCase() === email.toLowerCase()
    );

    if (!usuario) {
      emailError.textContent = "El usuario no existe.";
      return;
    }

    if (usuario.password !== password) {
      passwordError.textContent = "Contraseña incorrecta.";
      return;
    }

    localStorage.setItem("usuarioActual", JSON.stringify(usuario));

    window.location.href = "Index.html";
  });

}
