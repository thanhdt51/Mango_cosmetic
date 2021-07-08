import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import classNames from "classnames";

import Button from "../../Button";

import s from "./Banner.module.scss";

function Banner(props) {
  const { className, title, imgSrc, description } = props;

  return (
    <Card>
      <Card.Img as="picture">
        <source media="(max-width: 991px)" srcSet={imgSrc.mobile} />
        <source media="(min-width: 992px)" srcSet={imgSrc.desktop} />
        <img src={imgSrc.default} alt="banner" />
      </Card.Img>
      <Card.ImgOverlay className={classNames(s.cardBody, className)}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button>SHOP NOW</Button>
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
};

Banner.defaultProps = {
  className: null,
};

export default Banner;
