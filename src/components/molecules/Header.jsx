import Logo from "../atoms/Logo";
import ProfileButton from "../atoms/ProfileButton";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <ProfileButton />
    </header>
  );
};

export default Header;
