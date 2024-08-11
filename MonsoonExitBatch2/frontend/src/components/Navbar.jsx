import React, { useState } from 'react';
import '../styles/Navbar.css';


const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">EmployeeApp</a>
      </div>
      <div className='nav-links'>
        <a href="#home"><img src='../assets/homeicon.png' /></a>
        <a href="#about"><img src='../homeicon.png' /></a>
      </div>
    </nav>
  );
};

export default Navbar;
