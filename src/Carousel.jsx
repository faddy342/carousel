import React, { useState } from 'react'
import { CarouselItem } from './CarouselItem'

export const Carousel = () => {
    const [ActiveIndex, SetActiveIndex] = useState(0);
    const items = [{
        title: 'Appreciation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, error.',
        icons: require('./Media/example1.svg')
    },
    {   
        title:'business man',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, error.',
        icons: require('./Media/example2.svg')
    },
    {   
        title:'lets go golfing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, error.',
        icons: require('./Media/example3.svg')
    }
    ]
  return (
      <div className='carousel'>
          <div className="inner" style={{transform:`transalte(-${ActiveIndex * 100}%)`}}>
              {items.map((item) => {
                return <CarouselItem item={item}></CarouselItem>
              })}
          </div>
      </div>
  )
}
