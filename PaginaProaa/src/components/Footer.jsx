import React from "react";
import '../styles/Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__list-item">
                    <a href="#calendario" className="footer__link">Calendario</a>
                </li>
                <li className="footer__list-item">
                    <a href="#experiencias" className="footer__link">Experiencias Pedagógicas</a>
                </li>
                <li className="footer__list-item">
                    <a href="#gestion" className="footer__link">Gestión Cultural</a>
                </li>
                <li className="footer__list-item">
                    <a href="#tramites" className="footer__link">Portal de Trámites</a>
                </li>
                <li className="footer__list-item">
                    <a href="#preguntas" className="footer__link">Preguntas Frecuentes</a>
                </li>
            </ul>   
        </footer>
    );
};

