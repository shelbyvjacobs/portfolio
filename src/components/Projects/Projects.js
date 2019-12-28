// Each should have a Description, including methodology, and a screenshot

import React, {Component} from "react";
import "./Projects.css";
import intro from "./Img/introScreenshot.png";
import trivia from "./Img/triviaScreenshot.png";
import bgm from "./Img/bgmScreenshot.png";
import cotripper from "./Img/cotripperScreenshot.png";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    // handleClick = () => {
        // when the Projects-item is clicked
        // if the style of Projects-caption contains display: none, toggle to display: block;
        // else, toggle to display: none;
    // }

    render(){
        return (
            <div className="Projects" id="projects">
                <h2 className="header">My Work</h2>
                <div className="Projects-items-container">

                    {/* Project 1 */}
                    <div className="Projects-item">
                        <img src={cotripper} className="Projects-screenshot" alt="cotripper"></img>
                        <div className="Projects-caption">
                            <h3 className="Projects-caption-header">CoTripper</h3>
                            <p className="Projects-caption-desc">description</p>
                            <a href="https://github.com/CotripperPlatform/CoTrip" target="_blank" rel="noopener noreferrer" className="link">
                                More information
                            </a>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="Projects-item">
                        <img src={bgm} className="Projects-screenshot" alt="bgm"></img>
                        <div className="Projects-caption">
                            <h3 className="Projects-caption-header">BGM.</h3>
                            <p className="Projects-caption-desc">description</p>
                            <a href="https://github.com/torykling/game-meetup" target="_blank" rel="noopener noreferrer" className="link">
                                More information
                            </a>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="Projects-item">
                        <img src={intro} className="Projects-screenshot" alt="intro"></img>
                        <div className="Projects-caption">
                            <h3 className="Projects-caption-header">Intro.</h3>
                            <p className="Projects-caption-desc">description</p>
                            <a href="https://github.com/shelbyvjacobs/Responsive-Design" target="_blank" rel="noopener noreferrer" className="link">
                                More information
                            </a>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="Projects-item">
                        <img src={trivia} className="Projects-screenshot" alt="trivia"></img>
                        <div className="Projects-caption">
                            <h3 className="Projects-caption-header">Bubblegum Trivia</h3>
                            <p className="Projects-caption-desc">description</p>
                            <a href="https://github.com/shelbyvjacobs/shelbyvjacobs.github.io" target="_blank" rel="noopener noreferrer" className="link">
                                More information
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Projects;