import React from "react";
import { ScrollView, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  MainNavigatorScreens,
  TabNavigatorScreens,
} from "../../navigation/types";
import Button from "../../components/Button";
import AssetPrice from "../../components/AssetPrice";
import FundStats from "../../components/FundStats";
import Chart from "./Chart";
import styles from "./styles";
import PortfolioCredits from "../../components/PortfolioCredits";
import FundBreakdown from "../../components/FundBreakdown";
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configure";

function AssetDetails() {
  const { params: { code } = {} } =
    useRoute<BottomTabScreenProps<TabNavigatorScreens, "Trade">["route"]>();

  const navigation =
    useNavigation<BottomTabNavigationProp<TabNavigatorScreens, "Trade">>();

  const fund = useSelector(
    (state: RootState) => state.funds.funds.find((f) => f.code === code)!
  );

  if (!fund) {
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
        currentPrice={fund.value.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
        totalChange={fund.changeValue.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
        percentageChange={fund?.changePercentage.toFixed(2) + "%"}
        percentageDirection={(fund?.changeValue || 0) > 0 ? "up" : "down"}
      />

      <Chart chart={fund.chartData} />

      <FundStats data={fund.stats} />

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
