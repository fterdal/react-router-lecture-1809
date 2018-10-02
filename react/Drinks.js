import React from 'react'
import { MenuItem } from './MenuItem';

export const Drinks = () => {
  const drinks = [
    {
      id: 1,
      name: 'Black Coffee',
      description: 'The simpler the better',
      imgUrl: '/images/coffee.jpeg',
      price: '2.50',
    },
    {
      id: 2,
      name: 'Pumpkin Spice Latte',
      description: 'A seasonal treat',
      imgUrl: '/images/psl.jpeg',
      price: '4.50',
    },
    {
      id: 3,
      name: 'Cappuccino',
      description: 'Foam foam foam!',
      imgUrl: '/images/cappuccino.jpeg',
      price: '4.00',
    },
  ]
  return (
    <div>
      <h1 className="title">Drinks</h1>
      <ul className="tile">
        {drinks.map(drink => (
          <MenuItem key={drink.id} item={drink} />
        ))}
      </ul>
    </div>
  )
}

export default Drinks
