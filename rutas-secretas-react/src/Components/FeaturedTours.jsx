import React from 'react';
import { Link } from 'react-router-dom';

const tours = [
    {
        id: 1,
        titulo: "Aventuras: Lagos y Volcanes",
        img: "https://mlz713kvh2ay.i.optimole.com/w:1000/h:750/q:mauto/ig:avif/https://alsurexpediciones.cl/wp-content/uploads/2017/08/kayak-petrohue-peulla.jpg",
        precio: 399835,
        descripcion: "Ven y descubre la magia del sur entre lagos cristalinos y montañas imponentes..."
    },
    {
        id: 2,
        titulo: "Encantos de Chiloé",
        img: "https://pbs.twimg.com/media/DUeITt_X4AAXb1C.jpg",
        precio: 361756,
        descripcion: "Sumergete en la cultura y tradición de Chiloé. Plafitos de colores, mitos que viven..."
    },
    {
        id: 3,
        titulo: "Secretos de la Patagonia Norte",
        img: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/11/06/interior-de-la-capilla-de-marmol-donde-se-muestra-el-lago-general-carrera-en-chile-1.jpeg",
        precio: 618793,
        descripcion: "Atrévete a explorar la Patagonía como nunca antes. Descubre formaciones naturales únicas..."
    }
];

function FeaturedTours() {
    return (
        <section>
            <div className="container">
                <h3>Paquetes Destacados</h3>
                <div className="cards-slider d-flex flex-wrap gap-4">
                    {tours.map(tour => (
                        <div key={tour.id} className="card custom-card" style={{ width: "18rem" }}>
                            <img src={tour.img} className="card-img-top" alt={tour.titulo}/>
                            <div className="card-body">
                                <h4 className="card-title">{tour.titulo}</h4>
                                <p className="card-text">{tour.descripcion}</p>
                                <div className="price-button d-flex justify-content-between align-items-center mt-3">
                                    <span className="price">Precio: ${tour.precio.toLocaleString('es-CL')} CLP</span>
                                    <Link to={`/detalle/${tour.id}`} className="btn btn-primary">Ver Más</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedTours;
