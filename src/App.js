import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {
  return (
    <div className="App">
      <Nav />
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