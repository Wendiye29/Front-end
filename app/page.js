"use client";
import { Carousel } from "antd";

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
    <Carousel autoplay>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
        </div>
      ))}
    </Carousel>
  );
}
