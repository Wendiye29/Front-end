"use client";
import { Carousel } from "antd";
import {Card} from "antd";
const images = [
  "/image/b.jpg",
  "/image/e.jpg",
  "/image/f.jpg",
  "/image/j.jpg",   
  "/image/ty.jpg",
  "/image/R.jpg",
  "/image/ty.jpg",
  "image/u.jpg",
  
];

export default function ImageSlider() {
  return (
    <div>
    
    <Carousel autoplay autoplaySpeed={2000}>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Slide ${index + 1}`} style={{ width: "40%", height: "40%", objectFit: "cover" }} />
        </div>
      ))}
      
    </Carousel>
    
    </div>
    
    
  );
}
