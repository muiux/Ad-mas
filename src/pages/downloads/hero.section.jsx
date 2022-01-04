import React from "react";
import { Link } from "gatsby";

import { Button } from "components";
import BookIcon from "assets/icons/book.svg";
import CircleCheckIcon from "assets/icons/circle-check.svg";
import GithubLogo from "assets/logos/github-light.png";
import "./hero.section.scss";

const Index = () => {
  const handleReadDocs = () => {};
  const handleDownload = () => {};

  return (
    <div className="Downloads_hero">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center text-sm-start">
            <div className="title mb-4">
              Download MASQ.
              <br />
              <span className="info">
                Let’s change the course of the web forever.
              </span>
            </div>
            <div className="action d-flex align-items-center flex-column flex-sm-row justify-content-center justify-content-sm-start">
              <Button
                preIcon={BookIcon}
                label={"READ THE DOCS"}
                className="me-0 me-sm-4 mb-3 mb-sm-5"
                handleClick={handleReadDocs}
              />
              <Button
                label={"DOWNLOAD THE NODE APP"}
                fill={false}
                className="me-0 me-sm-4 mb-3 mb-sm-5"
                handleClick={handleDownload}
              />
            </div>
            <div className="checkout align-items-center">
              <img src={CircleCheckIcon} alt="circle check icon" />
              <span className="mx-2">WE’RE OPEN SOURCE! CHECK US OUT ON</span>
              <Link to="https://github.com/masq-Project">
                <img src={GithubLogo} alt="github logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
