const productos = {
  1: {
    titulo: "Aventuras: Lagos y Volcanes",
    imagen: "https://mlz713kvh2ay.i.optimole.com/w:1000/h:750/q:mauto/ig:avif/https://alsurexpediciones.cl/wp-content/uploads/2017/08/kayak-petrohue-peulla.jpg",
    descripcion:
      `
            <p>Vive la postal más icónica del sur de Chile. Lagos de azul cristalino, volcanes nevados y bosques verdes que parecen sacados de cuento. Una experiencia para quienes buscan aventura con la comodidad de un viaje bien organizado.</p>
            <h5>Incluye:</h5>
            <ul>
                <li>Recepción en Puerto Montt o Puerto Varas con transporte privado</li>
                <li>2 noches en lodge rústico con desayuno incluido</li>
                <li>Trekking guiado en el Parque Nacional Vicente Pérez Rosales</li>
                <li>Ascenso panorámico al Volcán Osorno (vehículo + caminata corta)</li>
                <li>Navegación en Kayak por el Lago Todos los Santos (nivel básico, seguro)</li>
                <li>Almuerzo típico en una casa de familia local con recetas sureñas</li>
                <li>Guía bilingüe (español/inglés)</li>
            </ul>
            <p><strong>Duración:</strong> 3 días / 2 noches<br>
            <strong>Precio referencial:</strong>$399.835 por persona</p>
        `
  },
  2: {
    titulo: "Encantos de Chiloé",
    imagen: "https://pbs.twimg.com/media/DUeITt_X4AAXb1C.jpg",
    descripcion:
      `
            <p>Sumergete en la isla de las leyendas y tradiciones vivas. Descubre su cultura única, 
            sus paisajes marinos y la calidez de su gente. Un viaje donde la historia, la gastronomia y
            la naturaleza se entrelazan</p>
            <h5>Incluye:</h5>
            <ul>
                <li>Traslado desde Puerto Montt a Castro (ferry incluido)</li>
                <li>2 noches en hostal Boutique con desayuno</li>
                <li>Recorrido por los palafitos de Castro y artesania local</li>
                <li>Tour por iglesia patrimoniales UNESCO (Achao, Rilán, Nercón)</li>
                <li>Excursion al Muelle de las Almas en Cucao, con caminata por la costa</li>
                <li>Almuerzo tradicional con curanto en hoyo</li>
                <li>Taller cultural: breve introduccion a la mitologia chilota con relatores locales</li>
                <li>Guia bilingue (español/ingles)</li>
            </ul>
            <p><strong>Duración:</strong> 3 días / 2 noches<br>
            <strong>Precio referencial:</strong> $361.756 por persona</p>
        `
  },
  3: {
    titulo: "Secretos de la Patagonia Norte",
    imagen: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/11/06/interior-de-la-capilla-de-marmol-donde-se-muestra-el-lago-general-carrera-en-chile-1.jpeg",
    descripcion:
      `
            <p>Explora paisajes que parecen de otro planeta. Cuevas de marmol, aguas turquesa y montañas infinitas.
            Un viaje para quienes buscan comodidad sin perder el contacto con la fuerza salvaje de la patagonia</p>
            <h5>Incluye:</h5>
            <ul>
                <li>Recepcion en Coyhaique o Balmaceda con transporte privado</li>
                <li>3 noches en lodge de montaña con desayuno y cena</li>
                <li>Navegacion a las Cuevas de Mármol en puerto Rio Tranquilo</li>
                <li>Caminata guiada a miradores de la Carretera Austral</li>
                <li>Avistamiento de fauna: cóndores, zorros y aves nativas</li>
                <li>Cena tipica patagonica con cordero al palo</li>
                <li>Guia bilingue: (español/ingles)</li>
                <li>Equipo basico para trekking (Bastones, linternas frontale)</li>
            </ul>
            <p><strong>Duración:</strong> 4 días / 3 noches<br>
            <strong>Precio referencial:</strong>$618.793 por persona</p>
        `
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (productos[id]) {
  document.getElementById("titulo").innerText = productos[id].titulo;
  document.getElementById("imagen").src = productos[id].imagen;
  document.getElementById("descripcion").innerHTML = productos[id].descripcion;
} else {
  document.getElementById("detalleProducto").innerHTML = "<p>Producto no encontrado.</p>";
}


document.addEventListener("DOMContentLoaded", () => {
  const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!btnAgregarCarrito || !id) return;

  const producto = productos[id];
  if (!producto) return;

  btnAgregarCarrito.addEventListener("click", () => {
    const precioMatch = producto.descripcion.match(/USD \$\d+/);
    const precio = precioMatch ? parseInt(precioMatch[0].replace("CLP $", "")) : 0;

    agregarCarrito(producto.titulo, precio, producto.imagen);
    mostrarToastCarrito();
  });
});
function mostrarToastCarrito() {
  const toast = document.getElementById('toast-carrito');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}
