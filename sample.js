import React, { useState } from 'react';
import './style/Main.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link,NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
    return <div>
        <nav class="navbar navbar-expand-lg " style={{background: "linear-gradient(to right, #0099CC, #006699)"}}>
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



*{
    font-family: 'Poppins', sans-serif;
}
/* home page style */
footer {
    color: rgb(255, 255, 255);
}

a {
    color: white;
}

.shfooter .collapse {
    display: inherit;
}

@media (max-width: 767px) {
    .shfooter ul {
        margin-bottom: 0;
    }

    .shfooter .collapse {
        display: none;
    }

    .shfooter .collapse.show {
        display: block;
    }

    .shfooter .title .fa-angle-up,
    .shfooter .title[aria-expanded="true"] .fa-angle-down {
        display: none;
    }

    .shfooter .title[aria-expanded="true"] .fa-angle-up {
        display: block;
    }

    .shfooter .navbar-toggler {
        display: inline-block;
        padding: 0;
    }
}

.resize {
    text-align: center;
}

.resize {
    margin-top: 3rem;
    font-size: 1.25rem;
}

/*RESIZESCREEN ANIMATION*/
.fa-angle-double-right {
    animation: rightanime 1s linear infinite;
}

.fa-angle-double-left {
    animation: leftanime 1s linear infinite;
}

@keyframes rightanime {
    50% {
        transform: translateX(10px);
        opacity: 0.5;
    }

    100% {
        transform: translateX(10px);
        opacity: 0;
    }
}

@keyframes leftanime {
    50% {
        transform: translateX(-10px);
        opacity: 0.5;
    }

    100% {
        transform: translateX(-10px);
        opacity: 0;
    }
}

/*Login area style*/
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

html,
.login_wrapper {
    height: 100%;
}

.login_wrapper {
    display: grid;
    place-items: center;
    background: #dde1e7;
    background-image: url("loginback2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    text-align: center;
}
.login_content {
    width: 330px;
    padding: 30px 25px;
    background: #f8f9fa;
    border-radius: 10px;
    box-shadow: -3px -3px 7px #ffffff73,
        2px 2px 5px rgba(94, 104, 121, 0.288);
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin: 40px 0;
}

.login_content .text {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #595959;
}

.field {
    height: 40px;
    width: 100%;
    display: flex;
    position: relative;
}
.field:nth-child(2) {
    margin-top: 15px;
}
.field:nth-child(3) {
    margin-top: 15px;
}

.field input {
    height: 100%;
    width: 100%;
    padding-left: 45px;
    outline: none;
    border: none;
    font-size: 16px;
    background: #dde1e7;
    color: #595959;
    border-radius: 25px;
    box-shadow: inset 2px 2px 5px #BABECC,
        inset -5px -5px 10px #ffffff73;
}
.field input:hover {
    background: #ced0d2;
}
.field input:focus {
    box-shadow: inset 1px 1px 2px #BABECC,
        inset -1px -1px 2px #ffffff73;
}

.field select {
    height: 100%;
    width: 100%;
    padding-left: 45px;
    outline: none;
    border: none;
    font-size: 16px;
    background: #dde1e7;
    color: #595959;
    border-radius: 25px;
    box-shadow: inset 2px 2px 5px #BABECC,
        inset -5px -5px 10px #ffffff73;
}
.field select:hover {
    background: #ced0d2;
}
.field select:focus {
    background: #dde1e7;
    color: #595959;
    box-shadow: inset 1px 1px 2px #BABECC,
        inset -1px -1px 2px #ffffff73;
}

.field span {
    position: absolute;
    color: #595959;
    width: 50px;
    line-height: 40px;
}

.field label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 45px;
    pointer-events: none;
    color: #666666;
}

.field input:valid~label {
    opacity: 0;
}

.forgot-pass {
    text-align: left;
    margin: 6px 0 10px 5px;
}

.forgot-pass a {
    font-size: 16px;
    color: #3498db;
    text-decoration: none;
}

.forgot-pass:hover a {
    text-decoration: underline;
}

.signin_button {
    margin: 2px 0;
    width: 100%;
    height: 45px;
    font-size: 18px;
    line-height: 45px;
    font-weight: 600;
    background: #35d300;
    border-radius: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #595959;
    box-shadow: 2px 2px 5px #BABECC,
        -5px -5px 10px #ffffff73;
}

.signin_button:focus {
    color: #3498db;
    box-shadow: inset 2px 2px 5px #BABECC,
        inset -5px -5px 10px #ffffff73;
}

.sign-up {
    margin: 10px 0;
    color: #595959;
    font-size: 16px;
}

.sign-up a {
    color: #3498db;
    text-decoration: none;
}

.sign-up a:hover {
    text-decoration: underline;
}



.navbar-gradient {
    background: linear-gradient(to right, rgb(173, 216, 230), rgb(70, 130, 180)); /* Light blue to darker blue */
}


        <i class="bi bi-arrow-return-left"></i>
