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

      <Chart 
        chart={[
          {
            date: "2023-01-02",
            close: 107.4,
          },
          {
            date: "2023-01-03",
            close: 105.1,
          },
          {
            date: "2023-01-04",
            close: 106.74,
          },
          {
            date: "2023-01-05",
            close: 108.83,
          },
          {
            date: "2023-01-06",
            close: 110.43,
          },
          {
            date: "2023-01-09",
            close: 110.19,
          },
          {
            date: "2023-01-10",
            close: 112.05,
          },
          {
            date: "2023-01-11",
            close: 114.06,
          },
          {
            date: "2023-01-12",
            close: 113.36,
          },
          {
            date: "2023-01-13",
            close: 112.4,
          },
          {
            date: "2023-01-16",
            close: 110.53,
          },
          {
            date: "2023-01-17",
            close: 113,
          },
          {
            date: "2023-01-18",
            close: 113.47,
          },
          {
            date: "2023-01-19",
            close: 114.08,
          },
          {
            date: "2023-01-20",
            close: 113.48,
          },
          {
            date: "2023-01-23",
            close: 113.17,
          },
          {
            date: "2023-01-24",
            close: 114.59,
          },
          {
            date: "2023-01-25",
            close: 115.86,
          },
          {
            date: "2023-01-26",
            close: 115.73,
          },
          {
            date: "2023-01-27",
            close: 113.5,
          },
          {
            date: "2023-01-30",
            close: 113.83,
          },
          {
            date: "2023-01-31",
            close: 114.65,
          },
          {
            date: "2023-02-01",
            close: 113.32,
          },
          {
            date: "2023-02-02",
            close: 111.3,
          },
          {
            date: "2023-02-03",
            close: 109.64,
          },
        ]}
      />

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
