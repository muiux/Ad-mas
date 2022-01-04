import React from "react";
import { Link } from "gatsby";

import { Button } from "components";
import StoreIcon from "assets/icons/store.svg";
import BookIcon from "assets/icons/book.svg";
import CircleDownIcon from "assets/icons/circle-down.svg";
import NetworkIllusImg from "assets/images/NetworkIllus.png";
import GlobalMapImg from "assets/images/map.svg";
import ServingTabImg from "assets/images/ServingTab.png";

import "./faq.section.scss";

const Index = () => {
  const handleReadNetworkDynamics = () => {};
  const handleDownload = () => {};
  const handleLearnMore = () => {};

  return (
    <div className="Protocol_faq text-center text-sm-start">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xs-12 col-sm-6 col-lg-7 order-1 order-sm-0">
            <img src={NetworkIllusImg} alt="network illus" width="100%" />
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-5">
            <div
              className="label"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              UNIQUE – UNLIKE ANY OTHER NETWORKING PROTOCOL
            </div>
            <div
              className="title mt-3"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              How does MASQ Network actually work?
            </div>
            <div
              className="subtitle mt-4"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="400"
              data-sal-easing="ease"
            >{`The MASQ Network is a decentralized mesh network (dMN) made up of nodes and groups of nodes called 'neighborhoods.'\n\nIn simple terms, a user runs the MASQ Node software and their requests for content online are packaged into CORES Packages of data, and these are routed across other users nodes in the network.\n\nBy using a minimum of 3 node 'hops', the content request is retrieved from locations where it is available to other nodes. Nodes don’t necessarily take the same route each time for traffic, and the network self-heals if nodes go offline and leave the network.\n\nAdditionally the packages are not able to be checked to see where the data started from, or where the end destination is if it is intercepted or snooped by other parties.`}</div>
            <div
              className="mt-5"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              <Button
                preIcon={BookIcon}
                label="READ MORE ABOUT NETWORK DYNAMICS"
                handleClick={handleReadNetworkDynamics}
              />
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-xs-12 col-sm-6 col-lg-5 order-1 order-sm-0">
            <img src={GlobalMapImg} alt="map" width="100%" />
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-7">
            <div
              className="label"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              REAL WORLD EFFECT ON FREEDOM AND CENSORSHIP
            </div>
            <div
              className="title mt-3"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              What makes MASQ the global decentralized internet?
            </div>
            <div
              className="subtitle mt-4"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              {`In simple terms, the MASQ network is effectively a pool of all users Internet Service Providers connections from all over planet earth, available to everybody with MASQ tokens.\n\nWhenever content is requested by a user, the MASQ network won’t stop until it’s found the content, going to all countries and ISPs necessary until it’s found. That’s the internet as it was intended. Global, private, and uncensored.`}
            </div>
            <div
              className="mt-5"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={`/download/${window.platform.os.family.toLocaleLowerCase()}`}
              >
                <Button
                  preIcon={CircleDownIcon}
                  label="DOWNLOAD MASQ DVPN BROWSER"
                  handleClick={handleDownload}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-xs-12 col-sm-6 col-lg-7">
            <div
              className="label"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              NETWORK SCALING BY LEVERAGING RESIDENTIAL BANDWIDTH
            </div>
            <div
              className="title mt-3"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              How do users serve data to others, and request data from others?
            </div>
            <div
              className="subtitle mt-4"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              {`Both serving and consuming are supported by default in our CLIs and Apps. All you need to do to serve data, is toggle the switch on the serving panel to ‘on’, and make sure your port for serving is forwarded.\n\nThere will be bandwidth requirements to serve, but making it accessible regardless of technical knowledge is paramount to the success of the network and something we continue to strive for.`}
            </div>
            <div
              className="mt-5"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              <Link to="/runnode">
                <Button
                  preIcon={StoreIcon}
                  label="LEARN MORE ABOUT RUNNING A NODE"
                  handleClick={handleLearnMore}
                />
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-5">
            <img src={ServingTabImg} alt="serving tab" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
