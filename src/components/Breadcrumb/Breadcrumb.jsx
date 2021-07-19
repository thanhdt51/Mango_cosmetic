import React from "react";

import { Col, Row } from "react-bootstrap";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import s from "./Breadcrumb.module.scss";

function Breadcrumb({ pathname }) {
  return (
    <Row>
      <Col>
        <ul className={s.breadcrumb}>
          {pathname
            .split("/")
            .reduce((previousPaths, currentPath) => {
              const path =
                previousPaths.length >= 2
                  ? `${previousPaths
                      .map((p) => p.url)
                      .join("")
                      .slice(2)}/${currentPath}`
                  : currentPath;

              return [
                ...previousPaths,
                {
                  url: `/${path}`,
                  label: currentPath || "home",
                },
              ];
            }, [])
            .map((b) => (
              <li key={b.label}>
                <Link to={b.url}>{b.label}</Link>
              </li>
            ))}
        </ul>
      </Col>
    </Row>
  );
}

Breadcrumb.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Breadcrumb;
