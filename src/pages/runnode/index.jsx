import React from "react";

import Layout from "layouts";
import Hero from "./hero.section";
import Info from "./info.section";
import EcoSystem from "./eco.section";
import Serve from "./serve.section";
import Exit from "./exit.section";
import Token from "./token.section";

const Index = () => {
  return (
    <Layout>
      <div className="RunANode">
        <Hero />
        <Info />
        <EcoSystem />
        <Serve />
        <Exit />
        <Token />
      </div>
    </Layout>
  );
};

export default Index;
