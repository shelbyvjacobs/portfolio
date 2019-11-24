// Each should have a Description, including methodology, and a screenshot

import React, {Component} from "react";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (
            <div className="Projects Section">
                <h2 className="header">Projects</h2>
                <p>At least 5 projects in the end; Intro., Bubblegum Trivia, Makeup Shades, and BGM. for now.</p>
            </div>
        )
    }
}

export default Projects;