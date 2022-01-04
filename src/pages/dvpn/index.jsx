import React from "react";

import Layout from "layouts";
import Hero from "./hero.section";
import SecurityHero from "./security.hero.section";
import SecurityInfo from "./security.info.section";
import DApp from "./dApp.section";
import Payment from "./payment.section";
import EcoSystem from "./eco.section";
import Mission from "./mission.section";
import "./index.scss";

const Index = () => {
  return (
    <Layout>
      <div className="DVPN">
        <Hero />
        <SecurityHero />
        <SecurityInfo />
        <DApp />
        <Payment />
        <EcoSystem />
        <Mission />
      </div>
    </Layout>
  );
};

export default Index;
