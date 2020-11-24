import React from 'react'
import MainScreen from './screens/MainScreen'
import TriviaScreen from './screens/TriviaScreen'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './components/Main'


function App() {
  return (
    <Router>
      <Switch>
        <Main>
          <Route path="/" exact component={MainScreen} />
          <Route path="/trivia" component={TriviaScreen} />
        </Main>
      </Switch>
    </Router>
  );
}

export default App;
