import React from 'react'
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div>


<footer className="footer">
    <div className="footer-container">
        <div className="footer-section">
            <h4>INSTITUCIONAL</h4>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Sucursales</a></li>
                <li><a href="#">Términos y Condiciones</a></li>
            </ul>
        </div>

        <div className="footer-section">
            <h4>TURNOS</h4>
            <ul>
                <li><a href="#">Turnos</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Lista de Precios</a></li>
                <li><a href="#">Preguntas Frecuentes</a></li>
            </ul>
        </div>

        <div className="footer-section">
            <h4>CONTACTO</h4>
            <p><strong>Palermo</strong><br />Gorriti 4714, Palermo, CABA.<br />TURNOS: +54 9 11 5131 9333</p>
        </div>
    </div>

    <div className="footer-bottom">
        <div className="footer-logo">
            <img src="logo.png" alt="AC" />
        </div>
        <div className="footer-socials">
            <a href="#"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="#"><FontAwesomeIcon icon={faTiktok} size="2x" /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
        </div>
        <p>&copy; 2024 MalaPeluqueria</p>
    </div>
</footer>

    </div>
  )
}
