import React, { useState } from 'react';
import './style/Main.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link,NavLink } from 'react-router-dom/cjs/react-router-dom.min'


function Navbar() {
    return <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Standard_Chartered_%282021%29.svg/2560px-Standard_Chartered_%282021%29.svg.png"
                        alt="Stan Chartered logo" width="110px" height="45px" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link active" exact to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link active" exact to="/about">About</NavLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Others
                            </a>
                            <ul class="dropdown-menu">
                                <li><NavLink className="nav-link active" exact to="/profile">Profile</NavLink></li>
                                <li><NavLink className="nav-link active" exact to="/tradelog">Trade Log</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    {/* 
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Trade ID" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                        </button>
                    </form>
                    */}
                    <button 
                    type="button" 
                    class="btn mx-2"
                    style={{backgroundColor:'#cc0000'}}
                    >
                        <Link style={{textDecoration:'none',color:'white'}} exact to="/login">
                            <span><FontAwesomeIcon icon="fa-solid fa-right-from-bracket" size="sm" /> Logout</span>
                        </Link>
                    </button>

                </div>
            </div>
        </nav>

    </div>
}

export default Navbar;
