import React from "react";
import { Link } from "gatsby";
import { useSelector } from "react-redux";

import { Button } from "components";
import { currencyFormatter } from "utils/currency";
import QuickSwapLogo from "assets/logos/swaps/quickswap.png";
import UniSwapLogo from "assets/logos/swaps/uniswap.png";
import "./hero.section.scss";

const Index = () => {
  const { marketCap, currentPrice, maxSupply } = useSelector(
    (state) => state.market
  );

  const handleBuyOnQuickSwap = () => {};

  const handleBuyOnUniSwap = () => {};

  return (
    <div className="Token_hero">
      <div className="container">
        <div className="row text-center text-sm-start">
          <div className="col-xs-12 col-md-9 hero-text">
            <div
              className="title mb-5"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              The <span className="success">fuel</span> of the network.
              <br />
              <span className="info">The MASQ Token on Polygon.</span>
            </div>
            <div
              className="cta"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              <Link
                to="https://quickswap.exchange/#/swap?outputCurrency=0xee9a352f6aac4af1a5b9f467f6a93e0ffbe9dd35&use=V2"
                target={"_blank"}
              >
                <Button
                  className="me-0 me-sm-4 mb-4"
                  preIcon={QuickSwapLogo}
                  label="BUY MASQ ON QUICKSWAP (POLYGON)"
                  handleClick={handleBuyOnQuickSwap}
                />
              </Link>
              <Link
                to="https://app.uniswap.org/#/swap?outputCurrency=0x06f3c323f0238c72bf35011071f2b5b7f43a054c&use=V2"
                target={"_blank"}
              >
                <Button
                  fill={false}
                  className="mb-4"
                  preIcon={UniSwapLogo}
                  label="BUY MASQ ON UNISWAP (ETH)"
                  handleClick={handleBuyOnUniSwap}
                />
              </Link>
            </div>
            <div
              className="market"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              <div className="market-badge d-inline-block ms-0">
                MARKET CAP <strong>{currencyFormatter(marketCap)}</strong>
              </div>
              <div className="market-badge d-inline-block">
                TOKEN PRICE <strong>{currencyFormatter(currentPrice)}</strong>
              </div>
              <div className="market-badge d-inline-block">
                MAX SUPPLY{" "}
                <strong>{currencyFormatter(maxSupply, "decimal")}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
