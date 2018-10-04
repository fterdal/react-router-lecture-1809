import React from 'react'
import MenuItem from './MenuItem';
import { Link, Route } from 'react-router-dom';
import { getById } from './dummyData';

export const Foods = (props) => {
  const { foods } = props
  if (props.match.params.id) {
    const { id } = props.match.params
    return (
      <div>
        <h1 className="title">Single Food</h1>
        <MenuItem item={getById(foods, id)} type="food" />
      </div>
    )
  }
  return (
    <div>
      <h1 className="title">Food</h1>
      <ul className="tile">
        {foods.map(food => (
          <MenuItem key={food.id} item={food} type="food" />
        ))}
      </ul>
      <Link to="/dummy">Get the dummy!</Link>
      <Route path="/dummy" type="food" />
    </div>
  )
}

export default Foods
