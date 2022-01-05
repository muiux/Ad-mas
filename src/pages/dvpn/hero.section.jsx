import React from "react";
import { useSelector } from "react-redux";
import Particles from "react-tsparticles";

import Button from "components/Button";
import { currencyFormatter } from "utils/currency";
import DashboardImg from "assets/images/dvpnheroimage.webp";
import CircleDownIcon from "assets/icons/circle-down.svg";
import "./hero.section.scss";

const platform = require("platform");

const particlesInit = (main) => {
  // console.log(main);
  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {
  // console.log(container);
};

const Index = () => {
  const { marketCap, currentPrice, maxSupply } = useSelector(
    (state) => state.market
  );

  const handleDownloadApp = () => {};

  return (
    <div className="position-relative">
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
              random: true,
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
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-9 d-flex flex-column text-center">
                <h1
                  className="title"
                  data-sal="slide-up"
                  data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
                  data-sal-delay="0" // adds delay to the animation (from 5 to 1000 ms)
                  data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
                >
                  The dVPN Web3 Browser.
                </h1>
                <span
                  className="title grad"
                  data-sal="slide-up"
                  data-sal-duration="2000"
                  data-sal-delay="200"
                  data-sal-easing="ease"
                >
                  The internet as it was intended.
                </span>
                <span
                  className="subTitle mt-3"
                  data-sal="slide-up"
                  data-sal-duration="2000"
                  data-sal-delay="400"
                  data-sal-easing="ease"
                >
                  MASQ is an open source decentralized VPN, browser, protocol
                  and cryptocurrency that privatizes your online life, and
                  creates a uncensored, global internet – free from censorship.
                </span>
              </div>
            </div>

            <div
              className="row flex-column align-items-center text-center mt-5"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              <a
                className="w-auto"
                target="_blank"
                rel="noreferrer"
                // href={`/download/${window.platform.os.family.toLocaleLowerCase()}`}
                href={`/download/${platform.os.family.toLocaleLowerCase()}`}
              >
                <Button
                  preIcon={CircleDownIcon}
                  label="DOWNLOAD MASQ DVPN BROWSER"
                  handleClick={handleDownloadApp}
                />
              </a>
              <span className="tip mt-3">
                {/* For {window.platform.os.toString()} or later. */}
                For {platform.os.toString()} or later.
              </span>
            </div>

            <div
              className="row align-items-center justify-content-center crypto-badges"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="800"
              data-sal-easing="ease"
            >
              <div className="badge d-inline-block">
                MARKET CAP <strong>{currencyFormatter(marketCap)}</strong>
              </div>
              <div className="badge d-inline-block">
                TOKEN PRICE <strong>{currencyFormatter(currentPrice)}</strong>
              </div>
              <div className="badge d-inline-block">
                MAX SUPPLY{" "}
                <strong>{currencyFormatter(maxSupply, "decimal")}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard">
          <img src={DashboardImg} alt="dashboard" />
        </div>
      </div>
    </div>
  );
};

export default Index;
