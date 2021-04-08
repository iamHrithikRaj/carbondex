import "./App.css";
import {useState} from 'react'
import Header from "./components/Header";
import About from "./components/About";
import Creators from "./components/Creators";
import Footer from "./components/Footer";
import Calculator from "./components/Dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [state,setState] = useState("");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header state={state} setState={setState}/>
          <About />
          <Creators />
          <Footer />
        </Route>
        <Route exact path="/calculator">
          <Calculator state={state}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
