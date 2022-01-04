import React from "react";

import "./index.scss";

const Index = ({ image, title, content }) => {
  return (
    <div className="InfoBox h-100 text-start">
      <div className="d-flex align-items-center">
        <div className="me-3 InfoBox InfoBox_preIcon d-flex justify-content-center align-items-center p-0">
          <img src={image} alt="pre icon" />
        </div>
        <div className="InfoBox_title">{title}</div>
      </div>
      <div className="InfoBox_content mt-3">{content}</div>
    </div>
  );
};

export default Index;
