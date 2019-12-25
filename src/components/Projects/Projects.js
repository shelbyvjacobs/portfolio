// Each should have a Description, including methodology, and a screenshot

import React, {Component} from "react";
import "./Projects.css";
import intro from "./Img/introScreenshot.png";
import trivia from "./Img/triviaScreenshot.png";
import bgm from "./Img/bgmScreenshot.png";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (
            <div className="Projects">
                <h2 className="header">My Work</h2>
                <div className="Projects-screenshots-container">
                    <a href="https://github.com/shelbyvjacobs/Responsive-Design" target="_blank" rel="noopener noreferrer">
                        <img src={intro} className="Projects-screenshot" alt="intro"></img>
                    </a>
                    <a href="https://github.com/shelbyvjacobs/shelbyvjacobs.github.io" target="_blank" rel="noopener noreferrer">
                        <img src={trivia} className="Projects-screenshot" alt="trivia"></img>
                    </a>
                    <a href="https://github.com/torykling/game-meetup" target="_blank" rel="noopener noreferrer">
                        <img src={bgm} className="Projects-screenshot" alt="bgm"></img>
                    </a>
                </div>
            </div>
        )
    }
}

export default Projects;