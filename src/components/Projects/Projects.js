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
                            <p className="Projects-caption-desc">An experience-based travel platform for single mom families, built with a team of 23 using Agile. I contributed to the front end development team and project management.</p>
                            <a href="https://github.com/CotripperPlatform/CoTrip" target="_blank" rel="noopener noreferrer" className="Projects-link">
                                More Information
                            </a>
                            <p className="Projects-caption-desc">Deployed website coming soon!</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="Projects-item">
                        <img src={bgm} className="Projects-screenshot" alt="bgm"></img>
                        <div className="Projects-caption">
                            <h3 className="Projects-caption-header">BGM.</h3>
                            <p className="Projects-caption-desc">Group project using the MERN stack to create a full CRUD app for organizing board game meetups. My contribution was front end and CSS.</p>
                            <a href="https://github.com/torykling/game-meetup" target="_blank" rel="noopener noreferrer" className="Projects-link">
                                More Information
                            </a>
                            <a href="https://lucid-noether-312707.netlify.com/" target="_blank" rel="noopener noreferrer" className="Projects-link">
                                Deployed Website
                            </a>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="Projects-item">
                        <img src={intro} className="Projects-screenshot" alt="intro"></img>
                        <div className="Projects-caption">
                            <h3 className="Projects-caption-header">Intro.</h3>
                            <p className="Projects-caption-desc">A fully responsive website based on a designer’s mockup and built using HTML and CSS. Independent project.</p>
                            <a href="https://github.com/shelbyvjacobs/Responsive-Design" target="_blank" rel="noopener noreferrer" className="Projects-link">
                                More Information
                            </a>
                            <a href="https://dreamy-banach-2a4b2b.netlify.com/" target="_blank" rel="noopener noreferrer" className="Projects-link">
                                Deployed Website
                            </a>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="Projects-item">
                        <img src={trivia} className="Projects-screenshot" alt="trivia"></img>
                        <div className="Projects-caption">
                            <h3 className="Projects-caption-header">Bubblegum Trivia</h3>
                            <p className="Projects-caption-desc">An interactive trivia game built with Javascript, HTML, and CSS. Independent project.</p>
                            <a href="https://github.com/shelbyvjacobs/bubblegum-trivia" target="_blank" rel="noopener noreferrer" className="Projects-link">
                                More Information
                            </a>
                            <a href="https://nervous-pare-eccf40.netlify.com/" target="_blank" rel="noopener noreferrer" className="Projects-link">
                                Deployed Website
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Projects;