import React from "react";
import classNames from "classnames";

import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import s from "./Navigation.module.scss";

const navigationItems = [
  {
    category: "makeup",
    subCategoryList: ["eyes", "lips", "face"],
  },
  {
    category: "skincare",
    subCategoryList: ["mask", "cleanser", "toner"],
  },
  {
    category: "bodycare",
    subCategoryList: ["shower", "lotion"],
  },
  {
    category: "haircare",
    subCategoryList: ["shampoo", "conditioner"],
  },
];

function Navigation() {
  return (
    <>
      {/* <NavMobile /> */}
      <Nav className="me-auto d-block d-lg-none">
        <Nav.Link as={Link} className="pl-lg-4" to="/">
          Home
        </Nav.Link>

        {navigationItems.map((item) => (
          <NavDropdown
            as={Link}
            to={`/${item.category}`}
            title={item.category}
            className={classNames("pl-lg-4", s.navName)}
          >
            {item.subCategoryList.map((subCategory) => (
              <NavDropdown.Item className={s.navName} as={Link} to={`/${item.category}/${subCategory}`}>
                {subCategory}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        ))}
      </Nav>

      {/* <NavDesktop /> */}
      <Nav className="me-auto d-none d-lg-flex order-lg-1">
        <Nav.Link as={Link} className="pl-lg-4" to="/">
          Home
        </Nav.Link>

        {navigationItems.map((item) => (
          <div className={s.navItem}>
            <Nav.Link as={Link} to={`/${item.category}`} className={classNames("pl-lg-4", s.navName)}>
              {item.category}
              <div className={s.navChildren}>
                {item.subCategoryList.map((subCategory) => (
                  <Nav.Link className={s.navName} as={Link} to={`/${item.category}/${subCategory}`}>
                    {subCategory}
                  </Nav.Link>
                ))}
              </div>
            </Nav.Link>
          </div>
        ))}
      </Nav>
    </>
  );
}

export default Navigation;
