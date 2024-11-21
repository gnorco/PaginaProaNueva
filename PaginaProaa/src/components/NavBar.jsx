import React from 'react';
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-transparent position-absolute w-100">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/PaginaProaa/public/proa.png" alt="" width="30" height="24"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">¿Quienes Somos?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Titulacion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Acuerdos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Biblioteca</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

