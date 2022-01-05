import React from "react";

import { Button, DAppBox } from "components";
import { DApps } from "config/constants";

import DAppsImg from "assets/images/app-dapps.webp";
import CircleDownIcon from "assets/icons/circle-down.svg";
import "./dApp.section.scss";

const platform = require("platform");

const Index = () => {
  const handleDownloadApp = () => {};

  return (
    <>
      <div className="DVPN_DApp">
        <div className="container">
          <div className="row">
            <div className="col-12  text-center text-sm-start">
              <div
                className="label"
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-delay="0"
                data-sal-easing="ease"
              >
                DAPP STORE BUILT INTO THE MASQ APP
              </div>
              <div
                className="title mt-2"
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-delay="200"
                data-sal-easing="ease"
              >
                Explore Web3 dApps within MASQ
              </div>
            </div>
          </div>

          <div
            className="row position-relative dAppWrapper"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <div className="col-12 flex-wrap text-center text-sm-start">
              {DApps.map((DApp, i) => (
                <DAppBox
                  key={DApp.name + i}
                  className="dAppItem"
                  preIcon={DApp.image}
                  label={DApp.name}
                />
              ))}
            </div>
            <div className="overlay position-absolute d-none d-sm-block" />
            <div className="overlay position-absolute d-none d-sm-block" />
          </div>

          <div
            className="row mb-5"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="600"
            data-sal-easing="ease"
          >
            <div className="col-sm-12 col-md-9 mt-4 text-center text-sm-start">
              <span>
                Explore and use different decentralized apps within the MASQ
                app, knowing you have the MASQ mesh network providing you with
                unbeatable security.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="DVPN_DApp_img">
        <div className="container dapps">
          <img src={DAppsImg} alt="dapps" />
          <div className="download">
            <a
              target="_blank"
              rel="noreferrer"
              // href={`/download/${window.platform.os.family.toLocaleLowerCase()}`}
              href={`/download/${platform.os.family.toLocaleLowerCase()}`}
            >
              <Button
                preIcon={CircleDownIcon}
                label="GET MASQ DVPN BROWSER"
                handleClick={handleDownloadApp}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
