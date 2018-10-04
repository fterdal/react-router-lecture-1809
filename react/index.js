import React from 'react'
import { render } from 'react-dom'
import Homepage from './Homepage'
import Drinks from './Drinks'
import Foods, { DummyComp } from './Foods'
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { dummyDrinks, dummyFoods } from './dummyData';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      drinks: [],
      foods: [],
    }
  }
  componentDidMount() {
    this.setState({ drinks: dummyDrinks, foods: dummyFoods })
  }
  render() {
    const { drinks, foods } = this.state
    return (
      <Router>
        <div className="container">
          <nav className="navbar center">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/drinks" className="navbar-item">Drinks</Link>
            <Link to="food" className="navbar-item">Food</Link>
          </nav>
          <Switch>
            <Route path="/drinks/:id" render={rprops => <Drinks drinks={drinks} {...rprops} />} />
            <Route path="/drinks" render={rprops => <Drinks drinks={drinks} {...rprops} />} />
            <Route path="/food/:id" render={rprops => <Foods foods={foods} {...rprops} />} />
            <Route path="/food" render={rprops => <Foods foods={foods} {...rprops} />} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </Router>
    )
  }
}
render(
  <App />,
  document.getElementById('app')
)

