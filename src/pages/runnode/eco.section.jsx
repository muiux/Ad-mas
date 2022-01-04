import React, { useState } from "react";
import cx from "classnames";

import Button from "components/Button";

import CircleDownIcon from "assets/icons/circle-down.svg";
import "./eco.section.scss";

const platform = require("platform");

const Features = [
  {
    preIcon: require("assets/icons/poly-no1.svg").default,
    title: "Create or connect an Ethereum Wallet",
    content:
      "Create an Ethereum wallet so you can send and recieve transactions for sharing or requesting data.",
    image: require("assets/images/app-wallet-setup.png").default,
  },
  {
    preIcon: require("assets/icons/poly-no2.svg").default,
    title: "Connect to Polygon or Ethereum",
    content:
      "Connect to the blockchain so transactions can be sent to others with your newly connected wallet.",
    image: require("assets/images/app-choose-sp.png").default,
  },
  {
    preIcon: require("assets/icons/poly-no3.svg").default,
    title: "Connect to MASQ with Serve Mode",
    content:
      "Once connected to MASQ, toggle the serve switch to ‘on’. You may have to forward a port in your Routers settings.",
    image: require("assets/images/app-connect-masq.png").default,
  },
];

const FeatureBox = ({ preIcon, title, content, handleClick, active }) => (
  <div
    className={cx("Runnode_FeatureBox", { "opacity-50": !active })}
    aria-hidden="true"
    onClick={handleClick}
  >
    <div className="header">
      <img src={preIcon} alt="pre icon" />
    </div>
    <div className="body">
      <div className="body_title">{title}</div>
      <div className="body_content">{content}</div>
    </div>
  </div>
);

const Index = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const handleDownloadApp = () => {};

  return (
    <div className="RunANode_eco">
      <div className="container">
        <div className="row text-center text-sm-start">
          <div className="col-12">
            <div
              className="label"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              THE MISSION – LET’S CREATE THE BORDERLESS WEB TOGETHER
            </div>
            <div
              className="title mt-2"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              Running a node is easy. Just download the App!
            </div>
          </div>
        </div>

        <div
          className="row mt-5 align-items-stretch"
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-delay="0"
          data-sal-easing="ease"
        >
          <div className="col-xs-12 col-sm-6 pe-2 pe-md-5">
            {Features.map((feature, index) => (
              <FeatureBox
                key={feature.title}
                preIcon={feature.preIcon}
                title={feature.title}
                content={feature.content}
                active={index === selectedFeature}
                handleClick={() => setSelectedFeature(index)}
              />
            ))}
          </div>
          <div className="col-xs-12 col-sm-6 position-relative">
            <img
              className="feature-image"
              src={Features[selectedFeature].image}
              alt=""
            />
          </div>
        </div>

        <div className="row mt-4 text-center text-sm-start">
          <div
            className="col-12"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="0"
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
            <div className="mt-2" />
            <span className="tip">
              {/* For {window.platform.os.toString()} or later. */}
              For {platform.os.toString()} or later.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
