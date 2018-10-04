export const randomInt = () => {
  return parseInt(Math.random() * 1000, 10)
}

export const getById = (arr, id) => {
  return arr.find(el => el.id === +id)
}

export const dummyDrinks = [
  {
    id: randomInt(),
    name: 'Black Coffee',
    description: 'The simpler the better',
    imgUrl: '/images/coffee.jpeg',
    price: '2.50',
  },
  {
    id: randomInt(),
    name: 'Pumpkin Spice Latte',
    description: 'A seasonal treat',
    imgUrl: '/images/psl.jpeg',
    price: '4.50',
  },
  {
    id: randomInt(),
    name: 'Cappuccino',
    description: 'Foam foam foam!',
    imgUrl: '/images/cappuccino.jpeg',
    price: '4.00',
  },
]

export const dummyFoods = [
  {
    id: randomInt(),
    name: 'Burger',
    description: 'A Classic',
    imgUrl: '/images/burger.jpeg',
    price: '6.50',
  },
  {
    id: randomInt(),
    name: 'Fries',
    description: 'A tasty side',
    imgUrl: '/images/fries.jpeg',
    price: '2.00',
  },
  {
    id: randomInt(),
    name: 'Reuben',
    description: 'yummy corned beef',
    imgUrl: '/images/reuben.jpeg',
    price: '8.00',
  },
  {
    id: randomInt(),
    name: 'Salad',
    description: 'leafy greens and veggies',
    imgUrl: '/images/salad.jpeg',
    price: '7.00',
  },
]

export const addItem = (item) => {
  const table = item.type === 'food' ? dummyFoods : dummyDrinks
  const id = table[table.length - 1].id + 1
  table.push({ ...item, id })
  return {...item, id}
}
