import React from 'react';
import "./Contact.css";
import github from "./Img/github.svg";
import linkedin from "./Img/linkedin.svg";
import resume from "./portfolio-resume.pdf";

export default function Contact() {
    return (
        <div className="Contact" id="contact">
            <h2 className="header">Contact Me</h2>
            <div className="Contact-container">
                <div className="Contact-link-container">
                    <a href="mailto:shelbyvjacobs@gmail.com" className="link Contact-link">shelbyvjacobs@gmail.com</a>
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="link Contact-link">Resume</a>
                </div>
                <div className="Contact-icons-container">
                    <a href="https://www.linkedin.com/in/shelbyvjacobs/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn icon" className="Contact-icon Contact-link link"></img>
                    </a>
                    <a href="https://github.com/shelbyvjacobs" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub icon" className="Contact-icon Contact-link link"></img>
                    </a>
                </div>
            </div>
        </div>
    );
};