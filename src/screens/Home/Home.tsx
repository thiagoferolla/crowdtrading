import React from "react";
import { ScrollView } from "react-native";
import CarbonCreditTipCard from "../../components/TipCard";
import Balance from "./Balance";
import FundList from "./FundList";
import HintList from "./HintList";

function Home() {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 20,
      }}
    >
      <Balance />

      <FundList />

      <CarbonCreditTipCard />

      <HintList />
    </ScrollView>
  );
}

export default Home;
