import React from 'react'
import { render } from 'react-dom'
import Homepage from './Homepage'
import Drinks from './Drinks'
import Foods, { DummyComp } from './Foods'
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <div className="container">
      <nav className="navbar center">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/drinks" className="navbar-item">Drinks</Link>
        <Link to="food" className="navbar-item">Food</Link>
      </nav>
      {/* We want to render this component when the url matches / */}
      <Switch>
        <Route path="/drinks/:id" component={Drinks} />
        <Route path="/drinks" component={Drinks} />
        <Route path="/food/:id" component={Foods} />
        <Route path="/food" component={Foods} />
        {/* <Route path="/dummy" component={DummyComp} /> */}
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  </Router>
)

render(
  <App />,
  document.getElementById('app')
)

