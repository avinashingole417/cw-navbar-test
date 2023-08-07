import React from 'react';
import './Navbar.css'; // You can style your navbar using a CSS file
import logo from "./cwsuite-logo.webp"

const Navbar = () => {
 
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src ={logo} width={180} alt='logo'/>
      </div>
      <div className='show'>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/services">Services</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;