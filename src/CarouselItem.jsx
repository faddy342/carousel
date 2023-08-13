import React from 'react'

export const CarouselItem = ({ item }) => {
  return (
      <div className='carousel-item'>
          <img src={item.icons.default} alt={item.title} className="carousel-img" />
          <p className="carousel-item-description">{item.description}</p>
      </div>
  )
}
