import React from "react";

import Layout from "layouts";
import Hero from "./hero.section";
import Info from "./info.section";
import Transaction from "./transaction.section";
import Payment from "../protocol/payment.section";
import Wallet from "./wallet.section";
import Tokenomic from "./tokenomic.section";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Info />
      <Transaction />
      <Payment />
      <Wallet />
      <Tokenomic />
    </Layout>
  );
};

export default Index;
