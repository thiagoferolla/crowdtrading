import { View, Text, ScrollView } from "react-native";
import FundCard, { FundCardProps } from "../../components/FundCard/FundCard";
import NaturalIcon from "../../components/FundCard/mock_icons/natural";
import SolarIcon from "../../components/FundCard/mock_icons/solar";
import WindIcon from "../../components/FundCard/mock_icons/wind";
import styles from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configure";

export default function FundList() {
  const fundState = useSelector((state: RootState) => state.funds.funds);

  const funds: FundCardProps[] = fundState.map((s) => ({
    name: s.name,
    code: s.code,
    icon: s.icon,
    value: s.value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }),
    percentage: s.changePercentage.toFixed(2) + "%",
    percentageDirection: s.changeValue > 0 ? "up" : "down",
    chartData: s.chartData,
  }));

  return (
    <View>
      <Text style={styles.fundsListTitle}>Funds</Text>

      <ScrollView horizontal>
        <View style={{ width: 20 }} />

        {funds.map((f) => (
          <FundCard key={f.code} {...f} />
        ))}

        <View style={{ width: 5 }} />
      </ScrollView>
    </View>
  );
}
