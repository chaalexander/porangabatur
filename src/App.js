import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Wrapper from "./components/Wraper";
import About from "./components/pages/About";
import Cidades from "./components/pages/Cidades";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route path="/cidades" component={Cidades} />
          </Wrapper>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
