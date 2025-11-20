
document.addEventListener("DOMContentLoaded", () => {
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

  const userMenuContainer = document.getElementById("userMenuContainer");
  const loginBtn = document.getElementById("loginBtn");

  if (!userMenuContainer || !loginBtn) return;


  if (usuarioActual && usuarioActual.email) {

    userMenuContainer.classList.remove("hidden");
    loginBtn.style.display = "none";

    const userNameLabel = document.getElementById("userNameLabel");
    const panelUserName = document.getElementById("panelUserName");
    const panelUserEmail = document.getElementById("panelUserEmail");
    const fullName = `${usuarioActual.nombre} ${usuarioActual.apellidoP || ''}`;

    if (userNameLabel) userNameLabel.textContent = usuarioActual.nombre;
    if (panelUserName) panelUserName.textContent = fullName;
    if (panelUserEmail) panelUserEmail.textContent = usuarioActual.email;

    const userMenuToggle = document.getElementById("userMenuToggle");
    const userPanel = document.getElementById("userPanel");

    if (userMenuToggle && userPanel) {
      userMenuToggle.addEventListener("click", (e) => {
        e.stopPropagation(); 
        userPanel.classList.toggle("hidden");
      });

      document.addEventListener("click", (e) => {
        if (!userMenuToggle.contains(e.target) && !userPanel.contains(e.target)) {
          userPanel.classList.add("hidden");
        }
      });
    }

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("usuarioActual");
        window.location.reload();
      });
    }

  } else {
  
    userMenuContainer.classList.add("hidden");
    loginBtn.style.display = ""; 
  }
});