import React, { Component } from 'react';
import '../../public/css/navbar.css';

class Navbar extends Component{

    render(){
        return(
            <div className="nav-div">
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <a className="navbar-brand" href="/">
                        <img id="logo-navbar" src="/img/logo.png" alt=""/> 
                    </a>
                    <div className="collapse navbar-collapse " id="navbarText">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tareas</a>
                            </li>
                        </ul>
                    </div>
                </nav>  
            </div>
        );
    }
}

export default Navbar;