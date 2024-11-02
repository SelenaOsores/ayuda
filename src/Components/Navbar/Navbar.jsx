import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [menu, setMenu] = useState("inicio")
  return (
    <div className='navbar'>
        <div className='nav'>

            <ul className='menu-horizontal' onClick={()=>{setMenu("inicio")}}>
                <li><Link to="/"><img src={logo} alt="" /></Link></li>
                <li>Nosotros
                    <ul className='menu-vertical'>
                        <li><Link  to="/nosotrosHistoria">Historia</Link></li>
                        <li><Link to="/nosotrosProd">Producciones</Link></li>
                    </ul>
                </li>
                <li onClick={()=>{setMenu("servicios")}}><Link to="/servicios">Servicios</Link>
                    <ul className='menu-vertical'>
                        <li><a href="#">Lavado</a></li>
                        <li><a href="#">Corte</a></li>
                        <li><a href="#">Peinado</a></li>
                        <li><a href="#">Coloracion</a></li>
                        <li><a href="#">Tratamientos</a></li>
                    </ul>
                </li>
                <li>Turnos
                    <ul className='menu-vertical'>
                        <li><Link to="/turnosLista">Lista de precios</Link></li>
                        <li><Link to="/turnosTerm">Terminos y condiciones</Link></li>
                    </ul>
                </li>
            </ul>
            <div className="login-register">
                <Link to="/loginSignUp"><button>Iniciar sesion</button></Link>
            </div>
        </div>
    </div>
  )
}

