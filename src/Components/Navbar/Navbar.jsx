import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const amount = useSelector(state => state.amount);
  const [isMenuOpen, setMenuOpen] = useState(false);  // State to toggle the menu

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <div className="nav-logo">EV-olution</div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/"><li style={{color:'white', textDecoration:"none"}}>Home</li></Link>
        <Link to="/feature"><li style={{color:'white', textDecoration:"none"}}>Explore</li></Link>
        <Link to="/testimonials"><li style={{color:'white', textDecoration:"none"}}>Testimonials</li></Link>
        <Link to="/contact"><li style={{color:'white', textDecoration:"none"}}>Contact</li></Link>
        <Link to="/shop"><li style={{color:'white', textDecoration:"none"}}>Shop</li></Link>
        <Link to="/blog"><li style={{color:'white', textDecoration:"none"}}>Blogs</li></Link>
        <Link to="/product"><li style={{color:'white', textDecoration:"none"}}>Products</li></Link>
        <button className='button btn btn-primary'>Balance = ${amount}</button>
      </ul>
    </div>



  );
}

export default Navbar;
