import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { Canvas, Path, Skia, SkPath } from "@shopify/react-native-skia";
import * as d3 from "d3";
import { useMemo } from "react";
import styles from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainNavigatorScreens, TabNavigatorScreens } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

interface ChartPoint {
  date: string;
  close: number;
}

export interface FundCardProps {
  name: string;
  code: string;
  icon: React.ReactNode;
  value: string;
  percentage: string;
  percentageDirection: "up" | "down";
  chartData: Array<ChartPoint>;
}

export default function FundCard(props: FundCardProps) {
  const navigation =
    useNavigation<BottomTabNavigationProp<TabNavigatorScreens>>();

  const iconColor = props.percentageDirection === "up" ? "#0FDF8F" : "#EE8688";
  const iconRotation = props.percentageDirection === "up" ? "-45deg" : "45deg";

  const CHART_HEIGHT = 70;
  const CHART_WIDTH = 100;

  const Touchable = Platform.select({
    ios: TouchableOpacity,
    // @ts-expect-error - TouchableOpacity and TouchableNativeFeedback are compatible for what this component needs
    android: TouchableNativeFeedback,
  });

  const chartPath = useMemo(() => {
    const maxY = Math.max(...props.chartData.map((item) => item.close));
    const minY = Math.min(...props.chartData.map((item) => item.close));

    const maxX = props.chartData[props.chartData.length - 1].date;
    const minX = props.chartData[0].date;

    const y = d3.scaleLinear().domain([minY, maxY]).range([CHART_HEIGHT, 16]);
    const x = d3
      .scaleTime()
      .domain([new Date(minX), new Date(maxX)])
      .range([0, CHART_WIDTH]);

    const curve = d3
      .line<ChartPoint>()
      .x((d) => x(new Date(d.date)))
      .y((d) => y(d.close))
      .curve(d3.curveBasis)(props.chartData) as string;

    const path = Skia.Path.MakeFromSVGString(curve) as SkPath;

    return path;
  }, [props.chartData]);

  return (
    <Touchable
      onPress={() => navigation.navigate("Trade", { code: props.code })}
    >
      <View style={styles.mainContainer}>
        <View style={{}}>
          {props.icon}
          <Text style={styles.fundName}>{props.name}</Text>
        </View>

        <View style={styles.chartContainer}>
          <Canvas style={{ width: CHART_WIDTH, height: CHART_HEIGHT }}>
            <Path
              style="stroke"
              color={iconColor}
              path={chartPath}
              strokeWidth={2}
            />
          </Canvas>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>$1,245.23</Text>
          <View style={styles.percentageContainer}>
            <Ionicons
              name={"arrow-forward"}
              size={18}
              color={iconColor}
              style={{ transform: [{ rotate: iconRotation }] }}
            />
            <Text
              style={[
                styles.percentage,
                {
                  color: iconColor,
                },
              ]}
            >
              31.82%
            </Text>
          </View>
        </View>
      </View>
    </Touchable>
  );
}
