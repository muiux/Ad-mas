import React from "react";
import { Link } from "gatsby";

import { Socials, Externals } from "config/constants";
import Logo from "assets/logo.png";
import "./index.scss";

const Footer = () => (
  <div className="Layout_Footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <img src={Logo} alt="logo" width="115px" />
          <div className="mb-3" />
          <p>
            MASQ is a next-gen polygon-powered dVPN, protocol and cryptocurrency
            that privatizes everything you do, and creates the uncensored,
            global web.
          </p>
          <div className="mb-5" />
          <div className="community">
            <span className="label">COMMUNITY</span>
            <div className="mb-3" />
            <div className="d-flex justify-content-center justify-content-sm-start">
              <div className="d-flex justify-content-between align-items-center wrapper">
                {Socials.map((social) => (
                  <Link key={social.name} to={social.link} target={"_blank"}>
                    <img src={social.image} alt={social.name} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-5 mb-sm-0" />
        </div>

        <div className="external col-xs-12 col-sm-6 col-md-8 d-flex justify-content-center">
          {Object.entries(Externals).map(([key, values]) => (
            <div key={key} className="d-flex flex-column me-2 me-md-5">
              <span className="label mb-3">{key}</span>
              {values.map((value, index) => (
                <a
                  className="mb-1"
                  key={index + value.name}
                  href={value.link}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span>{value.name}</span>
                </a>
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
