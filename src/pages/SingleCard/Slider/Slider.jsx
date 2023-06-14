import React from "react";
import styles from "../../../styles/Slider.module.scss";

const Slider = ({ slides = [], currentSlide, setCurrentSlide }) => {
  
  const prevImg = () => {
    currentSlide === 0
      ? setCurrentSlide(slides.length - 1)
      : setCurrentSlide(currentSlide - 1);
  };

  const nextImg = () => {
    currentSlide === slides.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.buttonLeft} onClick={prevImg}>
        <img src="/images/icons/arrow-left.svg" alt="arrow-left" />
      </div>
      <div className={styles.buttonRight} onClick={nextImg}>
        <img src="/images/icons/arrow-right.svg" alt="arrow-right" />
      </div>
      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
      ></div>
    </div>
  );
};

export default Slider;
