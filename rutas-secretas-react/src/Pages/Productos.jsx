import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from '../hooks/CarritoProvider'; 
import '../styles/productos'; 

const ProductCard = ({ id, images, title, description, price }) => {
  const { agregarItem } = useCarrito(); 

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentImage = images[currentImageIndex];

  const handleAddToCart = () => {
    agregarItem(title, price, currentImage); 
  };

  return (
    <div className="producto-card"> 
        <div className="slider"> 
            {images.length > 1 && (
                <button className="prev" onClick={prevImage}>
                  <i className="fas fa-chevron-left"></i>
                </button>
            )}
            <img src={currentImage} alt={title} className="active" />
            {images.length > 1 && (
                <button className="next" onClick={nextImage}>
                  <i className="fas fa-chevron-right"></i>
                </button>
            )}
        </div>
        <h3>{title}</h3>
        <p className="descripcion">{description}</p> 
        <p><strong>${price} CLP</strong></p>
        <button 
          className="agregar-btn" 
          onClick={handleAddToCart} 
        >
            Agregar al carrito
        </button>
        <Link to={`/detalle/${id}`}>Ver Detalle</Link>
    </div>
  );
}

function Productos() {
    const staticProducts = [
        {
            id: 1,
            title: "Torres del Paine",
            description: "Trekking y paisajes inolvidables.",
            longDescription: "Descubre uno de los parques más famosos del mundo, con glaciares, montañas y fauna única. Este tour incluye transporte, guía especializado y entradas a los miradores más impresionantes.",
            price: "120.000",
            img: "https://lastorres.com/content/uploads/header-torres-del-paine-parque-nacional-375x340-1.png",
            images: [
                "https://lastorres.com/content/uploads/header-torres-del-paine-parque-nacional-375x340-1.png",
                "https://torresdelpaine.com/wp-content/uploads/sites/6/2023/08/actividad-icehike-41-600x338.jpg",
                "https://torresdelpaine.com/wp-content/uploads/sites/6/2024/10/KayakGrey1-600x338.jpg"
            ]
        },
        {
            id: 2,
            title: "Chiloé",
            description: "Iglesias patrimoniales y gastronomía local.",
            longDescription: "Vive la magia de Chiloé visitando iglesias patrimoniales, mercados artesanales y degustando la gastronomía típica. Una experiencia inolvidable en este rincón lleno de cultura y tradición.",
            price: "95.000",
            img: "https://www.gochile.cl/fotos/thumb2/75432-177739392@2x.jpg",
            images: [
                "https://www.gochile.cl/fotos/thumb2/75432-177739392@2x.jpg",
                "https://angelmotours.cl/wp-content/uploads/2016/05/chiloe-1030x687.jpg",
                "https://www.gochile.cl/fotos/full/108150-parque-nacional-chiloe-shutterstock-id44-mpo20az3bv4x3wqfjpiose7kj05nafsdkmbqe231rk.jpg"
            ]
        },
        {
            id: 3,
            title: "Pucón",
            description: "Volcanes, lagos y aventura.",
            longDescription: "Vive una jornada de aventura en Pucón con visitas a cascadas y finaliza relajándote en las Termas Geométricas rodeadas de naturaleza. Incluye transporte, guía y entradas.",
            price: "110.000",
            img: "https://www.gochile.cl/fotos/thumb2/105916-105722-chilevacaciones-region-de-los-lagos-img006@2x.jpg",
            images: [
                "https://www.gochile.cl/fotos/thumb2/105916-105722-chilevacaciones-region-de-los-lagos-img006@2x.jpg",
                "https://www.gochile.cl/fotos/thumb2/105915-105610-14700791_1254267347978399_2625816188240095663_o@2x.jpg",
                "https://www.gochile.cl/fotos/thumb2/107025-106906-turismo-anuncios-1805-1@2x.jpg"
            ]
        },
        {
            id: 4,
            title: "Valdivia y Corral",
            description: "Ríos, fuertes históricos y mercados costeros.",
            longDescription: "Disfruta de la belleza de Valdivia recorriendo sus ríos, fuertes históricos y mercados costeros. Incluye un paseo en bote por la Bahía de Corral y degustación de cervezas artesanales locales.",
            price: "85.000", 
            img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Corral%2C_2019_%2809%29.jpg",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/b/b4/Corral%2C_2019_%2809%29.jpg",
                "https://lh5.googleusercontent.com/proxy/kt5RecmvnNSaEZaMaElGeDhKfmrJDpVGTLnC_ETk3zBkNnpIOIhWQxcMgm9aAQe0MAeU-Uul9QCq58IdT1B5ZNYFgQumUvAXkxuxAmUaGRQCNGWy2cSvE9rtbCd_-k_g8Y",
                "https://www.armada.cl/armada/site/artic/20150323/imag/foto_0000001020150323152008.jpg"
            ]
        },
        {
            id: 5,
            title: "Carretera Austral – Futaleufú",
            description: "Ríos turquesas, glaciares y bosques prístinos.",
            longDescription: "Explora una de las rutas más hermosas de Chile recorriendo ríos de aguas turquesas, glaciares y bosques prístinos. Ideal para quienes buscan contacto directo con la naturaleza y actividades como rafting.",
            price: "150.000",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJUdoA-tyOx0eQ-AztZmgsHUOTrKKvTAHag&s",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJUdoA-tyOx0eQ-AztZmgsHUOTrKKvTAHag&s",
                "https://storage.googleapis.com/chile-travel-cdn/2021/07/carretera-austral_prin-min.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLERUivb8U2U1FrjjU6BevmXx6prY1xxhhg&s"
            ]
        },
        {
            id: 6,
            title: "Puerto Varas y Saltos del Petrohué",
            description: "Lagos, volcanes y cascadas impresionantes.",
            longDescription: "Explora la ciudad de las rosas, Puerto Varas, y maravíllate con los Saltos del Petrohué, un espectáculo natural entre el volcán Osorno y el lago Llanquihue.",
            price: "100.000",
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ac/af/8c/photo0jpg.jpg?w=1200&h=1200&s=1",
            images: [
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ac/af/8c/photo0jpg.jpg?w=1200&h=1200&s=1",
                "https://upload.wikimedia.org/wikipedia/commons/b/bd/Saltos_del_petrohue_01b.jpg",
                "https://angelmotours.cl/wp-content/uploads/2023/03/Saltos-del-Petrohue.jpg"
            ]
        },
        {
            id: 7,
            title: "Isla Magdalena – Punta Arenas",
            description: "Navegación y colonia de pingüinos magallánicos.",
            longDescription: "Navega por el estrecho de Magallanes para conocer la Isla Magdalena y observar la increíble colonia de pingüinos magallánicos en su hábitat natural.",
            price: "130.000",
            img: "https://todopatagonia.net/wp-content/uploads/2018/08/pinguinos-magallanicos-isla-magdalena.jpg",
            images: [
                "https://todopatagonia.net/wp-content/uploads/2018/08/pinguinos-magallanicos-isla-magdalena.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiT78MvaMj4KXZ_eWJ9rglAtwqSK8AjvFXA&s",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d7/57/88/il-faro-del-capo.jpg?w=300&h=300&s=1"
            ]
        },
        {
            id: 8,
            title: "Puerto Montt",
            description: "Paisajes y cultura del sur.",
            longDescription: "Explora la capital de la Región de Los Lagos, conocida por su hermoso borde costero, su gastronomía marina y su cercanía a impresionantes paisajes naturales.",
            price: "100.000",
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5b/a2/4c/caption.jpg?w=600&h=400&s=1",
            images: [
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5b/a2/4c/caption.jpg?w=600&h=400&s=1",
                "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/12/Actividades-fascinantes-que-puedes-hacer-en-Puerto-Montt.jpg",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/dd/bc/7f/palafitos-construcciones.jpg?w=600&h=400&s=1"
            ]
        }
    ];

    return (
        <main className="container-fluid pt-4"> 
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center my-4">Nuestros Tours</h2>
                    <div className="productos-grid"> 
                        {staticProducts.map(product => (
                            <ProductCard 
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                description={product.longDescription} 
                                price={product.price}
                                images={product.images} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Productos;