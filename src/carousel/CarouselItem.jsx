import React from 'react'

export const CarouselItem = ({ image }) => {
  return (
      <div className='carousel-item'>
          <img src={image.url} alt={image.author} className="carousel-img" />
      </div>
  )
}
