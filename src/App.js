import React, {Component} from 'react';
import './App.css';
import About from "./components/About/About"
import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"
// import Contact from "./components/Contact/Contact"
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
        {/* <Link to="/">Home</Link>
        <Link to="/about">About </Link>
        <Link to="/projects">Projects </Link>
        <Link to="/contact">Contact </Link> */}
      </nav>
      <Home />
      <About />
      <Projects />
      <main>
        {/* <Switch>
          <Route 
            exact path="/"
            render={routerProps => (
              <Home />
            )}
          />
          <Route
            exact path="/about"
            render={routerProps => (
              <About />
            )}
          />
          <Route
            exact path="/projects"
            render={routerProps => (
              <Projects />
            )}
          />
          <Route
            exact path="/contact"
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