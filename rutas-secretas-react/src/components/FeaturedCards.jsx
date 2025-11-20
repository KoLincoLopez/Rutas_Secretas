import { Link } from "react-router-dom";

export default function FeaturedCards() {
  const cards = [
    {
      id: 1,
      title: "Aventuras: Lagos y Volcanes",
      price: "$399.835 CLP",
      img: "https://mlz713kvh2ay.i.optimole.com/w:1000/h:750/q:mauto/ig:avif/https://alsurexpediciones.cl/wp-content/uploads/2017/08/kayak-petrohue-peulla.jpg",
      text: "Ven y descubre la magia del sur entre lagos cristalinos y montañas imponentes."
    },
    {
      id: 2,
      title: "Encantos de Chiloé",
      price: "$361.756 CLP",
      img: "https://pbs.twimg.com/media/DUeITt_X4AAXb1C.jpg",
      text: "Sumergete en la cultura y tradición de Chiloé."
    },
    {
      id: 3,
      title: "Secretos de la Patagonia Norte",
      price: "$618.793 CLP",
      img: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/11/06/interior-de-la-capilla-de-marmol.jpg",
      text: "Atrévete a explorar la Patagonia como nunca antes."
    }
  ];

  return (
    <section>
      <div className="container">
        <h3>Paquetes Destacados</h3>
        <div className="cards-slider mt-4">
          {cards.map(card => (
            <div className="card custom-card" key={card.id}>
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h4 className="card-title">{card.title}</h4>
                <p className="card-text">{card.text}</p>
                <div className="price-button">
                  <span className="price">{card.price}</span>
                  <Link to={`/detalle/${card.id}`} className="btn btn-primary">Ver Más</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
