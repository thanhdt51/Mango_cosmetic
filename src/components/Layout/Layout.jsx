import React from "react";

import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, footer, className }) {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      {footer && <Footer />}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
};

Layout.defaultProps = {
  footer: true,
};

export default Layout;
