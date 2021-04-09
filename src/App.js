import "./App.css";
// import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Creators from "./components/Creators";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {

  return (
      <Switch>
        <Route exact path='/'>
          <Header />
          <About />
          <Creators />
          <Footer />
        </Route>
        <Route exact path='/calculator'>
          <Dashboard />
          <Footer />
        </Route>
      </Switch>
  );
};

export default App;
