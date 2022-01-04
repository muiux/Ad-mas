import React from "react";

import MarketService from "./market.service";

const ServiceWrapper = ({ children }) => (
  <div>
    {children}
    <MarketService />
  </div>
);

export default ServiceWrapper;
