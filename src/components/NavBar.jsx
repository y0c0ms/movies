import { Link } from "react-router-dom";
import "../css/Navbar.css";
import filmwheel from "../assets/filmwheel.png"; 


function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* Remova o texto "Movie App" e coloque a imagem */}
        <Link to="/">
          <img src={filmwheel} alt="Film Wheel" className="logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
