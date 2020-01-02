import React, {Component} from 'react';
import './App.css';
import About from "./components/About/About"
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills";
// import { Route, Link, Switch } from "react-router-dom";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {
  return (
    <div className="App">
      <nav className="nav">
        <p className="nav-name">Shelby Jacobs</p>
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
}

export default App;