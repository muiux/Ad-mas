import React from "react";

import "./transaction.section.scss";

const Index = () => {
  return (
    <div className="Token_transaction">
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
              className="title mb-4"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              How transactions work
            </div>
            <div
              className="subtitle"
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
