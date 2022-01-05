import React, { useState } from "react";
import cx from "classnames";
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";
import HamburgerMenu from "react-hamburger-menu";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { NavLinks } from "config/constants";
import LangSelector from "components/LangSelector";
import Logo from "assets/logo.png";
import "./index.scss";

const Header = () => {
  const desktop = useMediaQuery({ minWidth: 992 }); //  < lg
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="Layout_Header d-flex align-items-center justify-content-between w-100">
        <Link to="/dvpn">
          <img src={Logo} alt="logo" width="115px" />
        </Link>

        {desktop && (
          <div className="Layout_Header__navGroup d-flex align-items-center">
            {NavLinks.map((nav) => (
              <Link
                key={nav.text}
                className={cx("navItem", "mx-3")}
                to={nav.link}
                activeClassName="active"
                partiallyActive={true}
              >
                {nav.text}
              </Link>
            ))}
          </div>
        )}

        <div className="d-flex align-items-center">
          <LangSelector />
          {!desktop && (
            <div className="hambuger-menu ms-3">
              <HamburgerMenu
                isOpen={menuOpen}
                menuClicked={handleMenuClick}
                width={18}
                height={15}
                strokeWidth={3}
                rotate={0}
                color="white"
                borderRadius={10}
                animationDuration={0.5}
              />
            </div>
          )}
        </div>
      </div>
      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        direction="left"
        className="drawer"
      >
        <div className="d-flex flex-column align-items-center">
          {NavLinks.map((nav) => (
            <Link
              key={nav.text}
              to={nav.link}
              activeClassName="active"
              partiallyActive={true}
            >
              {nav.text}
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Header;
