import { useState } from 'react';
import { CarouselItem } from './CarouselItem'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import {MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";


export const Carousel = () => {
  const [index, setIndex] = useState(0)
  
  function prevSlide() {
    if (index > 0) { setIndex(index - 1) }
  }
  function nextSlide() {
    if (index < images.length - 1) { setIndex(index + 1) }
  }

    const images = [
        { id: "first", author: "Alejandro Escamilla", width: 5000, height: 3333, url: "https://unsplash.com/photos/Dl6jeyfihLk", download_url: "https://picsum.photos/id/3/5000/3333"},
        { id: "second", author: "Alejandro Escamilla", width: 5000, height: 3333, url: "https://unsplash.com/photos/y83Je1OC6Wc", download_url: "https://picsum.photos/id/4/5000/3333" },
        { id: "third", author: "Alejandro Escamilla", width: 5000, height: 3334, url: "https://unsplash.com/photos/LF8gK8-HGSg", download_url: "https://picsum.photos/id/5/5000/3334" }]
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
      <div className="carousel-dots">{images.map((dot,dotIndex) => { return <div className="dot">{(dotIndex !== index) ? <MdRadioButtonUnchecked /> : <MdRadioButtonChecked />}</div> })}</div>
    </div>
  )
}
