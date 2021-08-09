import React from "react";

import { Col, Row } from "react-bootstrap";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import classnames from "classnames";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import ProductSwiper from "../../components/ProductSwiper";

import { moneyParser, fetchProducts } from "../../utils";

import s from "./ProductDetail.module.scss";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, similarProducts: [] };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    fetchProducts({
      url: `https://tiki.vn/api/v2/products/${id}`,
    }).then((result) => {
      this.setState({
        product: {
          name: result.name,
          brand_name: result.brand.name,
          short_description: result.short_description,
          price: result.price,
          thumbnail_url: result.thumbnail_url,
          quantity: 1,
        },
      });
    });

    fetchProducts({
      url: "https://tiki.vn/api/personalish/v2/pdp",
      params: {
        mpid: id
      },
    }).then((result) => {
      this.setState({
        similarProducts: result.widgets[1].items,
      });
    });
  }

  decreaseQuantity = () => {
    this.setState((state) => ({
      product: {
        ...state.product,
        quantity: state.product.quantity - 1,
      },
    }));
  };

  increaseQuantity = () => {
    this.setState((state) => ({
      product: {
        ...state.product,
        quantity: state.product.quantity + 1,
      },
    }));
  };

  render() {
    const { product, similarProducts } = this.state;

    return (
      <Layout>
        <Row className={s.detailPage}>
          <Col xs={12} lg={6} className={s.image}>
            <img src={product.thumbnail_url} alt={product.name} />
          </Col>
          <Col xs={12} lg={6} className={s.productInfo}>
            <h3>{product.name}</h3>
            <p>Brand: {product.brand_name}</p>
            <p>{product.short_description}</p>
            <h4>Giá: {moneyParser(product.price)}</h4>
            <Row className={s.btn}>
              <Col xs={4} lg={12} className={s.quantity}>
                <Button
                  className={classnames(s.quantityBtn, s.btn, "text")}
                  onClick={this.decreaseQuantity}
                  disabled={product.quantity === 1}
                >
                  <Icon icon={faMinus} color="rgb(0 0 0 / 61%)" />
                </Button>
                <div className={s.number}>{product.quantity}</div>
                <Button
                  onClick={this.increaseQuantity}
                  className={classnames(s.quantityBtn, s.btn, "text")}
                >
                  <Icon icon={faPlus} color="rgb(0 0 0 / 61%)" />
                </Button>
              </Col>
              <Col xs={8} lg={12}>
                <Button className={s.bagBtn}>ADD TO BAG</Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <ProductSwiper products={similarProducts} title="YOU MAY ALSO LIKE" />
      </Layout>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({ params: PropTypes.objectOf(PropTypes.string) })
    .isRequired,
};

export default ProductDetail;
