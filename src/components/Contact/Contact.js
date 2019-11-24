import React from 'react';
import "./Contact.css";
import github from "./Img/github.svg";
import linkedin from "./Img/linkedin.svg";

export default function Contact() {
    return (
        <div className="Contact Section">
            <h2 className="header">Contact</h2>
            <div className="contactContent important">
                <p>Email</p>
                <p>Resume</p>
                <div className="iconsDiv">
                    <a href="https://www.linkedin.com/in/shelbyvjacobs/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="github" className="icon"></img></a>
                    <a href="https://github.com/shelbyvjacobs" target="_blank" rel="noopener noreferrer"><img src={github} alt="linkedin" className="icon"></img></a>
                </div>
            </div>
        </div>
    );
};