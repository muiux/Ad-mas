import React from "react";
import { Link } from "gatsby";

import { Socials } from "config/constants";
import Logo from "assets/logo.png";
import "./index.scss";
import { Externals } from "../../config/constants";

const Footer = () => (
  <div className="Layout_Footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <img className="logo" src={Logo} alt="logo" />
          <div className="mb-3" />
          <p>
            MASQ is a next-gen polygon-powered dVPN, protocol and cryptocurrency
            that privatizes everything you do, and creates the uncensored,
            global web.
          </p>
          <div className="mb-5" />
          <span className="label">COMMUNITY</span>
          <div className="mb-3" />
          <div className="d-flex justify-content-between align-items-center">
            {Socials.map((social) => (
              <Link key={social.name} to={social.link}>
                <img src={social.image} alt={social.name} />
              </Link>
            ))}
          </div>
        </div>

        <div className="external col-xs-12 col-sm-6 col-md-8 d-flex justify-content-center">
          {Object.entries(Externals).map(([key, values]) => (
            <div key={key} className="d-flex flex-column me-5">
              <span className="label mb-3">{key}</span>
              {values.map((value, index) => (
                <Link className="mb-1" key={index + value.name} to={value.link}>
                  <span>{value.name}</span>
                </Link>
              ))}
            </div>
          ))}
          <div>
            <span className="label"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
