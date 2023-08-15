import { useState } from 'react';
import { CarouselItem } from './CarouselItem'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";


export const Carousel = () => {
  const images = [
    {
      "id": "10",
      "author": "Paul Jarvis",
      "url": "https://picsum.photos/id/10/2500/1667"
    },
    {
      "id": "11",
      "author": "Paul Jarvis",
      "url": "https://picsum.photos/id/11/2500/1667"
    },
    {
      "id": "12",
      "author": "Paul Jarvis",
      "url": "https://picsum.photos/id/12/2500/1667"
    }, {
      "id": "13",
      "author": "Paul Jarvis",
      "url": "https://picsum.photos/id/13/2500/1667"
    }, {
      "id": "14",
      "author": "Paul Jarvis",
      "url": "https://picsum.photos/id/14/2500/1667"
    }, {
      "id": "15",
      "author": "Paul Jarvis",
      "url": "https://picsum.photos/id/15/2500/1667"
    }, {
      "id": "16",
      "author": "Paul Jarvis",
      "url": "https://picsum.photos/id/16/2500/1667"
    }, {
      "id": "17",
      "author": "Paul Jarvis",
      "url": "https://picsum.photos/id/17/2500/1667"
    }, {
      "id": "18",
      "author": "Paul Jarvis",
      "url": "https://picsum.photos/id/18/2500/1667"
    }, {
      "id": "19",
      "author": "Paul Jarvis",
      "url": "https://picsum.photos/id/19/2500/1667"
    }]
  
  const [index, setIndex] = useState(0)
  
  function prevSlide() {
    if (index > 0) { setIndex(index - 1) }
  }
  function nextSlide() {
    if (index < images.length - 1) { setIndex(index + 1) }
  }
  function callSlide(targetIndex) {
    setIndex(targetIndex)
  }

  return (
    <div className='carousel'>
      <div className="controls">
        <div className={`left ${index === 0? "hidden" : "shown"}`} onClick={prevSlide} ><FaAngleLeft /></div>
        <div className={`right ${index === images.length - 1? "hidden" : "shown"}`} onClick={nextSlide}><FaAngleRight /></div>
      </div>
      <div className="carousel-track" style={{transform:`translateX(-${index * 100}%)`}}>
        {images.map((image) => {
          return <CarouselItem image={image} key={image.id}></CarouselItem>
        })}
      </div>
      <div className="carousel-dots">{images.map((dot, dotIndex) => { return <div key={dotIndex} className="dot" onClick={() => { callSlide(dotIndex) }}> {(dotIndex !== index) ? <MdRadioButtonUnchecked /> : <MdRadioButtonChecked />}</div> })}</div>
    </div>
  )
}
