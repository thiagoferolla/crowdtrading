import React from "react";
import { ScrollView, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { MainNavigatorScreens } from "../../navigation/types";
import Button from "../../components/Button";
import AssetPrice from "../../components/AssetPrice";
import FundStats from "../../components/FundStats";
import Chart from "./Chart";
import styles from "./styles";
import PortfolioCredits from "../../components/PortfolioCredits";
import FundBreakdown from "../../components/FundBreakdown";

function AssetDetails() {
  const {
    params: { code },
  } =
    useRoute<
      NativeStackScreenProps<MainNavigatorScreens, "AssetDetails">["route"]
    >();

  const navigation =
    useNavigation<
      NativeStackNavigationProp<MainNavigatorScreens, "AssetDetails">
    >();

  if (!code) {
    navigation.goBack();
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <AssetPrice
        date="2022"
        currentPrice="$18.23"
        totalChange="$1.21"
        percentageChange="3.51%"
        percentageDirection="up"
      />

      <Chart />

      <FundStats
        data={[
          {
            title: "AUM",
            value: "$430.88m",
          },
          {
            title: "Issue Date",
            value: "18/04/2022",
          },
          {
            title: "Vintage Range",
            value: "2019-2022",
          },
          {
            title: "TER",
            value: "0.15%",
          },
          {
            title: "Price at Close",
            value: "$17.68",
          },
          {
            title: "Price at Open",
            value: "$17.74",
          },
        ]}
      />

      <FundBreakdown />

      <PortfolioCredits
        percentage="8.41%"
        percentageDirection="up"
        daysSinceLastPurchase={28}
        credits={18}
        totalValue="$328.14"
        retiredCredits={28}
      />

      <View style={styles.priceNoteContainer}>
        <Text style={styles.priceNote}>
          {
            "Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order.\n\nThe information provided is not investment advice, and should not be used as a recommendation to buy or sell assets."
          }
        </Text>
      </View>

      <View style={styles.buyButtonContainer}>
        <Button title="Buy" onPress={() => console.warn("Buy")} />
      </View>
    </ScrollView>
  );
}

export default AssetDetails;
