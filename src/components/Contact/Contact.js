import React from 'react';
import github from "./Img/github.svg";
import linkedin from "./Img/linkedin.svg";

export default function Contact() {
    return (
        <div className="Contact Section">
            <h2 className="header">Contact</h2>
            <p>Email</p>
            <p>Resume</p>
            <img src={github} alt="github" className="icon"></img>
            <img src={linkedin} alt="linkedin" className="icon"></img>
        </div>
    );
};