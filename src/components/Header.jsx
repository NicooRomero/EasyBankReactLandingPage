import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import hbg from '../assets/images/icon-hamburger.svg'; 

function Header () {
    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <button class="btn header-btn">Request Invite</button>
                    <nav class="nav hide-on-sm">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                    </nav>
                    <div className="toggle">
                        <img className="hamburguer hide-on-lg" src={hbg} alt="mobilicon"/>       
                    </div>
                </div>
            </div>
        </header>

     );
}
 
export default Header;