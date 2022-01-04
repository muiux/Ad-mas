import React from "react";
import cx from "classnames";
import { Link } from "gatsby";

import ArrowRightIcon from "assets/icons/arrow-right.svg";
import "./index.scss";

const Index = ({
  image,
  title,
  content,
  icons = [],
  link = null,
  light = false,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={cx("FeatureBox", "position-relative", { light }, className)}
      style={style}
    >
      <div className="FeatureBox_header p-2 d-flex justify-content-center align-items-center">
        <img src={image} alt="hop" />
      </div>
      <div className="FeatureBox_body py-4 px-3 d-flex flex-column text-center">
        <span className="FeatureBox_body_title">{title}</span>
        <span className="mt-2 FeatureBox_body_content">{content}</span>

        <div className="FeatureBox_body_image">
          {icons.map((icon, index) => (
            <img key={index} src={icon} alt={""} />
          ))}
        </div>

        {link && (
          <div className="FeatureBox_body_link">
            <Link
              to={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              className="d-flex justify-content-center align-items-center"
            >
              <span>{link.label}</span>
              <img className="ms-2" src={ArrowRightIcon} alt={""} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
