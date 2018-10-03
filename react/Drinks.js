import React from 'react'
import MenuItem from './MenuItem';

export const Drinks = (props) => {
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
  console.log('props.match', props.match)
  if (props.match.params.id) {
    const { id } = props.match.params
    console.log('IT MATCHED!')
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
