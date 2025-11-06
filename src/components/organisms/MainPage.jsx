import Header from "../molecules/Header";
import ClubList from "./ClubList";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
        <section className="reservas">
            <div className="reservas-lista">
                <h2>Mis próximas reservas</h2>
                {/* Ejemplo temporal hasta conectar al back */}
                <div className="reserva-card">
                <p><strong>Club Central</strong> - Cancha 3</p>
                <p>10 de Noviembre, 18:00 hs</p>
                </div>
                <div className="reserva-card">
                <p><strong>Smash Arena</strong> - Cancha 2</p>
                <p>12 de Noviembre, 20:00 hs</p>
                </div>
            </div>
        </section>
      <main className="content">
        <h2 className="title">Elige tu club</h2>
        <ClubList />
      </main>
    </div>
  );
};

export default MainPage;
