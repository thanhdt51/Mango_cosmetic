import { faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import { omit } from "lodash";

import s from "./Cart.module.scss";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import { moneyParser } from "../../utils";

const defaultProducts = [
  {
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
    category: 1000,
  },
  {
    id: 1,
    name: "Nước Tẩy Trang L'Oreal 3 In 1 Micellar Làm Sạch Sâu (400ml)",
    brand_name: "L'ORÉAL",
    short_description:
      "\nNước Tẩy Trang L'Oreal 3 In 1 Micellar Làm Sạch Sâu (400ml) mang đến các tẩy trang, làm sạch, giữ ẩm và dưỡng mềm da đồng thời chỉ trong một sản phẩm. Sản phẩm giúp lấy đi sạch cặn trang điểm nhưng...",
    price: 148000,
    thumbnail_url:
      "https://salt.tikicdn.com/cache/280x280/ts/product/f3/59/20/dac6b526119d2aa23afe3245fec8c816.jpg",
    thumbnail_width: 280,
    thumbnail_height: 280,
    category: 1000,
  },
  {
    id: 318749251,
    name: "Son Kem Lì Black Rouge Air Fit Velvet Tint – Hàn Quốc",
    brand_name: "Black Rouge",
    short_description:
      "Thương hiệu: Black rougeXuất xứ: Hàn Quốc\nBlack Rouge Air Fit Velvet Tint được ra mắt vào những tháng đầu năm 2018 và đã ngay lập tức tạo được cơn sốt không hề nhỏ trong cộng đồng yêu son. Tiếp nối...",
    price: 138200,
    thumbnail_url:
      "https://salt.tikicdn.com/cache/280x280/ts/product/05/ef/71/74e40aca8991bc82f2f5fe001aac7ad2.jpg",
    thumbnail_width: 280,
    thumbnail_height: 280,
    category: 1000,
  },
  {
    id: 134106321,
    name: "Combo 6 hộp bông tẩy trang Silcot (82 miếng/hộp)",
    brand_name: "Silcot",
    short_description:
      "Bộ 6 hộp Bông tẩy trang Silcot (82 miếng/hộp) là sản phẩm chăm sóc da cao cấp bán chạy số 1 Nhật Bản trong hơn 10 năm liền. Được làm từ 100% sợi bông tự nhiên, bông tẩy trang mềm xốp, êm ái và vô...",
    price: 184000,
    thumbnail_url:
      "https://salt.tikicdn.com/cache/280x280/ts/product/9f/e9/fc/50517f2d8f7a7806bed8e6666fb29fb5.jpg",
    thumbnail_width: 280,
    thumbnail_height: 280,
    category: 1000,
  },
  {
    id: 9803066,
    name: "Bông Tẩy Trang Ipek 130 Miếng (Thổ Nhĩ Kì)",
    brand_name: "Ipek",
    short_description:
      "\nCombo Bông Tẩy Trang Ipek 130 Miếng (Thổ Nhĩ Kỳ) thành phần 100% bông cotton là bông tẩy trang hữu cơ được sản xuất bởi công ty Ipek Idrofil Pamuk công ty hàng đầu Đông Âu về sản xuất bông an...",
    price: 30000,
    thumbnail_url:
      "https://salt.tikicdn.com/cache/280x280/ts/product/6e/78/28/eba2f62da7883bf339be586ab8a75911.jpg",
    thumbnail_width: 280,
    thumbnail_height: 280,
    category: 1000,
  },
];

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: {} };

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setState({
      products: defaultProducts.reduce(
        (previousProducts, currentProduct) => ({
          ...previousProducts,
          [currentProduct.id]: { ...currentProduct, quantity: 1 },
        }),
        {}
      ),
    });
  }

  handleDelete(event) {
    const productId = event.currentTarget.name;

    this.setState((state) => ({ products: omit(state.products, [productId]) }));
  }

  decreaseQuantity(event) {
    const productId = event.currentTarget.name;

    this.setState((state) => ({
      products: {
        ...state.products,
        [productId]: {
          ...state.products[productId],
          quantity: state.products[productId].quantity - 1,
        },
      },
    }));
  }

  increaseQuantity(event) {
    const productId = event.currentTarget.name;

    this.setState((state) => ({
      products: {
        ...state.products,
        [productId]: {
          ...state.products[productId],
          quantity: state.products[productId].quantity + 1,
        },
      },
    }));
  }

  render() {
    const { products } = this.state;

    return (
      <Layout>
        <Container>
          {/* Mobile */}
          <div className="d-block d-lg-none">
            {Object.values(products).map((product) => (
              <Row key={product.id} className={s.cartProduct}>
                <Col xs={4}>
                  <img
                    src={product.thumbnail_url}
                    alt="cart-product"
                    className={s.image}
                  />
                </Col>
                <Col xs={8}>
                  <div className={s.title}>
                    <a href="#">{product.name}</a>
                  </div>
                  <Row>
                    <Col xs={5}>
                      <div className={s.price}>
                        {moneyParser(product.price)}
                      </div>
                    </Col>
                    <Col xs={7}>
                      <div>
                        <Button
                          onClick={this.handleDelete}
                          name={product.id}
                          className="text"
                        >
                          <Icon icon={faTrash} color="black" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <div className={s.quantity}>
                    <Button
                      onClick={this.decreaseQuantity}
                      className="text quantityBtn"
                      name={product.id}
                      disabled={product.quantity === 1}
                    >
                      <Icon icon={faMinus} color="rgb(0 0 0 / 61%)" />
                    </Button>
                    <div className={s.number}>{product.quantity}</div>
                    <Button
                      onClick={this.increaseQuantity}
                      className="text quantityBtn"
                      name={product.id}
                    >
                      <Icon icon={faPlus} color="rgb(0 0 0 / 61%)" />
                    </Button>
                  </div>
                </Col>
              </Row>
            ))}
            <Row className={s.cartCheckout}>
              <Col xs={6}>
                <div className={s.total}>
                  <p>Total:</p>
                  <h5 className={s.totalPrice}>{moneyParser(2000000)}</h5>
                </div>
              </Col>
              <Col xs={6} className={s.checkoutBtn}>
                <a href="/cart/checkout">
                  <Button>CHECKOUT</Button>
                </a>
              </Col>
            </Row>
          </div>

          {/* Desktop */}
          <div className="d-none d-lg-block">
            <Row>
              <Col lg={9}>
                {Object.values(products).map((product) => (
                  <Row key={product.id}>
                    <div className={s.cartProduct}>
                      <Col lg={3}>
                        <img
                          src={product.thumbnail_url}
                          alt="cart-product"
                          className={s.image}
                        />
                      </Col>
                      <Col lg={7}>
                        <h6>
                          <a href="#">{product.name}</a>
                        </h6>
                      </Col>
                      <Col lg={2}>
                        <h5>{moneyParser(product.price)}</h5>
                        <p>
                          Quantity:
                          <input
                            type="number"
                            name="quantity"
                            value="1"
                            min="1"
                            max="10"
                          />
                        </p>
                        <Button className="text">
                          <Icon icon={faTrash} color="black" />
                        </Button>
                      </Col>
                    </div>
                  </Row>
                ))}
              </Col>
              <Col lg={3}>
                <div className={s.cartCheckout}>
                  <div className={s.total}>
                    <p>Total:</p>
                    <h5 className={s.totalPrice}>
                      <strong>{moneyParser(2000000)}</strong>
                    </h5>
                  </div>
                  <div className={s.checkoutBtn}>
                    <a href="/cart/checkout">
                      <Button>CHECKOUT</Button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Cart;
