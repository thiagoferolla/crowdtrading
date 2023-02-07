import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlaceholderScreen from "../components/PlaceholderScreen";
import AssetDetails from "../screens/AssetDetails/AssetDetails";
import CustomTradeHeader from "../screens/AssetDetails/Header";
import Home from "../screens/Home/Home";
import HomeIcon from "./icons/HomeIcon";
import TradeIcon from "./icons/TradeIcon";
import PortfolioIcon from "./icons/PortfolioIcon";

const BottomTabNavigator = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#770FDF",
        tabBarInactiveTintColor: "#000",
      }}
    >
      <BottomTabNavigator.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <HomeIcon size={size} color={color} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Trade"
        component={AssetDetails}
        options={(props) => ({
          ...CustomTradeHeader(props),
          tabBarLabel: "Portfolio",
          tabBarIcon: ({ size, color }) => (
            <TradeIcon size={size} color={color} />
          ),
        })}
      />
      <BottomTabNavigator.Screen
        name="Portfolio"
        component={PlaceholderScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Trade",
          tabBarIcon: ({ size, color }) => (
            <PortfolioIcon size={size} color={color} />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}
