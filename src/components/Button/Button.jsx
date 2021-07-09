import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import classnames from "classnames";

import s from "./Button.module.scss";

function MyButton({ type, children, className, ...restProps }) {
  return (
    <Button
      className={classnames(s.button, { text: type === "text" }, className)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
    >
      {children}
    </Button>
  );
}

MyButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

MyButton.defaultProps = {
  className: null,
  type: "button",
  children: null,
};

export default MyButton;
