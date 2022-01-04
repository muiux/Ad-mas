import React from "react";

import { FeatureBox, Button } from "components";

import HopsImg from "assets/images/token-illus.png";
import PolygonImg from "assets/logos/polygon-black.svg";
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
  const handleReadTechDetails = () => {};

  return (
    <div className="Protocol_payment">
      <div className="container">
        <div className="row justify-content-center powered-by mb-5">
          <div
            className="col-md-12 col-lg-9 text-center"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="0"
            data-sal-easing="ease"
          >
            <span className="me-3">PAYMENTS POWERED BY</span>
            <img src={PolygonImg} alt="polygon" />
          </div>
        </div>

        <div className="row justify-content-center">
          <div
            className="col-md-12 col-lg-9 text-center"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="0"
            data-sal-easing="ease"
          >
            <img src={HopsImg} alt="hops" width="80%" />
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-12 col-lg-9">
            <div className="row justify-content-center">
              {Features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="col-xs-12 col-sm-6 col-md-4 text-center py-3"
                  data-sal="slide-up"
                  data-sal-duration="2000"
                  data-sal-delay={index * 200}
                  data-sal-easing="ease"
                >
                  <FeatureBox
                    image={feature.image}
                    title={feature.title}
                    content={feature.content}
                    light
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-12 text-center"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="200"
            data-sal-easing="ease"
          >
            <Button
              label="READ THE TECHNICAL DETAILS"
              handleClick={handleReadTechDetails}
              className={"px-4"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
