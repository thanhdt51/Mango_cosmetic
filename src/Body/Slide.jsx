import React from "react";
import { Carousel } from "react-bootstrap";

import s from "./Slide.module.scss";

function Slide() {
  return (
    <Carousel variant="dark">
      {[1, 2, 3].map((value) => (
        <Carousel.Item className={s.slide} key={value}>
          <img
            className="d-block"
            src={`/images/slide${value}.jpg`}
            alt={`slide ${value}`}
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slide;
