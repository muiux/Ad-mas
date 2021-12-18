import React from "react";

import Button from "components/Button";
import BookIcon from "assets/icons/book.svg";
import CircleDownIcon from "assets/icons/circle-down.svg";
import StoreIcon from "assets/icons/store.svg";
import ChromiumLogo from "assets/logos/chromium.png";
import "./security.info.section.scss";

const Index = ({ handleDownloadApp }) => {
  const handleReadHowItWorks = () => {

  }
  const handleReadNode = () => {

  }
  return (
    <div className="DVPN_SecurityInfo">

      <div className="multiple-hops panel">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-7">
              <div className="label">
                GET SECURE AND PRIVATE ACCESS TO THE INTERNET
              </div>
              <div className="title mt-2">
                Be protected by multiple-hops
              </div>
              <div className="subtitle mt-4">
                MASQ is more secure than other VPN & dVPNs that <span>use one route and one hop</span>. With mesh-network MASQ gives you, you choose how many hops your data passes through.
                <br /><br />
                MASQ can use different routes each time, and will masquerade your traffic as if it were something else.
              </div>
              <div className="mt-4">
                <Button
                  preIcon={BookIcon}
                  label="READ HOW IT WORKS"
                  handleClick={handleReadHowItWorks}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trace-resistant panel">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-7">
              <div className="label">
                NO ADS. NO TRACKERS. EXPERIENCE PEACE FROM BIG TECH.
              </div>
              <div className="title mt-2">
                Trace-resistant Web 3.0 Browsing
              </div>
              <div className="subtitle mt-4">
                Access a truly global internet, provided by thousands of users internet connections from all over the globe with the Chromium browser with Metamask built-in.
                <br /><br />
                The internet, without borders. Or Ads. Or Trackers. Phew.
              </div>
              <div className="d-flex mt-5">
                <Button
                  preIcon={CircleDownIcon}
                  label="DOWNLOAD MASQ DVPN BROWSER"
                  handleClick={handleDownloadApp}
                  className="me-3"
                />
                <Button
                  preIcon={ChromiumLogo}
                  label="chromium"
                  handleClick={() => { }}
                  fill={false}
                  className="chromium"
                />
              </div>
              <div className="mt-3">
                <span className="tip">For Mac OS X 10.11 or later.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="get-paid panel">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-7">
              <div className="label">
                GET PAID WHILST YOU SLEEP – POWERED BY CRYPTO
              </div>
              <div className="title mt-2">
                Earn crypto by Sharing your Internet Connection
              </div>
              <div className="subtitle mt-4">
                Serve your internet connection to others around the world and be paid in MASQ utility tokens. Pay as you go with the MASQ utility token, for any data that you consume on the Network.
              </div>
              <div className="mt-4">
                <Button
                  preIcon={StoreIcon}
                  label="LEARN MORE ABOUT RUNNING A NODE"
                  handleClick={handleReadNode}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Index;
