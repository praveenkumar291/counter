import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import "./image.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
 console.log(current)
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <AiFillLeftCircle className="left-arrow" onClick={prevSlide} />
      <AiFillRightCircle className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return(
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
        
       {index === current &&  <img src={slide.image} alt="famous places" className="images" />} 
        </div>
        )
      })}
    </section>
  );
};

export default ImageSlider;
