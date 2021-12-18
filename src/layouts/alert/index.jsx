import React from "react";

import LockIcon from "assets/icons/lock.svg";
import "./index.scss";

const Alert = () => (
  <div className="w-100 d-flex justify-content-center align-items-center Layout_Alert">
    <div className="d-flex align-items-center">
      <img src={LockIcon} alt="lock" />
      <span className="ms-2">
        YOU ARE CURRENTLY PROTECTED BY THE MASQ MESH NETWORK
      </span>
    </div>
  </div>
);

export default Alert;
