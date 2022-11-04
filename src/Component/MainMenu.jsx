import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
    return(
        <header className="main-header">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
            <a href="/">
                <img className="main-logo" src="https://st.depositphotos.com/1915171/5109/v/450/depositphotos_51091665-stock-illustration-coder-sign-icon-programmer-symbol.jpg" alt="logito" />
            </a>
        </div>
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main">
            <nav className="main-menu" id="main-menu">
                <ul>
                    {/* Navlink esta disenado para menus de navegacion , tiene la clase especifica actriveClasName para navegar entre las pestanas   */}
                    <li><NavLink exact activeClassName="activo" to='/'>Inicio</NavLink></li>
                    <li><NavLink exact activeClassName="activo" to='/cursos'>Cursos</NavLink></li>
                    <li><NavLink exact activeClassName="activo" to='/formulario'>Formulario</NavLink></li>

                </ul>
            </nav>
            <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
    </header>
    )
    
}

export default MainMenu;