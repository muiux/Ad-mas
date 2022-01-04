import React from "react";
import cx from "classnames";

import "./index.scss";

const DAppBox = ({ preIcon = null, label = "Button", className = "" }) => {
  return (
    <div
      className={cx(
        "DAppBox",
        "d-inline-flex",
        "align-items-center",
        className
      )}
    >
      {preIcon && (
        <img
          className="DAppBox_pre me-2 me-sm-3"
          src={preIcon}
          alt="button icon"
        />
      )}
      <div className="DAppBox_label">{label.toUpperCase()}</div>
    </div>
  );
};

export default DAppBox;
