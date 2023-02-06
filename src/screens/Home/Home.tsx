import React from "react";
import { ScrollView, View } from "react-native";
import PortfolioBalance from "../../components/PortfolioBalance";
import CarbonCreditTipCard from "../../components/TipCard";
import FundList from "./FundList";
import HintList from "./HintList";

function Home() {
  return (
    <ScrollView
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <PortfolioBalance />

      <FundList />

      <View style={{ paddingHorizontal: 20 }}>
        <CarbonCreditTipCard />
      </View>

      <HintList />
    </ScrollView>
  );
}

export default Home;
