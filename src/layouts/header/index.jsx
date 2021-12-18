import React from "react";
import cx from "classnames";
import { Link } from "gatsby";

import { NavLinks } from "config/constants";
import LangSelector from "components/LangSelector";
import Logo from "assets/logo.png";
import "./index.scss";

const Header = () => (
  <div className="Layout_Header d-flex align-items-center justify-content-between">
    <img src={Logo} alt="logo" />
    <div className="Layout_Header__navGroup d-flex align-items-center">
      {NavLinks.map((nav) => (
        <Link
          key={nav.text}
          className={cx("navItem", "mx-3")}
          to={nav.link}
          activeClassName="active"
        >
          {nav.text}
        </Link>
      ))}
    </div>
    <LangSelector />
  </div>
);

export default Header;
