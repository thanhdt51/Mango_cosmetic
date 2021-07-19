import React from "react";

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import s from "./Pagination.module.scss";

function MyPagination() {
  return (
    <Nav as="ul" className={s.pagination}>
      <Nav.Item as="li">
        <Nav.Link disabled as={Link} to="#previous">{'<'}</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link active as={Link} to="#1">1</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="#2">2</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="#3">3</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="#next">{'>'}</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MyPagination;
