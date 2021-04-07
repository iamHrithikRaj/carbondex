import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Creators from "./components/Creators";
import Footer from "./components/Footer";
import Calculator from "./components/Dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <About />
          <Creators />
          <Footer />
        </Route>
        <Route exact path="/calculator">
          <Calculator />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
