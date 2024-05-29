import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Navbar.module.css';

const Navbar = () => {
  const [alink, setAlink] = useState('');

  const handleClick = (e) => {
    setAlink(e.target.id);
  };


  return (
    <nav className={css.Navbar}>
          <div className={css.menu}>
              <Link to='/' id='home' onClick={handleClick} className={alink === 'home' ? css.active : css.simple}>Home</Link>
              <Link to='/demo' id='demo' onClick={handleClick} className={alink === 'demo' ? css.active : css.simple}>LiveDemo</Link>
              <Link to='/course/1' id='courseId' onClick={handleClick} className={alink === 'courseId' ? css.active : css.simple}>CourseDescription</Link>
              <Link to='/dashboard' id='dashboard' onClick={handleClick} className={alink === 'dashboard' ? css.active : css.simple}>Dashboard</Link>
              <Link to='/search' id='search' onClick={handleClick} className={alink === 'search' ? css.active : css.simple}>SerachCourses</Link>
              
            </div>
          <div className={css.sign}>
              <Link to='/course/1' id='courseId' onClick={handleClick} className={alink === 'courseId' ? css.active : css.simple}>Login/SignUp</Link>
          </div>
    </nav>

  );
};

export default Navbar;
