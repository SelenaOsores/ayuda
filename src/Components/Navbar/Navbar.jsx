import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [menu, setMenu] = useState("inicio");
    return (
        <div className='navbar'>
            <div className='nav'>
                <ul className='menu-horizontal' onClick={() => { setMenu("inicio") }}>
                    <li>
                        <Link className = 'link' style={{ textDecoration: 'none' }} to="/"><img src={logo} alt="" /></Link>
                    </li>
                    <li>
                        <span>Nosotros</span>
                        <ul className='menu-vertical'>
                            <li><Link className = 'link' style={{ textDecoration: 'none' }} to="/nosotrosHistoria">Historia</Link></li>
                            <li><Link className = 'link' style={{ textDecoration: 'none' }} to="/nosotrosProd">Producciones</Link></li>
                        </ul>
                    </li>
                    <li onClick={() => { setMenu("servicios") }}>
                        <Link className = 'link' style={{ textDecoration: 'none' }} to="/servicios">Servicios</Link>
                        <ul className='menu-vertical'>
                            <li><a href="#lavado">Lavado</a></li>
                            <li><a href="#corte">Corte</a></li>
                            <li><a href="#peinado">Peinado</a></li>
                            <li><a href="#coloracion">Coloracion</a></li>
                            <li><a href="#tratamientos">Tratamientos</a></li>
                        </ul>
                    </li>
                    <li>
                        <span>Turnos</span>
                        <ul className='menu-vertical'>
                            <li><Link className = 'link' style={{ textDecoration: 'none' }} to="/turnosLista">Lista de precios</Link></li>
                            <li><Link className = 'link' style={{ textDecoration: 'none' }} to="/turnosTerm">Términos y condiciones</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link className = 'link' style={{ textDecoration: 'none' }} to="/loginSignUp">
                            <button className="login-button">Iniciar sesión</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
