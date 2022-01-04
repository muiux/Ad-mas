import React from "react";

import { FeatureBox } from "components";
import { EcoFeatures } from "config/constants";
import "./eco.section.scss";

const Index = () => {
  return (
    <div className="Protocol_EcoSystem text-center text-sm-start">
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
              THE MISSION – LET’S CREATE THE BORDERLESS WEB TOGETHER
            </div>
            <div
              className="title mt-2"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              The complete ecosystem for internet freedom
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
                style={{ paddingBottom: "75px" }}
                light
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
