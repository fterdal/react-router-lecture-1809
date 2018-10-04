import React from 'react'
import { render } from 'react-dom'
import Homepage from './Homepage'
import Drinks from './Drinks'
import Foods from './Foods'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { dummyDrinks, dummyFoods, randomInt } from './dummyData';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      drinks: [],
      foods: [],
      type: '',
      name: '',
      description: '',
      imgUrl: '',
      price: NaN,
    }
  }
  componentDidMount() {
    this.setState({ drinks: dummyDrinks, foods: dummyFoods })
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('EVT.TARGET', evt.target)
  }
  handleChange = (evt) => {
    console.log('evt.target.name', evt.target.name)
    console.log('evt.target.value', evt.target.value)
    const { name, value } = evt.target
    if (name === 'price' && Number(value) < 0) return
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleClear = () => {
    this.setState({
      type: '',
      name: '',
      description: '',
      imgUrl: '',
      price: NaN,
    })
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

          {/* FORM */}

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label>Type:</label>
              <select name="type" onChange={this.handleChange}>
                <option>Drink</option>
                <option>Food</option>
              </select>
            </div>
            <div className="field">
              <label>Name:</label>
              <input
                name="name"
                type="text"
                onChange={this.handleChange}
                value={this.state.name} />
            </div>
            <div className="field">
              <label>Description:</label>
              <textarea
                name="description"
                type="text"
                onChange={this.handleChange}
                value={this.state.description} />
            </div>
            <div className="field">
              <label>Image URL:</label>
              <input
                name="imgUrl"
                type="text"
                onChange={this.handleChange}
                value={this.state.imgUrl} />
            </div>
            <div className="field">
              <label>Price:</label>
              <input
                name="price"
                type="number"
                onChange={this.handleChange}
                value={this.state.price} />
            </div>
            <button type="submit">Submit</button>
            <button onClick={this.handleClear} type="button">Clear</button>
          </form>

          {/* FORM */}

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

