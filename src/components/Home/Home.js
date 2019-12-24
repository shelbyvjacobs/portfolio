// Initial Information; a tease

import React from 'react';
import "./Home.css";
import hero from "./Img/jesus-kiteque-wn-KYaHwcis-unsplash.jpg";

export default function Home() {
    return (
        <div className="Home Section">
            <p className="important">Full Stack Developer.</p>
            <img src={hero} className="hero"></img>
        </div>
    );
};