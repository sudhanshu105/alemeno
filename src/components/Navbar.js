import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Navbar.module.css';
import { FaBars } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const name = useSelector(state => state.courses.namestudent); 

  const [alink, setAlink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e) => {
    setAlink(e.target.id);
    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={css.Navbar}>
      <div className={css.hamburger} onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`${css.menu} ${menuOpen ? css.open : ''}`}>
        <Link to='/' id='home' onClick={handleClick} className={alink === 'home' ? css.active : css.simple}>Home</Link>
        <Link to='/demo' id='demo' onClick={handleClick} className={alink === 'demo' ? css.active : css.simple}>LiveDemo</Link>
        <Link to='/dashboard' id='dashboard' onClick={handleClick} className={alink === 'dashboard' ? css.active : css.simple}>Dashboard</Link>
        <Link to='/search' id='search' onClick={handleClick} className={alink === 'search' ? css.active : css.simple}>SearchCourses</Link>
      </div>
      <div className={css.sign}>
        {name}
      </div >
    </nav>
  );
};

export default Navbar;
