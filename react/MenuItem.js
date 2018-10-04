import React from 'react'
import { Link, withRouter } from 'react-router-dom'

export const MenuItem = (props) => {
  const { item, type } = props
  return (
    <div className="card box">
      <Link to={`/${type}/${item.id}`} >
        <div className="card-image">
          <img src={item.imgUrl} />
        </div>
      </Link>
      <div className="card-content">
        <p className="title is-4">{item.name}</p>
        <p className="subtitle is-6">${item.price}</p>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
