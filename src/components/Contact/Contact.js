import React from 'react';
import "./Contact.css";
import github from "./Img/github.svg";
import linkedin from "./Img/linkedin.svg";

export default function Contact() {
    return (
        <div className="Contact">
            <h2 className="header">Contact Me</h2>
            <div className="Contact-container">
                <div className="Contact-link-container">
                    <p>shelbyvjacobs@gmail.com</p>
                    <a href="./resume.pdf" target="_blank">Resume</a>
                </div>
                <div className="Contact-icons-container">
                    <a href="https://www.linkedin.com/in/shelbyvjacobs/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn icon" className="Contact-icon"></img>
                    </a>
                    <a href="https://github.com/shelbyvjacobs" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub icon" className="Contact-icon"></img>
                    </a>
                </div>
            </div>
        </div>
    );
};