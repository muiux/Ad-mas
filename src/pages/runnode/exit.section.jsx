import React from "react";

import "./exit.section.scss";

const Index = () => {
  return (
    <div className="RunANode_exit">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-12 col-md-9 text-center">
            <div
              className="label mb-4"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              INCENTIVIZING HIGH-BANDWIDTH CONNECTIONS
            </div>
            <div
              className="title mb-3"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              What are relay and exit nodes?
            </div>
            <div
              className="subtitle"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              Relay nodes are just ‘hops’ and not final destinations for the
              users request. The exit nodes are the ones that actually fetch the
              data for the user requesting it. Exit nodes are paid more than
              Relay nodes.
              <br /> <br />
              You don’t choose whether to be a relay or exit node, sometimes
              you’ll be a relay, sometimes an exit at any given time for any
              given request!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
