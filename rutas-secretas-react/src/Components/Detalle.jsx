import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Detalle.css';
import '../styles/Global.css';

const productsData = [
    {
      id: 1,
      name: "Torres del Paine",
      description: "Descubre uno de los parques más famosos del mundo, con glaciares, montañas y fauna única. Este tour incluye transporte, guía especializado y entradas a los miradores más impresionantes.",
      price: 120000,
      images: [
        "https://lastorres.com/content/uploads/header-torres-del-paine-parque-nacional-375x340-1.png",
        "https://torresdelpaine.com/wp-content/uploads/sites/6/2023/08/actividad-icehike-41-600x338.jpg",
        "https://torresdelpaine.com/wp-content/uploads/sites/6/2024/10/KayakGrey1-600x338.jpg"
      ]
    },
    {
      id: 2,
      name: "Chiloé",
      description: "Vive la magia de Chiloé visitando iglesias patrimoniales, mercados artesanales y degustando la gastronomía típica. Una experiencia inolvidable en este rincón lleno de cultura y tradición.",
      price: 95000,
      images: [
        "https://www.gochile.cl/fotos/thumb2/75432-177739392@2x.jpg",
        "https://angelmotours.cl/wp-content/uploads/2016/05/chiloe-1030x687.jpg",
        "https://www.gochile.cl/fotos/full/108150-parque-nacional-chiloe-shutterstock-id44-mpo20az3bv4x3wqfjpiose7kj05nafsdkmbqe231rk.jpg"
      ]
    },
    {
      id: 3,
      name: "Pucón",
      description: "Vive una jornada de aventura en Pucón con visitas a cascadas y finaliza relajándote en las Termas Geométricas rodeadas de naturaleza. Incluye transporte, guía y entradas.",
      price: 110000,
      images: [
        "https://www.gochile.cl/fotos/thumb2/105916-105722-chilevacaciones-region-de-los-lagos-img006@2x.jpg",
        "https://www.gochile.cl/fotos/thumb2/105915-105610-14700791_1254267347978399_2625816188240095663_o@2x.jpg",
        "https://www.gochile.cl/fotos/thumb2/107025-106906-turismo-anuncios-1805-1@2x.jpg"
      ]
    },
    {
      id: 4,
      name: "Valdivia y Corral",
      description: "Disfruta de la belleza de Valdivia recorriendo sus ríos, fuertes históricos y mercados costeros. Incluye un paseo en bote por la Bahía de Corral y degustación de cervezas artesanales locales.",
      price: 85000,
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/b/b4/Corral%2C_2019_%2809%29.jpg",
        "https://lh5.googleusercontent.com/proxy/kt5RecmvnNSaEZaMaElGeDhKfmrJDpVGTLnC_ETk3zBkNnpIOIhWQxcMgm9aAQe0MAeU-Uul9QCq58IdT1B5ZNYFgQumUvAXkxuxAmvUaGRQCNGWy2cSvE9rtbCd_-k_g8Y",
        "https://www.armada.cl/armada/site/artic/20150323/imag/foto_0000001020150323152008.jpg"
      ]
    },
    {
      id: 5,
      name: "Carretera Austral – Futaleufú",
      description: "Explora una de las rutas más hermosas de Chile recorriendo ríos de aguas turquesas, glaciares y bosques prístinos. Ideal para quienes buscan contacto directo con la naturaleza y actividades como rafting.",
      price: 150000,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJUdoA-tyOx0eQ-AztZmgsHUOTrKKvTAHag&s",
        "https://storage.googleapis.com/chile-travel-cdn/2021/07/carretera-austral_prin-min.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLERUivb8U2U1FrjjU6BevmXx6prY1xxhhg&s"
      ]
    },
    {
      id: 6,
      name: "Puerto Varas y Saltos del Petrohué",
      description: "Explora una de las rutas más hermosas de Chile recorriendo ríos de aguas turquesas, glaciares y bosques prístinos. Ideal para quienes buscan contacto directo con la naturaleza y actividades como rafting.",
      price: 100000,
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ac/af/8c/photo0jpg.jpg?w=1200&h=1200&s=1",
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/Saltos_del_petrohue_01b.jpg",
        "https://angelmotours.cl/wp-content/uploads/2023/03/Saltos-del-Petrohue.jpg"
      ]
    },
    {
      id: 7,
      name: "Isla Magdalena – Punta Arenas",
      description: "Navega por el estrecho de Magallanes para conocer la Isla Magdalena y observar la increíble colonia de pingüinos magallánicos en su hábitat natural.",
      price: 130000,
      images: [
        "https://todopatagonia.net/wp-content/uploads/2018/08/pinguinos-magallanicos-isla-magdalena.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiT78MvaMj4KXZ_eWJ9rglAtwqSK8AjvFXA&s",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d7/57/88/il-faro-del-capo.jpg?w=300&h=300&s=1"
      ]
    },
    {
      id: 8,
      name: "Puerto Montt",
      description: "Paisajes y cultura del sur.",
      price: 100000,
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5b/a2/4c/caption.jpg?w=600&h=400&s=1",
        "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/12/Actividades-fascinantes-que-puedes-hacer-en-Puerto-Montt.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/dd/bc/7f/palafitos-construcciones.jpg?w=600&h=400&s=1"
      ]
    }
  ];

const Detalle = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      const existingProductIndex = carrito.findIndex(item => item.id === product.id);

      if (existingProductIndex !== -1) {
        carrito[existingProductIndex].quantity += 1;
      } else {
        carrito.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('carrito', JSON.stringify(carrito));
      showCartToast();
    }
  };

  const showCartToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container py-5 mt-5 pt-5">
          <p>Producto no encontrado.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container py-5 mt-5 pt-5">
        <div id="detalleProducto" className="card shadow p-4">
          <h2 id="titulo" className="text-center mb-3">
            {product.name}
          </h2>
          <img
            id="imagen"
            src={product.images[0]} 
            className="img-fluid rounded mb-3 detalle-img"
            alt={product.name}
          />
          <p id="descripcion">{product.description}</p>
          <p id="precio" className="fw-bold fs-5 mt-2">
            {new Intl.NumberFormat('es-CL', {
              style: 'currency',
              currency: 'CLP',
            }).format(product.price)}
          </p>
          <div className="text-center mt-3">
            <button id="btnAgregarCarrito" className="btn btn-primary" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>

      {showToast && (
        <div id="toast-carrito" className="toast-carrito show">
          ¡Se agregó al carrito!
        </div>
      )}
      <Footer />
    </>
  );
};

export default Detalle;