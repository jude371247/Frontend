import "./Header.css";
import { FaShoppingCart } from 'react-icons/fa';
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from 'react-router-dom'; 

const Header = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  return (
    <nav>
      <div className="leftNav">
        TrustCart
      </div>
      <div className="hamburger">
        <Hamburger toggled={hamburgerIsOpen} toggle={setHamburgerIsOpen} aria-label="Toggle menu" />
      </div>
      <div className={`rightNav ${hamburgerIsOpen ? 'open' : ''}`}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/RegisterPage">Register</Link>
        <div className="cart">
          <FaShoppingCart size={30} aria-label="Shopping Cart" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
