import React from "react";
import PropTypes from "prop-types";

import Alert from "./alert";
import Header from "./header";
import Footer from "./footer";
import "./index.scss";

const Layout = ({ children }) => (
  <div className="Layout">
    <Alert />
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
