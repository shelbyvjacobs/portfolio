// Headshot, short description
// import Skills here
// import Contact here

import React from 'react';
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import img from "./Img/aboutSquare.jpg";
import "./About.css";

export default function About(props) {
    return (
        <div className="About Section">
            <h2 className="header">About</h2>
            <div className="aboutSection">
                <p className="aboutDetails">This is the about section.</p>
                <img src={img} alt="profile" className="profile"></img>
            </div>
            <Skills />
            <Contact />
        </div>
    );
};

