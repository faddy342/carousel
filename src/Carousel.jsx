import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CarouselItem } from './CarouselItem'

export const CarouselComponent = () => {
    const images = [
        { id: "first", author: "Alejandro Escamilla", width: 5000, height: 3333, url: "https://unsplash.com/photos/Dl6jeyfihLk", download_url: "https://picsum.photos/id/3/5000/3333"},
        { id: "second", author: "Alejandro Escamilla", width: 5000, height: 3333, url: "https://unsplash.com/photos/y83Je1OC6Wc", download_url: "https://picsum.photos/id/4/5000/3333" },
        { id: "third", author: "Alejandro Escamilla", width: 5000, height: 3334, url: "https://unsplash.com/photos/LF8gK8-HGSg", download_url: "https://picsum.photos/id/5/5000/3334" }]
  return (
      <Carousel className='lmfao' width={700} showArrows={true} transitionTime={750} showStatus={false}>
              {images.map((image) => {
                return <CarouselItem image={image}></CarouselItem>
              })}
      </Carousel>
  )
}
