import React from "react";
import { ScrollView, View } from "react-native";
import HomeHeader from "../../components/HomeHeader";
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
      <HomeHeader />

      <View style={{ marginTop: 20 }}>
        <FundList />
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <CarbonCreditTipCard />
      </View>

      <View style={{ marginTop: 20 }}>
        <HintList />
      </View>
    </ScrollView>
  );
}

export default Home;
