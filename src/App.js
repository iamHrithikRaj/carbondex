import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Creators from "./components/Creators";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [state, setState] = useState("");
  return (
      <Switch>
        <Route exact path="/">
          <Header state={state} setState={setState} />
          <About />
          <Creators />
          <Footer />
        </Route>
        <Route exact path="/calculator">
          <Dashboard state={state}/>
          <Footer />
        </Route>
      </Switch>
  );
};

export default App;
