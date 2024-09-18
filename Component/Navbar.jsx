import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '/stylesheet/navbar.css'; // Import your CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='hamburger-menu' onClick={handleMenuToggle}>
          &#9776; {/* Unicode character for hamburger icon */}
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to='/home' className='nav-items'>Home</Link>
          <Link to='/about' className='nav-items'>About</Link>
          <Link to='/contact' className='nav-items'>Contact</Link>
          <Link to='/courses' className='nav-items'>Courses</Link>
          <Link to='/rollno' className='nav-items'>Roll no</Link>
        </div>
        <ul className='desktop-menu'>
          <li className='nav'><Link to='/home'>Home</Link></li>
          <li className='nav-items'><Link to='/about'>About</Link></li>
          <li className='nav-items'><Link to='/contact'>Contact</Link></li>
          <li className='nav-items'><Link to='/courses'>Courses</Link></li>
          <li className='nav-items'><Link to='/rollno'>Roll no</Link></li>
          <input placeholder='search' className='inputbox' />
          <button className='btn'>Search</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
