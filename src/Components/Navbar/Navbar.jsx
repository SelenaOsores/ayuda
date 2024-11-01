import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav'>

            <ul className='menu-horizontal'>
                <li><a id='imagen' href="#"><img src={logo} alt="" /></a></li>
                <li><a href="#">Nosotros</a>
                    <ul className='menu-vertical'>
                        <li><a href="#">Historia</a></li>
                        <li><a href="#">Producciones</a></li>
                    </ul>
                </li>
                <li><a href="#">Servicios</a>
                    <ul className='menu-vertical'>
                        <li><a href="#">Lavado</a></li>
                        <li><a href="#">Corte</a></li>
                        <li><a href="#">Peinado</a></li>
                        <li><a href="#">Coloracion</a></li>
                        <li><a href="#">Tratamientos</a></li>
                    </ul>
                </li>
                <li><a href="#">Turnos</a>
                    <ul className='menu-vertical'>
                        <li><a href="#">Lista de precios</a></li>
                        <li><a href="#">Terminos y condiciones</a></li>
                    </ul>
                </li>
            </ul>
            <div className="login-register">
                <button>Iniciar sesion</button>
                <button>Registrarse</button>
            </div>
        </div>
    </div>
  )
}

