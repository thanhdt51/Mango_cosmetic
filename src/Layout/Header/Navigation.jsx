import React from 'react'

import {Nav, NavDropdown} from "react-bootstrap"

import s from "./Navigation.module.scss"

function Navigation() {
  return (
    <>
      {/* <NavMobile /> */}
      <Nav className="me-auto d-block d-lg-none">
        <Nav.Link className="pl-lg-4" href="#home">
          Home
        </Nav.Link>
        <NavDropdown
          href="#makeup"
          title="Makeup"
          id="collasible-nav-dropdown"
          className="pl-lg-4"
        >
          <NavDropdown.Item href="#makeup/eyes">Eyes</NavDropdown.Item>
          <NavDropdown.Item href="#makeup/lips">Lips</NavDropdown.Item>
          <NavDropdown.Item href="#makeup/face">Face</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          title="Skincare"
          id="collasible-nav-dropdown"
          className="pl-lg-4"
        >
          <NavDropdown.Item href="#skincare/mask">
            Mask
          </NavDropdown.Item>
          <NavDropdown.Item href="#skincare/cleanser">
            Cleanser
          </NavDropdown.Item>
          <NavDropdown.Item href="#skincare/toner">
            Toner
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          title="Bodycare"
          id="collasible-nav-dropdown"
          className="pl-lg-4"
        >
          <NavDropdown.Item href="#bodycare/showergel">
            Shower Gel
          </NavDropdown.Item>
          <NavDropdown.Item href="#bodycare/lotion">
            Lotion
          </NavDropdown.Item>
          <NavDropdown.Item href="#bodycare/showergel">
            Toner
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          title="Haircare"
          id="collasible-nav-dropdown"
          className="pl-lg-4"
        >
          <NavDropdown.Item href="#haircare/shampoo">
            Shampoo
          </NavDropdown.Item>
          <NavDropdown.Item href="#haircare/conditioner">
            Conditioner
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>

      {/* <NavDesktop /> */}
      <Nav className="me-auto d-none d-lg-block order-lg-1">
        <Nav.Link className="pl-lg-4" href="#home">
          Home
        </Nav.Link>
        <div className={s.navItem}>
          <Nav.Link
            href="#makeup"
            id="collasible-nav-dropdown"
            className="pl-lg-4"
          >Makeup
            <div className={s.navChildren}>
              <Nav.Link href="#makeup/eyes">Eyes</Nav.Link>
              <Nav.Link href="#makeup/lips">Lips</Nav.Link>
              <Nav.Link href="#makeup/face">Face</Nav.Link>
            </div>
          </Nav.Link>
        </div>
        <div className={s.navItem}>
          <Nav.Link
            id="collasible-nav-dropdown"
            className="pl-lg-4"
          >Skincare
            <div className={s.navChildren}>
              <Nav.Link href="#skincare/mask">
                Mask
              </Nav.Link>
              <Nav.Link href="#skincare/cleanser">
                Cleanser
              </Nav.Link>
              <Nav.Link href="#skincare/toner">
                Toner
              </Nav.Link>
            </div>
          </Nav.Link>
        </div>
        <div className={s.navItem}>
          <Nav.Link
            id="collasible-nav-dropdown"
            className="pl-lg-4"
          >Bodycare
            <div className={s.navChildren}>
              <Nav.Link href="#bodycare/showergel">
                Shower Gel
              </Nav.Link>
              <Nav.Link href="#bodycare/lotion">
                Lotion
              </Nav.Link>
              <Nav.Link href="#bodycare/showergel">
                Toner
              </Nav.Link>
            </div>
          </Nav.Link>
        </div>
        <div className={s.navItem}>
          <Nav.Link
            id="collasible-nav-dropdown"  
            className="pl-lg-4"
          >Haircare
            <div className={s.navChildren}>
              <Nav.Link href="#haircare/shampoo">
                Shampoo
              </Nav.Link>
              <Nav.Link href="#haircare/conditioner">
                Conditioner
              </Nav.Link>
            </div>
          </Nav.Link>
        </div>
      </Nav>
    </>
  )
}

export default Navigation

