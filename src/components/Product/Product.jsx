import React from "react";

import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

import Button from "../Button";
import { moneyParser } from "../../utils";

import s from "./Product.module.scss";

function Product(props) {
  const { thumbnailUrl, name, price } = props;

  return (
    <Card className={s.card}>
      <Card.Img className={s.cardImg} variant="top" src={thumbnailUrl} />
      <Card.Body className={s.cardBody}>
        <Card.Title title={name} className={s.cardTitle}>
          {name}
        </Card.Title>
        <Card.Text>{moneyParser(price)}</Card.Text>
        <Button className={s.cartBtn}>ADD TO BAG</Button>
      </Card.Body>
    </Card>
  );
}

Product.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
