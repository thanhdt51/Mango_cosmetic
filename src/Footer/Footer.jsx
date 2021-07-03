import React from "react";

import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col } from "react-bootstrap";

import Icon from "../Icon";

import Logo from "../Header/Logo";

function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={6} lg={3}>
            <Logo />
          </Col>

          <Col xs={6} lg={3}>
            <h5>Về COSMETIC</h5>
            <p className="m-0">
              <Icon icon={faPhoneAlt} color="black" /> Hotline: 1800 123 4567
            </p>
            <p className="m-0">
              <Icon icon={faEnvelope} color="black" /> comesticshop@gmail.com
            </p>
            <p className="m-0">
              <Icon icon={faMapMarkerAlt} color="black" /> 123 Nguyen Chi Thanh
              Street, District 5
            </p>
          </Col>

          <Col xs={6} lg={3}>
            <h5>Sitemap</h5>
            <p className="m-0">TERMS & CONDITIONS</p>
            <p className="m-0">PRIVACY POLICY</p>
            <p className="m-0">ACCESSIBILITY</p>
          </Col>

          <Col xs={6} lg={3}>
            <h5>© 2021 Được chứng nhận</h5>
            <img
              className="salenoti"
              src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
              alt="salenoti"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
