import React from 'react';
import "./Contact.css";

export default function Contact() {
    return (
        <div className="Contact Section">
            <h2 className="header">Contact</h2>
            <div className="contactContent important">
                <p>shelbyvjacobs@gmail.com</p>
                <a href="./resume.pdf" target="_blank">Resume</a>
                <div className="iconsDiv">
                    <a href="https://www.linkedin.com/in/shelbyvjacobs/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/shelbyvjacobs" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    );
};