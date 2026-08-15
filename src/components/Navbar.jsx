import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useContext(CartContext);

  function getLinkClass({ isActive }) {
    return isActive ? "nav-link active" : "nav-link";
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink to="/" className="logo">
          DrinkHub
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={getLinkClass}>
            Shop
          </NavLink>
          <NavLink to="/cart" className={getLinkClass}>
            Cart ({cartCount})
          </NavLink>
          <NavLink to="/admin" className={getLinkClass}>
            Admin Portal
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
