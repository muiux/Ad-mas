import React from "react";

import { InfoBox } from "components";
import "./info.section.scss";

const Infos = [
  {
    image: require("assets/icons/global.svg").default,
    title: "Serve data, be rewarded",
    content:
      "When you serve data to others using the MASQ node, you act as a relay or an exit node, providing content that other users request. Get paid in MASQ tokens!",
  },
  {
    image: require("assets/icons/security.svg").default,
    title: "Decentralize the Web",
    content:
      "The more countries that participate in running nodes, the more decentralized and diverse the MASQ network becomes.",
  },
  {
    image: require("assets/icons/graph.svg").default,
    title: "Faster upload, more earnings",
    content:
      "The faster your upload speed, the more MASQ tokens you could earn. Some users upload speeds may not be fast enough to run a node with MASQ.",
  },
];

const Index = () => {
  return (
    <div className="RunANode_info">
      <div className="container">
        <div className="row">
          {Infos.map((info, index) => (
            <div
              className="col-xs-12 col-sm-6 col-md-4 mb-4"
              key={info.title}
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay={0 + 200 * index}
              data-sal-easing="ease"
            >
              <InfoBox {...info} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
