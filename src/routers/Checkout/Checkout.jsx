import React from "react";

import {
  faAmazonPay,
  faApplePay,
  faGooglePay,
} from "@fortawesome/free-brands-svg-icons";

import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import { moneyParser } from "../../utils";

import s from "./Checkout.module.scss";

const products = [
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

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartOrder: false, title: false };
  }

  toggleCartOrder = () => {
    this.setState((state) => ({
      cartOrder: !state.cartOrder,
      title: !state.title,
    }));
  };

  render() {
    const { cartOrder, title } = this.state;

    return (
      <Layout className={s.checkoutPage}>
        <Button
          className={classNames("d-lg-none", s.cartBtn)}
          onClick={this.toggleCartOrder}
        >
          {title ? "HIDE ORDER SUMMARY" : "SHOW ORDER SUMMARY"}
        </Button>

        <Row className={s.cartDesktop}>
          <Col lg={5} className={s.cartProductDesktop}>
            <Container className={classNames(s.cart, { [s.active]: cartOrder })}>
              {products.map((product) => (
                <Row key={product.id} className={s.cartProduct}>
                  <Col xs={2}>
                    <img
                      src={product.thumbnail_url}
                      alt="cart-product"
                      className={s.image}
                    />
                    <p className={s.checkoutQuantity}>1</p>
                  </Col>
                  <Col xs={7}>
                    <div className={s.title}>
                      <a href="#">{product.name}</a>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className={s.price}>{moneyParser(product.price)}</div>
                  </Col>
                </Row>
              ))}
              <hr />
              <div className={s.totalPrice}>
                <p>Total:</p>
                <h5>
                  {moneyParser(
                    products.reduce(
                      (previousProducts, currentProduct) =>
                        previousProducts + currentProduct.price,
                      0
                    )
                  )}
                </h5>
              </div>
            </Container>
          </Col>

          <Col lg={7} className={s.checkout}>
            <Container>
              <div className={s.flexSocial}>
                <a className={s.gg} href="#">
                  <Icon icon={faGooglePay} color="red" />
                </a>
                <a className={s.apple} href="#">
                  <Icon icon={faApplePay} color="black" />
                </a>
                <a className={s.amazon} href="#">
                  <Icon icon={faAmazonPay} color="#ffc107" />
                </a>
              </div>
              <div className={s.orText}>
                <span>Or</span>
              </div>
              <div className={s.infoCheckout}>
                <div className={s.headerCheckout}>
                  <h5>CONTACT INFORMATION</h5>
                </div>
                <div className={s.contentCheckout}>
                  <input type="email" placeholder="EMAIL" name="email" />
                  <input type="number" placeholder="PHONE" name="phone" />
                </div>
                <div className={s.headerCheckout}>
                  <h5>SHIPPING ADDRESS</h5>
                </div>
                <div className={s.contentCheckout}>
                  <input type="text" placeholder="FULLNAME" name="fullname" />
                  <select name="province">
                    <option selected disabled>
                      Select a province
                    </option>
                  </select>
                  <select name="district">
                    <option selected disabled>
                      Select a district
                    </option>
                  </select>
                  <select name="ward">
                    <option selected disabled>
                      Select a ward
                    </option>
                  </select>
                  <input type="text" placeholder="ADDRESS" name="address" />
                </div>
              </div>
              <div className={s.centerAlignBtn}>
                <Button className={s.confirmBtn}>
                  <a href="/receipt">CONFIRM INVOICE</a>
                </Button>
              </div>
            </Container>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Checkout;
