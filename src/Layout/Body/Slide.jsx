import React from "react";
import { Carousel } from "react-bootstrap";

import s from "./Slide.module.scss";

function Slide() {
  return (
    <Carousel interval={100000} variant="dark">
      {[1, 2, 3].map((value) => (
        <Carousel.Item className={s.slide} key={value}>
          <img
            className="d-block"
            src={`/images/slide${value}.jpg`}
            alt={`slide ${value}`}
          />
          <Carousel.Caption>
            <h5 className={s.slideTitle}>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          <div className={s.background} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slide;
