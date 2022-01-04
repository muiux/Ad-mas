import React from "react";
import { Link } from "gatsby";

import { FeatureBox, Button, AvailableSwapsPanel } from "components";
import HopsImg from "assets/images/token-illus.png";
import PolygonImg from "assets/logos/polygon-white.svg";

import "./payment.section.scss";

const Features = [
  {
    image: require("assets/icons/poly-no1.svg").default,
    title: "Request for Data Sent",
    content:
      "MASQ sends the request to someone in your immediate neighborhood.",
  },
  {
    image: require("assets/icons/poly-no2.svg").default,
    title: "Routed across 3+ hops",
    content:
      "Your request takes a random route across the network, encrypted as a CORES package.",
  },
  {
    image: require("assets/icons/poly-no3.svg").default,
    title: "Exit node fetches content",
    content:
      "Relay nodes are paid for routing, and exit nodes are paid even more for fetching the content.",
  },
];

const Index = () => {
  const handleReadToken = () => {};

  return (
    <div>
      <div className="DVPN_Payment">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-sm-12 col-md-10 col-lg-8 text-center">
              <div
                className="label"
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-delay="0"
                data-sal-easing="ease"
              >
                INCENTIVIZING HIGH-BANDWIDTH CONNECTIONS
              </div>
              <div
                className="title mt-2"
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-delay="200"
                data-sal-easing="ease"
              >
                How do payments work?
              </div>
              <div
                className="subtitle mt-4"
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                Built on Ethereum, and used with Polygon for cheap and fast
                transactions, the MASQ utility token is earned when you serve
                MBs of Data to other users, and spent when you consume data.
                <br />
                <br />
                MASQ is chain-agnostic, meaning it can in theory be expanded to
                use any blockchain for transactions.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="HopFeature">
        <div className="container">
          <div
            className="row justify-content-center powered-by mb-5"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="0"
            data-sal-easing="ease"
          >
            <div className="col-md-12 col-lg-9 text-center">
              <span className="me-3">PAYMENTS POWERED BY</span>
              <img src={PolygonImg} alt="polygon" />
            </div>
          </div>

          <div
            className="row justify-content-center"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="200"
            data-sal-easing="ease"
          >
            <div className="col-md-12 col-lg-9 text-center">
              <img src={HopsImg} alt="hops" width="80%" />
            </div>
          </div>

          <div
            className="row justify-content-center mt-5"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <div className="col-md-12 col-lg-9">
              <div className="row justify-content-center">
                {Features.map((feature) => (
                  <div
                    key={feature.title}
                    className="col-xs-12 col-sm-6 col-md-4 text-center py-3"
                  >
                    <FeatureBox
                      image={feature.image}
                      title={feature.title}
                      content={feature.content}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="row mt-5"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="600"
            data-sal-easing="ease"
          >
            <div className="col-12 text-center">
              <Link to="/token">
                <Button
                  label="READ ABOUT THE TOKEN"
                  handleClick={handleReadToken}
                  className={"px-4"}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="swaps w-100">
          <AvailableSwapsPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
