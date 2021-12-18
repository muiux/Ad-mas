import React from "react";

import ChevDownIcon from "assets/icons/chev-down.svg";
import "./index.scss";

const LangSelector = () => {
  return (
    <div className="LangSelector d-flex justify-content-between align-items-center">
      <span>EN</span>
      <img src={ChevDownIcon} alt="chev-dropdown" />
    </div>
  );
};

export default LangSelector;
