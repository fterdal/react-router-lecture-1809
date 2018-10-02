import React from 'react'

export const MenuItem = ({ item }) => {
  return (
    <div className="card box">
      <div className="card-image">
        <img src={item.imgUrl} />
      </div>
      <div className="card-content">
        <p className="title is-4">{item.name}</p>
        <p className="subtitle is-6">${item.price}</p>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default MenuItem
