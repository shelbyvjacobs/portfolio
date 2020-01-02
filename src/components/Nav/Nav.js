import React from 'react';
import "./Nav.css";

export default function Nav() {
    return (
        <nav className="nav">
            <p className="nav-name">Shelby Jacobs</p>
            <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            </div>
        </nav>
    );
};