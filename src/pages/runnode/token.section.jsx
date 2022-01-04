import React from "react";

import { Button } from "components";
import TokenIllusImg from "assets/images/token-illus.png";
import PolygonImg from "assets/logos/polygon-black.svg";
import CircleDownIcon from "assets/icons/circle-down.svg";
import "./token.section.scss";

const Index = () => {
  const handleDownload = () => {};
  return (
    <div className="RunANode_token">
      <div className="container">
        <div className="row justify-content-center powered-by mb-5">
          <div
            className="col-md-12 col-lg-9 text-center"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="0"
            data-sal-easing="ease"
          >
            <span className="me-3">PAYMENTS POWERED BY</span>
            <img src={PolygonImg} alt="polygon" />
          </div>
        </div>

        <div
          className="row justify-content-center"
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-delay="0"
          data-sal-easing="ease"
        >
          <div className="col-xs-12 col-md-9">
            <img src={TokenIllusImg} alt="hops" width="100%" />
          </div>
        </div>
      </div>
      <div className="container secure-padding">
        <div className="row">
          <div
            className="col-xs-12"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="0"
            data-sal-easing="ease"
          >
            <div className="secure text-center text-sm-start align-items-center align-items-sm-start">
              <h1>Secure yourself online & Run a node today!</h1>
              <a
                className="mt-3"
                target="_blank"
                rel="noreferrer"
                href={`/download/${window.platform.os.family.toLocaleLowerCase()}`}
              >
                <Button
                  preIcon={CircleDownIcon}
                  label="DOWNLOAD MASQ DVPN BROWSER"
                  handleClick={handleDownload}
                />
              </a>
              <div className="tip mt-3">
                For {window.platform.os.toString()} or later.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
