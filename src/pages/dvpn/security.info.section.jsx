import React from "react";
import { Link } from "gatsby";
// import { useLayoutEffect } from "react";
// import { useMediaQuery } from "react-responsive";

import Button from "components/Button";
import BookIcon from "assets/icons/book.svg";
import CircleDownIcon from "assets/icons/circle-down.svg";
import StoreIcon from "assets/icons/store.svg";
import ChromiumLogo from "assets/logos/chromium.png";
import HopHillsImg from "assets/images/hop-hills.svg";
import ShineImg from "assets/images/shine.svg";
import TraceResistantImg from "assets/images/trace-resistant.svg";
// import MutilHopsImg from "assets/backgrounds/multi-hops.png";
import "./security.info.section.scss";

const platform = require("platform");

const Index = () => {
  // const desktop = useMediaQuery({ minWidth: 768 }); //  < lg

  // useLayoutEffect(() => {
  //   const dom = document.querySelector(".container");
  //   if (desktop && dom) {
  //     const style = window.getComputedStyle
  //       ? getComputedStyle(dom, null)
  //       : dom.currentStyle;
  //     const marginX = style.margin.split(" ").pop();

  //     dom.style.marginRight = 0;
  //     dom.style.width = `calc(${style.width} + ${marginX})`;
  //     dom.style.maxWidth = `calc(${style.maxWidth} + ${marginX})`;
  //   }
  // }, [desktop]);

  const handleReadHowItWorks = () => {};
  const handleReadNode = () => {};
  const handleDownloadApp = () => {};

  const renderMultipleHops = () => (
    <div className="multiple-hops panel">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-7 pe-0 pe-md-5">
            <div
              className="label"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              GET SECURE AND PRIVATE ACCESS TO THE INTERNET
            </div>
            <div
              className="title mt-3"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              Be protected by multiple-hops
              <img className="deco" src={HopHillsImg} alt="hop hills" />
            </div>
            <div
              className="subtitle mt-3"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              MASQ is more secure than other VPN & dVPNs that{" "}
              <span>use one route and one hop</span>. With mesh-network MASQ
              gives you, you choose how many hops your data passes through.
              <br />
              <br />
              MASQ can use different routes each time, and will masquerade your
              traffic as if it were something else.
            </div>
            <div
              className="mt-4"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              <Link to="https://docs.masq.ai/portal/" target="_blank">
                <Button
                  preIcon={BookIcon}
                  label="READ HOW IT WORKS"
                  handleClick={handleReadHowItWorks}
                />
              </Link>
            </div>
          </div>
          {/* <div className="col-sm-12 col-md-5 p-0">
            <img src={MutilHopsImg} alt="multi-hop" width={"100%"} />
          </div> */}
        </div>
      </div>
    </div>
  );

  const renderTraceResistant = () => (
    <div className="trace-resistant panel">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-7">
            <div
              className="label"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              NO ADS. NO TRACKERS. EXPERIENCE PEACE FROM BIG TECH.
            </div>
            <div
              className="title mt-3 d-flex flex-wrap justify-content-center justify-content-sm-start"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              <img
                className="me-2"
                src={TraceResistantImg}
                alt="trace resistant"
              />
              Web 3.0 Browsing
            </div>
            <div
              className="subtitle mt-3"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              Access a truly global internet, provided by thousands of users
              internet connections from all over the globe with the Chromium
              browser with Metamask built-in.
              <br />
              <br />
              The internet, without borders. Or Ads. Or Trackers. Phew.
            </div>
            <div
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              <div className="d-flex flex-wrap mt-5 justify-content-center justify-content-sm-start">
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
                    className="me-0 me-sm-2 my-2"
                  />
                </a>
                <Button
                  preIcon={ChromiumLogo}
                  label="chromium"
                  handleClick={() => {}}
                  fill={false}
                  className="chromium my-2"
                />
              </div>
              <div className="mt-3">
                <span className="tip">
                  {/* For {window.platform.os.toString()} or later. */}
                  For {platform.os.toString()} or later.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGetPaid = () => (
    <div className="get-paid panel">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-7 pe-0 pe-md-5">
            <div
              className="label"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              GET PAID WHILST YOU SLEEP – POWERED BY CRYPTO
            </div>
            <div
              className="title mt-3"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              Earn crypto by Sharing your Internet Connection
              <img className="deco" src={ShineImg} alt="shine img" />
            </div>
            <div
              className="subtitle mt-3"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              Serve your internet connection to others around the world and be
              paid in MASQ utility tokens. Pay as you go with the MASQ utility
              token, for any data that you consume on the Network.
            </div>
            <div
              className="mt-4"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              <Link to="/runnode">
                <Button
                  preIcon={StoreIcon}
                  label="LEARN MORE ABOUT RUNNING A NODE"
                  handleClick={handleReadNode}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="DVPN_SecurityInfo text-center text-sm-start">
      <div>{renderMultipleHops()}</div>
      <div>{renderTraceResistant()}</div>
      <div>{renderGetPaid()}</div>
    </div>
  );
};

export default Index;
