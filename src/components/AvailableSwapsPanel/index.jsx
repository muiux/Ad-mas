import React from "react";
import { Link } from "gatsby";
import { useSelector } from "react-redux";

import { currencyFormatter } from "utils/currency";

import "./index.scss";

const AvailableSwaps = [
  {
    image: require("assets/logos/UniSwap.png").default,
    link: "https://app.uniswap.org/#/swap?outputCurrency=0x06f3c323f0238c72bf35011071f2b5b7f43a054c&use=V2",
  },
  {
    image: require("assets/logos/QuickSwap.png").default,
    link: "https://quickswap.exchange/#/swap?outputCurrency=0xee9a352f6aac4af1a5b9f467f6a93e0ffbe9dd35&use=V2",
  },
  {
    image: require("assets/logos/SushiSwap.png").default,
    link: "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x06F3C323f0238c72BF35011071f2b5B7F43A054c",
  },
  {
    image: require("assets/logos/ProBit.png").default,
    link: "https://www.probit.com/app/exchange/MASQ-ETH",
  },
];

const AvailableSwapsPanel = () => {
  const { marketCap, currentPrice } = useSelector((state) => state.market);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-9">
          <div
            className="AvailableSwapsPanel"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="0"
            data-sal-easing="ease"
          >
            <div className="header d-flex justify-content-between align-items-center text-center">
              <span className="ms-md-3 md-0">
                MASQ UTILITY TOKEN AVAILABLE ON MULTIPLE EXCHANGES
              </span>
              <div className="d-flex flex-sm-row flex-column">
                <div className="badge d-inline-block">
                  MARKET CAP <strong>{currencyFormatter(marketCap)}</strong>
                </div>
                <div className="badge d-inline-block">
                  TOKEN PRICE <strong>{currencyFormatter(currentPrice)}</strong>
                </div>
              </div>
            </div>
            <div className="body d-flex justify-content-center align-items-center flex-wrap">
              {AvailableSwaps.map((swap, i) => (
                <Link key={i} to={swap.link} target="_blank">
                  <img alt="swap" src={swap.image} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AvailableSwapsPanel;
