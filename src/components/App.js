import React from 'react';
import LandingPage from './landingPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Play from './play';

function App() {
  return(
    <div>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/play" component={Play} />
          </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;