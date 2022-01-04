import React from "react";
import { Link } from "gatsby";

import { FeatureBox } from "components";
import { EcoFeatures } from "config/constants";
import CircleCheckIcon from "assets/icons/circle-check.svg";
import GithubLogo from "assets/logos/github.png";
import "./eco.section.scss";

const Index = () => {
  return (
    <div className="DVPN_EcoSystem text-center text-sm-start">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="label"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              A NEXT-GEN OPEN SOURCE DECENTRALIZED ECOSYSTEM
            </div>
            <div
              className="title mt-2"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              A complete ecosystem for internet freedom
            </div>
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          {EcoFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="col-xs-12 col-sm-6 col-md-4 col-lg-3 py-3"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay={index * 200}
              data-sal-easing="ease"
            >
              <FeatureBox
                title={feature.title}
                content={feature.content}
                image={feature.image}
                icons={feature.icons}
                link={feature.link}
                light
                style={{ paddingBottom: "75px" }}
              />
            </div>
          ))}
        </div>

        <div
          className="row mt-5"
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-delay="600"
          data-sal-easing="ease"
        >
          <div className="col-12 align-items-center tip">
            <img src={CircleCheckIcon} alt="circle check icon" />
            <span className="mx-2">WE’RE OPEN SOURCE! CHECK US OUT ON</span>
            <Link to="https://github.com/masq-Project" target={"_blank"}>
              <img src={GithubLogo} alt="github logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
