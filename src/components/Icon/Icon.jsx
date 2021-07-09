import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon(props) {
  const { color, icon, className } = props;

  return (
    <i style={{ color }} className={className}>
      <FontAwesomeIcon icon={icon} />
    </i>
  );
}

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    icon: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string])
    ),
    iconName: PropTypes.string,
    prefix: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: null,
};

export default Icon;
