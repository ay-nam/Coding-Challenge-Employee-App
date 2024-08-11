import React from 'react';
import '../styles/Navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">EmployeeApp</a>
      </div>
      <div className="nav-links">
        <a href="#home">
          <HomeIcon />
        </a>
        <a href="#about">
          <AddBoxIcon />
          
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
