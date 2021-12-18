import React from "react";

import Particles from "react-tsparticles";
import Button from "components/Button";
import DashboardImg from "assets/images/heroimage.png";
import CircleDownIcon from "assets/icons/circle-down.svg";
import "./hero.section.scss";

const particlesInit = (main) => {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {
  console.log(container);
};

const Index = ({ handleDownloadApp }) => (
  <div>
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      background: {
        color: {
          value: "#000C10",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          grab: {
            distance: 60,
            duration: 0.4,
            opacity: 0.1,
            size: 20,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#0085FF",
        },
        links: {
          color: "#0085FF",
          distance: 80,
          enable: false,
          opacity: 0.3,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
          random: true
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 1,
        },
      },
      detectRetina: true,
    }}
  />
    <div className="DVPN_Hero">
      <div className="container">
        <div className="hero-elements">
          <div className="row flex-column text-center">
            <h1 className="title">The dVPN Web3 Browser.</h1>
            <span className="title grad">The decentralized internet awaits.</span>
            <span className="subTitle mt-3">
              MASQ is an open source decentralized VPN, browser, protocol and
              cryptocurrency that privatizes
              <br />
              your online life, and creates a uncensored, global internet – free
              from censorship.
            </span>
          </div>

          <div className="row flex-column align-items-center text-center mt-5">
            <Button
              preIcon={CircleDownIcon}
              label="DOWNLOAD MASQ DVPN BROWSER"
              handleClick={handleDownloadApp}
            />
            <span className="tip mt-3">For Mac OS X 10.11 or later.</span>
          </div>

          <div className="row align-items-center justify-content-center crypto-badges">
            <div className="badge d-inline-block">
              MARKET CAP <strong>$9.23M</strong>
            </div>
            <div className="badge d-inline-block">
              TOKEN PRICE <strong>$1.28</strong>
            </div>
            <div className="badge d-inline-block">
              MAX SUPPLY <strong>$37.5M</strong>
            </div>
          </div>
        </div>
        <div className="dashboard">
          <img src={DashboardImg} alt="dashboard" />
        </div>
      </div>

    </div>
  </div>
);

export default Index;
