import Hero from './components/hero';
import Form from './components/form';
import Solar101 from './components/solar101';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/solar">
          <Solar101 />
        </Route>
      </Switch>
    </Router>
  )

}

export default App;
