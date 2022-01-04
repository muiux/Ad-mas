import React from "react";

import { Button } from "components";
import PluginImg from "assets/images/plugin.png";
import CircleDownIcon from "assets/icons/circle-down.svg";
import "./plugin.section.scss";

const Index = () => {
  const handleDownload = () => {};

  return (
    <div>
      <div className="Protocol_plugin">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-5 col-lg-5 p-0 pe-5">
              <img src={PluginImg} alt="plugin" width={"100%"} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mb-5 mb-md-0 order-first order-md-last text-center text-sm-start">
              <div
                className="label"
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-delay="0"
                data-sal-easing="ease"
              >
                THE POSSIBILITIES ARE ENDLESS FOR SECURING DAPPS
              </div>
              <div
                className="title mt-2"
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-delay="200"
                data-sal-easing="ease"
              >
                Developer toolkit to plug MASQ into your dApps and the Metaverse
              </div>
              <div
                className="subtitle mt-3"
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                Developers can plug into the MASQ network to build their apps
                and secure their users right from the get-go. Whether it’s
                legacy Web 2, or Web 3 apps, we support it all.
              </div>
              <div
                className="mt-3 badge"
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-delay="600"
                data-sal-easing="ease"
              >
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-margin">
        <div className="row">
          <div
            className="col-xs-12"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="0"
            data-sal-easing="ease"
          >
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
