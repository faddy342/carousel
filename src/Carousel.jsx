import React from 'react'
import { CarouselItem } from './CarouselItem'

export const Carousel = () => {
    const items = [{
        title: 'Appreciation',
        description: 'blah blah',
        icons: require('./Media/example1.svg')
    },
    {   
        title:'business man',
        description: 'blah blah1',
        icons: require('./Media/example2.svg')
    },
    {   
        title:'lets go golfing',
        description: 'blah blah3',
        icons: require('./Media/example3.svg')
    }
    ]
  return (
      <div className='carousel'><div className="inner">{items.map((item) => {
          return <CarouselItem item={item}></CarouselItem>
      })}</div></div>
  )
}
