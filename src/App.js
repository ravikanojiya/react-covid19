import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Data from "./components/Data";
import information from "./components/Information";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/data" component={Data} />
          <Route exact path="/info" component={information} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer/>
    </>
  );
}

export default App;
