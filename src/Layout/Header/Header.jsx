import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";

import "./Header.scss";

import Button from "../../Button";
import Icon from "../../Icon";
import Logo from "./Logo";
import SignModal from "./SignModal";
import Navigation from "./Navigation";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;

    return (
      <header>
        <Navbar collapseOnSelect expand="lg" bg="#fff1f3">
          <Container>
            <Navbar.Brand href="#home" className="order-lg-0">
              <Logo className="logo"/>
            </Navbar.Brand>
            <div className="d-lg-none cart ml-auto mr-3">
              <a href="#cart">
                <Icon icon={faShoppingCart} color="black" />
                <sup className="cartNumber">0</sup>
              </a>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Form className="d-flex order-lg-2 ml-auto pr-lg-3">
                <FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button className="text">
                  <Icon icon={faSearch} color="black" />
                </Button>
              </Form>
              <hr className="d-lg-none" />

              <Navigation />
              
              <hr className="d-lg-none" />
              <div className="d-none d-lg-block order-lg-3 cart pr-lg-2">
                <a href="#cart">
                  <Icon icon={faShoppingCart} color="black" />
                  <sup className="cartNumber">0</sup>
                </a>
              </div>

              <Nav className="mr-auto order-lg-4">
                <Nav.Link onClick={this.showModal}>
                  <Icon
                    icon={faUser}
                    color="black"
                    className="d-none d-lg-inline-block pr-lg-2"
                  />
                  Sign In
                </Nav.Link>
                <SignModal show={show} hideModal={this.hideModal} />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
