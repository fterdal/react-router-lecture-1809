import React from 'react'
import MenuItem from './MenuItem';

export const Drinks = (props) => {
  const { drinks } = props
  if (props.match.params.id) {
    const { id } = props.match.params
    return (
      <div>
        <h1 className="title">Single Drink</h1>
        <MenuItem item={drinks[id - 1]} type="drinks" />
      </div>
    )
  }
  return (
    <div>
      <h1 className="title">Drinks</h1>
      <ul className="tile">
        {drinks.map(drink => (
          <MenuItem key={drink.id} item={drink} type="drinks" />
        ))}
      </ul>
    </div>
  )
}

export default Drinks
