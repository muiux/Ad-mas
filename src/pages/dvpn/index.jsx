import React from "react";

import Layout from "layouts";
import Hero from "./hero.section";
import SecurityHero from "./security.hero.section";
import SecurityInfo from "./security.info.section";
import "./index.scss";

const Index = () => {
  const handleDownloadApp = () => {
    console.log("handleDownloadApp");
  };

  return (
    <Layout>
      <div className="DVPN">
        <Hero handleDownloadApp={handleDownloadApp} />
        <SecurityHero handleDownloadApp={handleDownloadApp} />
        <SecurityInfo handleDownloadApp={handleDownloadApp} />
      </div>
    </Layout>
  );
};

export default Index;
