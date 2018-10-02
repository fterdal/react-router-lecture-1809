import React from 'react'
import { render } from 'react-dom'
import Homepage from './Homepage'
import Drinks from './Drinks'
import Foods from './Foods'

const App = () => (
  <div className="container">
    <nav className="navbar center">
      <a className="navbar-item" href="#">Link A</a>
      <a className="navbar-item" href="#">Link B</a>
      <a className="navbar-item" href="#">Link C</a>
    </nav>
    {/* We want to render this component when the url matches / */}
    <Homepage />
    {/* We want to render this component when the url matches /drinks */}
    <Drinks />
    {/* We want to render this component when the url matches /foods */}
    <Foods />
  </div>
)

render(
  <App />,
  document.getElementById('app')
)

