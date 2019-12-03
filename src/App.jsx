import React from 'react'
import PageEmployee from './PageEmployee'

import Component from './Component'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";
const App = () => {return(
  <Router>
    <Switch>
      <Route exact path="/" >
      <Component/>
      </Route>
      <Route exact path="/new">
        <PageEmployee />
      </Route>
    </Switch>
  </Router>

)
}

export default App