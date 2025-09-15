const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const showPassword = document.getElementById("showPassword");
const loginForm = document.getElementById("loginForm");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

showPassword.addEventListener("change", function () {
  passwordInput.type = this.checked ? "text" : "password";
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  emailError.textContent = "";
  passwordError.textContent = "";

  const emailValue = emailInput.value.trim();
  const correoRegex = /^[\w.-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
  if (!emailValue) {
    emailError.textContent = "Ingrese su correo electrónico";
    isValid = false;
  } else if (emailValue.length > 100) {
    emailError.textContent = "El correo no puede exceder 100 caracteres";
    isValid = false;
  } else if (!correoRegex.test(emailValue)) {
    emailError.textContent = "Ingrese un correo válido (@duoc.cl, @profesor.duoc.cl, @gmail.com)";
    isValid = false;
  }

  const passwordValue = passwordInput.value.trim();
  if (!passwordValue) {
    passwordError.textContent = "Ingrese su contraseña";
    isValid = false;
  } else if (passwordValue.length < 4 || passwordValue.length > 10) {
    passwordError.textContent = "La contraseña debe tener entre 4 y 10 caracteres";
    isValid = false;
  }

  if (isValid) {
    alert("Formulario válido, enviando datos...");
  }
});
