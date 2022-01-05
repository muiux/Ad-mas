import React from "react";

import { Button } from "components";
import CircleDownIcon from "assets/icons/circle-down.svg";
import "./serve.section.scss";

const platform = require("platform");

const renderer = (label, title, subtitle, action, image) => {
  const handleClick = () => {};
  return (
    <div
      key={title}
      className="row align-items-stretch renderer text-center text-sm-start"
    >
      <div className="col-xs-12 col-sm-8 h-100 d-flex flex-column justify-content-center pe-2 pe-sm-5">
        <div
          className="label mb-3"
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-delay="0"
          data-sal-easing="ease"
        >
          {label}
        </div>
        <div
          className="title mb-4"
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-delay="200"
          data-sal-easing="ease"
        >
          {title}
        </div>
        <div
          className="subtitle mb-5"
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-delay="400"
          data-sal-easing="ease"
        >
          {subtitle}
        </div>
        <div
          className="action mb-4 mb-sm-0"
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-delay="600"
          data-sal-easing="ease"
        >
          <a
            target="_blank"
            rel="noreferrer"
            // href={`/download/${window.platform.os.family.toLocaleLowerCase()}`}
            href={`/download/${platform.os.family.toLocaleLowerCase()}`}
          >
            <Button
              preIcon={action.preIcon}
              label={action.label}
              onClick={handleClick}
            />
          </a>
          <div className="tip mt-2">{action.tip}</div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-4 h-100 right-fluid">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

const Index = () => {
  const data = [
    {
      label: "SERVE TO OTHERS FAST FOR BIGGER REWARDS",
      title: "The faster your upload speed, the more MASQ you could earn",
      subtitle:
        "Each users node has a reputation on the network, the faster you serve data to others, the higher your reputation. Node reputation is also effected by how long you keep it running for. The MASQ network favours nodes with near-constant uptime.",
      action: {
        preIcon: CircleDownIcon,
        label: "DOWNLOAD MASQ DVPN BROWSER",
        // tip: `For ${window.platform.os.toString()} or later.`,
        tip: `For ${platform.os.toString()} or later.`,
      },
      image: require("assets/images/radial-serve.png").default,
    },
    {
      label: "KEEPING THE COMMUNITY SAFE AND SECURE",
      title:
        "If 1,000,000’s of us share our Internet, the Internet will be global forever.",
      subtitle: `This is about more than just earning cryptocurrency. This is about changing the landscape of the internet forever, making sure that wherever someone is in the world, they have access to all content available globally in the most private way that we know how. \n\nIt all starts with you. Choose a DNS provider and choose what you serve others!`,
      action: {
        preIcon: CircleDownIcon,
        label: "DOWNLOAD MASQ DVPN BROWSER",
        // tip: `For ${window.platform.os.toString()} or later.`,
        tip: `For ${platform.os.toString()} or later.`,
      },
      image: require("assets/images/app-dashboard-consuming.png").default,
    },
    {
      label: "KEEPING THE COMMUNITY SAFE AND SECURE",
      title:
        "Run node on the command line – Spin up 100’s of instances on Virtual Private Servers",
      subtitle:
        "More of the technical type? You can run MASQ on the command line and spin up node instances across multiple virtual private servers – The more public IPs you have running a MASQ node, the more you could earn in MASQ Utility Tokens!",
      action: {
        preIcon: null,
        label: "RUN A COMMAND LINE NODE",
        tip: null,
      },
      image: require("assets/images/Terminal.png").default,
    },
  ];
  return (
    <div className="RunANode_serve">
      <div className="container">
        {data.map((item) => {
          return renderer(
            item.label,
            item.title,
            item.subtitle,
            item.action,
            item.image
          );
        })}
      </div>
    </div>
  );
};

export default Index;
