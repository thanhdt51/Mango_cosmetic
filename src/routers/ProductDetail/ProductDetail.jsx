import React from "react";

import { Col, Row } from "react-bootstrap";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import classnames from "classnames";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

import { moneyParser } from "../../utils";

import s from "./ProductDetail.module.scss";
import ProductSwiper from "../../components/ProductSwiper";

const defaultProduct = {
  id: 727090331,
  name: "Son Dưỡng Môi Không Phai Elyza Hương Thị Siêu Sang – Phiên Bản Bươm Bướm",
  brand_name: "Elyza",
  short_description:
    "Son Dưỡng Môi Không Phai Elyza Hương Thị Siêu Sang – Phiên Bản Bươm Bướm\nBên cạnh các thỏi son lì và son kem lâu trôi, các nàng cũng nên kết thân với son dưỡng môi có màu nhẹ nhàng giúp đôi môi luôn...",
  price: 246000,
  thumbnail_url:
    "https://salt.tikicdn.com/cache/280x280/ts/product/b3/1d/9e/d30e5d76eec1f06c1c4d400beeb684d3.png",
  thumbnail_width: 280,
  thumbnail_height: 280,
  category: ["makeup", "lips"],
};

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
  }

  componentDidMount = () => {
    this.setState({
      product: { ...defaultProduct, quantity: 1 },
    });
  };

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
    const { product } = this.state;

    return (
      <Layout>
        <Row className={s.detailPage}>
          <Col xs={12} lg={6} className={s.image}>
            <img src={defaultProduct.thumbnail_url} alt={defaultProduct.name} />
          </Col>
          <Col xs={12} lg={6} className={s.productInfo}>
            <h3>{defaultProduct.name}</h3>
            <p>Brand: {defaultProduct.brand_name}</p>
            <p>{defaultProduct.short_description}</p>
            <h4>Giá: {moneyParser(defaultProduct.price)}</h4>
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

        <ProductSwiper title="YOU MAY ALSO LIKE" />
      </Layout>
    );
  }
}

export default ProductDetail;
