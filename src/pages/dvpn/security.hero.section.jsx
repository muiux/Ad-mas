import React from "react";
import { Link } from "gatsby";

import Button from "components/Button";
import { SecurityPoints, SocialProofers } from "config/constants";
import CircleDownIcon from "assets/icons/circle-down.svg";
import "./security.hero.section.scss";

const platform = require("platform");

const Index = () => {
  const handleDownloadApp = () => {};
  return (
    <div className="DVPN_SecurityHero">
      <div className="container">
        <div className="row">
          <div className="SocialProofers d-flex justify-content-center align-items-center flex-wrap">
            {SocialProofers.map((proofer) => (
              <Link key={proofer.name} to={proofer.link}>
                <img src={proofer.image} alt={proofer.name} height="25px" />
              </Link>
            ))}
          </div>
        </div>
        <div className="row Protocol">
          <div className="col-md-12 col-lg-8">
            <div
              className="label text-center text-sm-start"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              DECENTRALIZED INTERNET FREEDOM PROTOCOL
            </div>
            <div
              className="title mt-2 text-center text-sm-start"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              Boost your online security & use the truly global web with MASQ
              dVPN
            </div>

            <div className="my-5">
              {SecurityPoints.map((point, index) => (
                <div
                  key={"point" + index}
                  className="point d-inline-flex align-items-center my-3"
                  data-sal="slide-up"
                  data-sal-duration="2000"
                  data-sal-delay={400 + 100 * index}
                  data-sal-easing="ease"
                >
                  <img
                    className="me-3"
                    src={point.image}
                    alt={"security point"}
                  />
                  <span>{point.desc}</span>
                </div>
              ))}
            </div>

            <div
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="1000"
              data-sal-easing="ease"
            >
              <a
                target="_blank"
                rel="noreferrer"
                // href={`/download/${window.platform.os.family.toLocaleLowerCase()}`}
                href={`/download/${platform.os.family.toLocaleLowerCase()}`}
              >
                <Button
                  preIcon={CircleDownIcon}
                  label="DOWNLOAD MASQ DVPN BROWSER"
                  handleClick={handleDownloadApp}
                />
              </a>
              <div className="tip mt-3">
                {/* For {window.platform.os.toString()} or later. */}
                For {platform.os.toString()} or later.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
