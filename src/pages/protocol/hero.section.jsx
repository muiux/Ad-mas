import React from "react";
import { Link } from "gatsby";

import { Button, InfoBox } from "components";
import BookIcon from "assets/icons/book.svg";
import CircleCheckIcon from "assets/icons/circle-check.svg";
import GithubLogo from "assets/logos/github-light.png";

import "./hero.section.scss";

const Infos = [
  {
    image: require("assets/icons/global.svg").default,
    title: "Multi-hop networking, fast.",
    content:
      "The MASQ CORES Routing Protocol means that routing data requests are fast, efficient, and entirely secure. Users can choose their hop count.",
  },
  {
    image: require("assets/icons/security.svg").default,
    title: "Packet Masqerading",
    content:
      "MASQ Packets will be masqueraded – meaning even if they could be unencrypted, the data found inside will be a misrepresentation of what it actually is.",
  },
  {
    image: require("assets/icons/graph.svg").default,
    title: "High bandwidth, Incentivised",
    content:
      "High bandwidth is incentivized with Cryptocurrency payments being awarded more frequently to high bandwidth nodes.",
  },
];

const Index = () => {
  const handleReadDocs = () => {};
  const handleReadWhitePaper = () => {};

  return (
    <div className="Protocol_Hero">
      <div className="container text-center text-sm-start">
        <div className="row">
          <div className="col-12">
            <div
              className="title"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              A protocol to break virtual barriers.
              <br />
              <span className="active">A network to free the world.</span>
            </div>
          </div>
          <div
            className="col-12 mt-5 d-flex flex-wrap justify-content-center justify-content-sm-start"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="200"
            data-sal-easing="ease"
          >
            <Link to="http://docs.masq.ai/" target="_blank">
              <Button
                preIcon={BookIcon}
                label={"READ THE DOCS"}
                className="me-0 me-sm-3 mb-4"
                handleClick={handleReadDocs}
              />
            </Link>
            <Button
              label={"READ THE WHITEPAPER"}
              fill={false}
              className="me-0 me-sm-3 mb-4"
              handleClick={handleReadWhitePaper}
            />
          </div>
          <div
            className="col-12 mt-2"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <div className="align-items-center git-tip">
              <img src={CircleCheckIcon} alt="circle check icon" />
              <span className="mx-2">WE’RE OPEN SOURCE! CHECK US OUT ON</span>
              <Link to="https://github.com/masq-Project" target={"_blank"}>
                <img src={GithubLogo} alt="github logo" height={"40px"} />
              </Link>
            </div>
          </div>
        </div>

        <div className="row Infos">
          {Infos.map((info, index) => (
            <div
              className="col-xs-12 col-sm-6 col-md-4 mb-4"
              key={info.title}
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay={0 + index * 200}
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
