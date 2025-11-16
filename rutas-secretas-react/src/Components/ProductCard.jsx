import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/productos.css'; 

const ProductCard = ({ id, images, title, description, price }) => { // Recibe 'images'
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Asumiendo que `images` es un array de URLs de imágenes
  const currentImage = images[currentImageIndex];

  return (
    <div className="producto-card"> {/* Usar la misma clase que en tu HTML */}
        <div className="slider">
            {images.length > 1 && ( // Solo muestra los botones si hay más de una imagen
                <button className="prev" onClick={prevImage}><i className="fas fa-chevron-left"></i></button>
            )}
            <img src={currentImage} alt={title} className="active" />
            {images.length > 1 && (
                <button className="next" onClick={nextImage}><i className="fas fa-chevron-right"></i></button>
            )}
        </div>
        <h3>{title}</h3>
        <p>{description}</p> {/* Esta sería la longDescription si la pasas */}
        <p><strong>${price} CLP</strong></p>
        <button 
          className="agregar-btn" 
          data-nombre={title} 
          data-precio={price} 
          data-img={currentImage} // La imagen actual del slider
        >
            Agregar al carrito
        </button>
        <Link to={`/detalle/${id}`}>Ver Detalle</Link>
    </div>
  );
}

export default ProductCard;