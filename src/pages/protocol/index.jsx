import React from "react";

import Layout from "layouts";
import Hero from "./hero.section";
import EcoSystem from "./eco.section";
import Faq from "./faq.section";
import Token from "./token.section";
import Payment from "./payment.section";
import Plugin from "./plugin.section";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <EcoSystem />
      <Faq />
      <Token />
      <Payment />
      <Plugin />
    </Layout>
  );
};

export default Index;
