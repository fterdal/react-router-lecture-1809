import React from 'react'
import { MenuItem } from './MenuItem';
import { Link, Route } from 'react-router-dom';

export const DummyComp = () => {

  return (
    <h1>HELLO I'M JUST A DUMMY DOMPONENT 😕😕😕😕😕😕</h1>
  )
}

export const Foods = () => {
  const foods = [
    {
      id: 1,
      name: 'Burger',
      description: 'A Classic',
      imgUrl: '/images/burger.jpeg',
      price: '6.50',
    },
    {
      id: 2,
      name: 'Fries',
      description: 'A tasty side',
      imgUrl: '/images/fries.jpeg',
      price: '2.00',
    },
    {
      id: 3,
      name: 'Reuben',
      description: 'yummy corned beef',
      imgUrl: '/images/reuben.jpeg',
      price: '8.00',
    },
    {
      id: 4,
      name: 'Salad',
      description: 'leafy greens and veggies',
      imgUrl: '/images/salad.jpeg',
      price: '7.00',
    },
  ]
  return (
    <div>
      <h1 className="title">Food</h1>
      <ul className="tile">
        {foods.map(food => (
          <MenuItem key={food.id} item={food} />
        ))}
      </ul>
      <Link to="/dummy">Get the dummy!</Link>
      <Route path="/dummy" component={DummyComp} />
    </div>
  )
}

export default Foods
