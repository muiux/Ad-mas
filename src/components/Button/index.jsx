import React from "react";
import cx from "classnames";

import "./index.scss";

const Button = ({
  preIcon = null,
  label = "Button",
  fill = true,
  className = "",
  handleClick,
}) => {
  return (
    <button
      className={cx("Button", "d-inline-flex", "align-items-center", className, {
        fill,
      })}
      onClick={handleClick}
    >
      {preIcon && <img className="me-3" src={preIcon} alt="button icon" />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
