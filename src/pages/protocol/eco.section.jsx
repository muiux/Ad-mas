import React from "react";

import { FeatureBox } from "components";
import "./eco.section.scss";

const platform = require("platform");

const Index = () => {
  const EcoFeatures = [
    {
      image: require("assets/icons/poly-desktop.svg").default,
      title: "Cross-Platform App",
      content:
        "Serve and consume data across multiple platforms. We don’t gatekeep earning crypto to more technical users.",
      icons: [
        require("assets/icons/apple.svg").default,
        require("assets/icons/windows.svg").default,
        require("assets/icons/linux.svg").default,
      ],
      link: {
        label: "DOWNLOAD THE APP",
        // url: `/download/${window.platform.os.family.toLocaleLowerCase()}`,
        url: `/download/${platform.os.family.toLocaleLowerCase()}`,
      },
    },
    {
      image: require("assets/icons/poly-command.svg").default,
      title: "Command Line Node",
      content:
        "For the geeks amongst us who want to spin up multiple nodes quickly and start serving across multiple virtual private servers!",
      icons: [
        require("assets/icons/apple.svg").default,
        require("assets/icons/windows.svg").default,
        require("assets/icons/linux.svg").default,
      ],
      link: {
        label: "VIEW OUR GITHUB",
        url: "https://github.com/masq-Project/",
      },
    },
    {
      image: require("assets/icons/poly-store.svg").default,
      title: "dApp Store",
      content:
        "What good is the super secure MASQ Mesh Network without an extensive library of Web 3.0 dApps to explore?\n\nAvailable in the App.",
      icons: [],
      link: {
        label: "DOWNLOAD THE APP",
        // url: `/download/${window.platform.os.family.toLocaleLowerCase()}`,
        url: `/download/${platform.os.family.toLocaleLowerCase()}`,
      },
    },
    {
      image: require("assets/icons/poly-masq.png").default,
      title: "ERC-20 Utility Token",
      content:
        "Users get faster, cheaper micro-transaction for data over the MASQ Network using the Polygon L2 network.",
      icons: [
        require("assets/icons/polygon.svg").default,
        require("assets/icons/ethereum.svg").default,
      ],
      link: {
        label: "MORE ABOUT THE TOKEN",
        url: "/token",
      },
    },
  ];
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
