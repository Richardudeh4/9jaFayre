import React from 'react'
import Carousel from './Carousel';
const slides = [
    {Images: "https://images.unsplash.com/photo-1707217361278-02cf3c6615f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"},
    {Images: "https://images.unsplash.com/photo-1707217361278-02cf3c6615f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"},
    {Images: "https://images.unsplash.com/photo-1707217361278-02cf3c6615f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"},
    {Images: "https://images.unsplash.com/photo-1707217361278-02cf3c6615f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"},
    {Images: "https://images.unsplash.com/photo-1707217361278-02cf3c6615f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"},
    {Images: "https://images.unsplash.com/photo-1707217361278-02cf3c6615f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"},
]
const CarouselWrapper = () => {
  return (
    <Carousel slides={slides}/>
  )
}

export default CarouselWrapper