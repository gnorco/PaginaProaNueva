import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent position-absolute w-100">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/proa.png" alt="Logo Proa" width="30" height="24" />
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

