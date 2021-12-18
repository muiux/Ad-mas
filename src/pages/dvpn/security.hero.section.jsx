import React from "react";
import { Link } from "gatsby";

import Button from "components/Button";
import { SecurityPoints, SocialProofers } from "config/constants";
import CircleDownIcon from "assets/icons/circle-down.svg";
import "./security.hero.section.scss";

const Index = ({ handleDownloadApp }) => (
  <div className="DVPN_SecurityHero">
    <div className="container">
      <div className="row">
        <div className="SocialProofers d-flex justify-content-center align-items-center">
          {SocialProofers.map((proofer) => (
            <Link key={proofer.name} to={proofer.link}>
              <img src={proofer.image} alt={proofer.name} />
            </Link>
          ))}
        </div>
      </div>
      <div className="row Protocol">
        <div className="label">
          DECENTRALIZED INTERNET FREEDOM PROTOCOL
        </div>
        <div className="title mt-2">
          Boost your online security & use the truly global web with MASQ dVPN
        </div>

        <div className="point my-5">
          {SecurityPoints.map((point, index) => (
            <div key={"point" + index} className="d-inline-flex align-items-center w-50 my-3">
              <img className="me-3" src={point.image} alt={"security point"} />
              <span>{point.desc}</span>
            </div>
          ))}
        </div>

        <div>
          <Button
            preIcon={CircleDownIcon}
            label="DOWNLOAD MASQ DVPN BROWSER"
            handleClick={handleDownloadApp}
          />
        </div>
        <span className="tip mt-3">For Mac OS X 10.11 or later.</span>
      </div>

    </div>
  </div>
);

export default Index;
