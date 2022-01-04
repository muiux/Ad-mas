import React from "react";

import { Link } from "gatsby";

import Button from "components/Button";
import BookIcon from "assets/icons/book.svg";
import CircleCheckIcon from "assets/icons/circle-check.svg";
import GithubLogo from "assets/logos/github-light.png";
import "./hero.section.scss";

const Index = () => {
  const handleRead = () => {};
  const handleDownloadNodeApp = () => {};

  return (
    <div className="RunANode_hero">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-9 offset-lg-3 text-center text-sm-start">
            <div
              className="badge mb-3"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              MAINNET COMING SOON
            </div>
            <div
              className="title"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              Share your internet connection.
              <br />
              <span className="blue">Earn </span>
              <span className="yellow">crypto</span>
              <span className="blue"> while you sleep.</span>
            </div>
            <div
              className="action d-flex flex-wrap mt-4 justify-content-center justify-content-sm-start"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              <Link to="http://docs.masq.ai/" target={"_blank"}>
                <Button
                  preIcon={BookIcon}
                  label="READ THE NODE DOCS"
                  handleClick={handleRead}
                  className="me-0 me-sm-4 my-2"
                />
              </Link>
              <a
                target="_blank"
                rel="noreferrer"
                href={`/download/${window.platform.os.family.toLocaleLowerCase()}`}
              >
                <Button
                  label="DOWNLOAD THE NODE APP"
                  handleClick={handleDownloadNodeApp}
                  fill={false}
                  className="my-2"
                />
              </a>
            </div>

            <div
              className="mt-4 align-items-center tip"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              <img src={CircleCheckIcon} alt="circle check icon" />
              <span className="mx-2">WE’RE OPEN SOURCE! CHECK US OUT ON</span>
              <Link to="https://github.com/masq-Project" target="_blank">
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
