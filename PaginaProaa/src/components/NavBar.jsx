import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const backgroundHeight = document.getElementById('background-image')?.offsetHeight || 0;
      setIsScrolled(window.scrollY > backgroundHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-sm ${
        isScrolled ? 'navbar-scrolled' : 'bg-transparent'
      } w-100`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="/proa.png"
            alt="Logo Proa"
            width="50"
            height="50"
            className="rounded-circle"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ¿Quiénes Somos?
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/titulacion">
                Titulación
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/acuerdos">
                Acuerdos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/biblioteca">
                Biblioteca
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proyectos4to">
                Proyectos 4to Año
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
