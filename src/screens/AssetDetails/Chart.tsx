import { useMemo, useState } from "react";
import {
  Dimensions,
  View,
  Text as RNText,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import * as d3 from "d3";
import {
  Canvas,
  Path,
  Skia,
  SkPath,
  Text,
  useFont,
  Paint,
} from "@shopify/react-native-skia";
import styles from "./styles";

type ChartPoint = {
  date: string;
  close: number;
};

interface ChartProps {
  chart: ChartPoint[];
}

function Chart(props: ChartProps) {
  const { width } = Dimensions.get("screen");

  const font = useFont(
    require("../../../node_modules/@expo-google-fonts/sora/Sora_500Medium.ttf"),
    14
  );

  const CHART_WIDTH = width;
  const CHART_HEIGHT = 180;

  const chartOptions = ["1h", "1d", "1w", "1m", "1y", "All"];

  const [selectedOption, setSelectedOption] = useState(chartOptions[0]);

  const {
    path,
    color: chartPath,
    maxY,
    minY,
    minYIndex,
    maxYIndex,
  } = useMemo(() => {
    const maxY = Math.max(...props.chart.map((item) => item.close));
    const minY = Math.min(...props.chart.map((item) => item.close));

    const maxX = props.chart[props.chart.length - 1].date;
    const minX = props.chart[0].date;

    const minYIndex = props.chart.findIndex((c) => c.close === minY);
    const maxYIndex = props.chart.findIndex((c) => c.close === maxY);

    const y = d3.scaleLinear().domain([minY, maxY]).range([CHART_HEIGHT, 30]);
    const x = d3
      .scaleTime()
      .domain([new Date(minX), new Date(maxX)])
      .range([0, CHART_WIDTH]);

    const curve = d3
      .line<ChartPoint>()
      .x((d) => x(new Date(d.date)))
      .y((d) => y(d.close))
      .curve(d3.curveLinear)(props.chart) as string;

    const path = Skia.Path.MakeFromSVGString(curve) as SkPath;

    const color =
      props.chart[props.chart.length - 1].close > props.chart[0].close
        ? "#0FDF8F"
        : "#EE8688";

    return { color, path, maxY, minY, minYIndex, maxYIndex };
  }, [props.chart]);

  if (!font) {
    return null;
  }

  return (
    <View style={{ width: width, height: 280 }}>
      <Canvas style={{ width: CHART_WIDTH, height: CHART_HEIGHT + 30 }}>
        <Text
          text={maxY.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
          font={font}
          y={14}
          x={((width - 16) / props.chart.length) * maxYIndex}
        >
          <Paint color={"#A0A0A0"} />
        </Text>

        <Text
          text={minY.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
          font={font}
          y={CHART_HEIGHT + 30}
          x={(width / props.chart.length) * minYIndex}
        >
          <Paint color={"#A0A0A0"} />
        </Text>
        <Path style="stroke" color={chartPath} path={path} strokeWidth={2} />
      </Canvas>

      <View style={styles.chartOptionsContainer}>
        {chartOptions.map((c) => (
          <TouchableOpacity
            key={c}
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
              );
              setSelectedOption(c);
            }}
          >
            <View
              style={[
                styles.chartOption,
                {
                  backgroundColor: selectedOption === c ? "#F7EFFF" : undefined,
                },
              ]}
            >
              <RNText
                style={[
                  styles.chartOptionText,
                  {
                    color: selectedOption === c ? "#770FDF" : "#A0A0A0",
                  },
                ]}
              >
                {c}
              </RNText>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default Chart;
