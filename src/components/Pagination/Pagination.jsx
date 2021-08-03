import React from "react";

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";

import PropTypes from "prop-types";

import s from "./Pagination.module.scss";

function MyPagination({ totalPage, onPageChange, currentPage }) {
  const pages = [...Array(5).keys()];
  const minPage = 3;
  const maxPage = totalPage - 2;

  const isPrevActive = currentPage > minPage;
  // const isNextActive = false;

  const isNextActive = currentPage < maxPage;

  const takePageNumber = (event) => {
    const pageNumber = parseInt(event.target.name, 10);

    onPageChange(pageNumber);
  };

  const takePrevPageNumber = () => {
    const prevPageNumber = currentPage - 1;
    onPageChange(prevPageNumber);
  };

  const takeNextPageNumber = () => {
    const nextPageNumber = currentPage + 1;
    onPageChange(nextPageNumber);
  };

  return (
    <Nav as="ul" className={s.pagination}>
      <Nav.Item className={classnames({ disabled: !isPrevActive })} as="li">
        <Nav.Link onClick={takePrevPageNumber} as={Link}>
          {"<"}
        </Nav.Link>
      </Nav.Item>
      {pages.map((pageNumber) => {
        let page = minPage - 2 + pageNumber;

        if (currentPage >= minPage) {
          page = currentPage - 2 + pageNumber;
        }

        if (currentPage > maxPage) {
          page = maxPage - 2 + pageNumber;
        }

        return (
          <Nav.Item as="li" key={pageNumber}>
            <Nav.Link
              className={classnames({ [s.activePage]: page === currentPage })}
              onClick={takePageNumber}
              name={page}
              active
              as={Link}
            >
              {page}
            </Nav.Link>
          </Nav.Item>
        );
      })}
      <Nav.Item
        onClick={takeNextPageNumber}
        className={classnames({ disabled: !isNextActive })}
        as="li"
      >
        <Nav.Link as={Link}>{">"}</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

MyPagination.propTypes = {
  totalPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default MyPagination;
