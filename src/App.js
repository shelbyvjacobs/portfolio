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
        {/* <Link to="#home">Home</Link>
        <Link to="#about">About </Link>
        <Link to="#projects">Projects </Link>
        <Link to="#contact">Contact </Link> */}
        <p className="nav-name">Shelby Jacobs</p>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <main>
        {/* <Switch>
          <Route 
            exact path="#home"
            render={routerProps => (
              <Home />
            )}
          />
          <Route
            exact path="#about"
            render={routerProps => (
              <About />
            )}
          />
          <Route
            exact path="#projects"
            render={routerProps => (
              <Projects />
            )}
          />
          <Route
            exact path="#contact"
            render={routerProps => (
              <Contact />
            )}
          />
        </Switch> */}
      </main>

    </div>
  );
}
}

export default App;