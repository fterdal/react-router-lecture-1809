import React from 'react'
import MenuItem from './MenuItem';
import { getById } from './dummyData';

export const Drinks = (props) => {
  const { drinks } = props
  if (props.match.params.id) {
    const { id } = props.match.params
    return (
      <div>
        <h1 className="title">Single Drink</h1>
        <MenuItem item={getById(drinks, id)} type="drinks" />
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
