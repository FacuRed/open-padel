import Logo from "../atoms/Logo";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header" >
      <div className="logoWrapper">
        <Logo size="large" />
      </div>
      <h2 className="pageTitle">Principal</h2> {/* Título de la pestaña */}
      <div className="userStatus">
        {/* Usamos un ícono simple de perfil */}
        <span className="profileIcon">👤</span>
      </div>
    </header>
  );
};

export default Header;
