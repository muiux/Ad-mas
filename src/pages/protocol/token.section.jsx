import React from "react";

import "./token.section.scss";

const Index = () => {
  return (
    <div className="Protocol_token text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 text-center">
            <div
              className="label"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              MASQ UTILITY TOKEN USAGE IN THE NETWORK
            </div>
            <div
              className="title mt-2"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              Incentivizing high-bandwidth connections
            </div>
            <div
              className="subtitle mt-4"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              Built on Ethereum, and used with Polygon for cheap and fast
              transactions, the MASQ token is earned when you serve MBs of Data
              to other users, and spent when you consume data.
              <br />
              <br />
              MASQ is chain-agnostic, meaning it can in theory be expanded to
              use any blockchain for transactions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
