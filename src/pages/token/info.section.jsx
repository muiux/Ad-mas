import React from "react";

import { InfoBox } from "components";
import "./info.section.scss";

const Infos = [
  {
    image: require("assets/icons/global.svg").default,
    title: "Available on CEXs and DEXs",
    content:
      "We’ve made sure that the MASQ token is available on Ethereum as well as Polygon. Polygon is better for using MASQ with it’s cheaper transaction costs.",
  },
  {
    image: require("assets/icons/security.svg").default,
    title: "On Polygon L2 & Ethereum",
    content:
      "The more countries participate in running nodes, the more decentralized and diverse the MASQ network becomes. Let’s decentralize the internet forever!",
  },
  {
    image: require("assets/icons/graph.svg").default,
    title: "Proxy-Audited Smart Contract",
    content: "Our Smart Contract uses the same code.",
  },
];

const Index = () => {
  return (
    <div className="Token_info">
      <div className="container">
        <div className="row">
          {Infos.map((info, i) => (
            <div
              className="col-xs-12 col-sm-6 col-md-4 mb-4"
              key={info.title}
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay={i * 200}
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
