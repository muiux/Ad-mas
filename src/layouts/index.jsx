import React from "react";
import PropTypes from "prop-types";

import ReduxWrapper from "states/reduxWrapper";
import ServiceWrapper from "services";
// import Alert from "./alert";
import Header from "./header";
import Footer from "./footer";

import "./index.scss";

const Layout = ({ children }) => (
  <ReduxWrapper>
    <ServiceWrapper>
      <div className="Layout">
        {/* <Alert /> */}
        <Header />
        <div className="body">{children}</div>
        <Footer />
      </div>
    </ServiceWrapper>
  </ReduxWrapper>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
