import "./ClubCard.scss";

const ClubCard = ({ name, image, location }) => {
  return (
    <div className="club-card-horizontal">
      {/* Imagen del club */}
      <img src={image} alt={name} className="club-image" />

      {/* Información del club */}
      <div className="club-info">
        <p className="club-name">{name}</p>

        {/* Bloque de ubicación separado */}
        <div className="club-location-box">
          <span className="icon">🗺️</span>
          <p>
            <strong>Ubicación:</strong> {location}
          </p>
        </div>

        {/* Servicios */}
        <div className="club-services">
          <div className="service">
            <span className="icon">🚗</span><strong> Estacionamiento</strong>
          </div>
          <div className="service">
            <span className="icon">🍽️</span><strong> Buffet</strong>
          </div>
          <div className="service">
            <span className="icon">📶</span><strong> WiFi</strong>
          </div>
          <div className="service">
            <span className="icon">❄️</span><strong> Climatización</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
