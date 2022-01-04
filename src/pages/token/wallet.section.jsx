import React from "react";

import { AvailableSwapsPanel } from "components";
import AppWalletScene from "assets/images/app-wallet.png";
import "./wallet.section.scss";

const Index = () => {
  return (
    <div className="Token_wallet">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-md-9 text-center">
            <div
              className="label mb-4"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              POLYGON OR ETHEREUM SUPPORTED
            </div>
            <div
              className="title mb-4"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              Choose the chain, choose the wallet
            </div>
            <div
              className="subtitle mb-5"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              We encourage Polygon usage given it’s cheap transaction fees and
              speed, but we also support Ethereum. When you start MASQ, either
              create fresh wallets for the ultimate private experience and
              transfer MASQ to them from elsewhere, or use existing wallets.
              <br />
              <br />
              Your PK is stored encrypted locally on your machine, just like
              with Metamask or similar wallets.
            </div>
            <div
              className="image"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              <img src={AppWalletScene} alt="app-wallet" width="100%" />
            </div>
          </div>
        </div>
      </div>

      <div className="swaps w-100">
        <AvailableSwapsPanel />
      </div>
    </div>
  );
};

export default Index;
