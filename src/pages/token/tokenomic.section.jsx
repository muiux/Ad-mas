import React from "react";

import { Button } from "components";
import AppConnectMasqScene from "assets/images/app-connect-masq.png";
import CircleDownIcon from "assets/icons/circle-down.svg";
import "./tokenomic.section.scss";

const Index = () => {
  const handleDownload = () => {};

  return (
    <div className="Token_tokenomic">
      <div className="container">
        <div className="row align-items-stretch text-center text-sm-start">
          <div className="col-xs-12 col-md-4 left-fluid">
            <img src={AppConnectMasqScene} alt="" />
          </div>
          <div className="col-xs-12 col-md-8 d-flex flex-column justify-content-center align-items-center align-items-sm-start ps-0 ps-sm-5 py-5">
            <div
              className="label mb-4"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              THE TOKENOMICS OF THE MASQ NETWORK ARE EVOLVING
            </div>
            <div
              className="title mb-3"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              Tokenomics 2.0 coming soon
            </div>
            <div
              className="subtitle mb-4"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              MASQ is currently operating on the ethereum ropsten and polygon
              mumbai testnets. More information will be coming soon about
              updated tokenomics and exactly how payments for transactions are
              calculated.
              <br />
              <br />
              It is possible tokens may be burned with every transaction, and
              you may earn less MASQ per MB than you spend to consume per MB for
              data.
            </div>
            <div
              className="badge"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              COMING SOON
            </div>
          </div>
        </div>
      </div>
      <div className="container secure-padding">
        <div className="row">
          <div className="col-xs-12">
            <div
              className="secure text-center text-sm-start align-items-center align-items-sm-start"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
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
