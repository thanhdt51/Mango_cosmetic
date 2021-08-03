import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import classNames from "classnames";

import Button from "../Button";

import s from "./Banner.module.scss";

function Banner(props) {
  const { className, title, imgSrc, description, showButton, showBackground, link } = props;

  return (
    <Card className={classNames(s.card, className)}>
      <Card.Img className={s.cardPicture} as="picture">
        <source media="(max-width: 991px)" srcSet={imgSrc.mobile} />
        <source media="(min-width: 992px)" srcSet={imgSrc.desktop} />
        <img src={imgSrc.default} alt="banner" />
      </Card.Img>
      {showBackground && <div className={s.background} />}
      <Card.ImgOverlay className={s.cardBody}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {showButton && <a href={link}><Button>SHOP NOW</Button></a>}
      </Card.ImgOverlay>
    </Card>
  );
}

Banner.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.shape({
    mobile: PropTypes.string,
    desktop: PropTypes.string,
    default: PropTypes.string,
  }).isRequired,
  description: PropTypes.string.isRequired,
  showButton: PropTypes.bool,
  showBackground: PropTypes.bool,
  link: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  className: null,
  showButton: false,
  showBackground: false,
};

export default Banner;
