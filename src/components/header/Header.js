import React from 'react'
import "./Header.css"



export default function Header() {
    return (
        <div>
            <header>
                <div class="nav-bar" id="nav-bar">
                    <a href="#" class="logo">Sahil</a>
                    <div class="navigation">
                        <div class="nav-items">
                            <div class="nav-close-btn"></div>
                            <a class="active" href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#services">Services</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                    <div class="nav-menu-btn"></div>
                </div>
            </header>
        </div>
    )
}
