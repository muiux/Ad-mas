import React from "react";
import { Link } from "gatsby";

import Button from "components/Button";
import LivesImg from "assets/images/lives.png";
import ServingIllusImg from "assets/images/ServeIllus.png";
import StoreIcon from "assets/icons/store.svg";
import CircleDownIcon from "assets/icons/circle-down.svg";

import "./mission.section.scss";

const Index = () => {
  const handleReadNode = () => {};

  const handleDownload = () => {};

  return (
    <div className="DVPN_Mission">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-sm-12 col-md-6 col-lg-5 position-relative"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="0"
            data-sal-easing="ease"
          >
            <div className="text-center pe-0 pe-md-4 pe-lg-5">
              <img src={LivesImg} alt="lives" width={"100%"} />
            </div>
            <div className="position-absolute illus-img">
              <img src={ServingIllusImg} alt="serving illus" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-7 mb-5 mb-md-0 order-first order-md-last text-center text-sm-start">
            <div
              className="label"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              SHARING YOUR INTERNET HAS REAL WORLD IMPACT
            </div>
            <div
              className="title mt-2"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              Lives are improved by sharing your digital freedoms
            </div>
            <div
              className="subtitle mt-3"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              Because so many people are pooling their internet connections
              together, it means people have access to every piece of content
              worldwide. In a world where censorship is more common,{" "}
              <strong>MASQ</strong> enables a world with more truth within it.
            </div>

            <div
              className="mt-5"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="800"
              data-sal-easing="ease"
            >
              <Link to="/protocol">
                <Button
                  preIcon={StoreIcon}
                  label="READ MORE ABOUT HOW MASQ PROTOCOL HELPS"
                  handleClick={handleReadNode}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-padding">
        <div
          className="row"
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-delay="0"
          data-sal-easing="ease"
        >
          <div className="col-xs-12">
            <div className="secure text-center text-sm-start align-items-center align-items-sm-start">
              <h1>Secure yourself online & Explore the Web 3.0</h1>
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
