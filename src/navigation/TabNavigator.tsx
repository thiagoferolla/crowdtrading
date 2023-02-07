import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlaceholderScreen from "../components/PlaceholderScreen";
import AssetDetails from "../screens/AssetDetails/AssetDetails";
import CustomTradeHeader from "../screens/AssetDetails/Header";
import Home from "../screens/Home/Home";

const BottomTabNavigator = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <BottomTabNavigator.Screen
        name="Trade"
        component={AssetDetails}
        options={CustomTradeHeader}
      />
      <BottomTabNavigator.Screen
        name="Portfolio"
        component={PlaceholderScreen}
      />
    </BottomTabNavigator.Navigator>
  );
}
