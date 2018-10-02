import React from 'react'
import { render } from 'react-dom'
import Homepage from './Homepage'
import Drinks from './Drinks'
import Foods from './Foods'

const App = () => (
  <div>
    <Homepage />
    <Drinks />
    <Foods />
  </div>
)

render(
  <App />,
  document.getElementById('app')
)

