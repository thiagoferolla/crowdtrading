import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlaceholderScreen from "../components/PlaceholderScreen";
import Home from "../screens/Home/Home";

const BottomTabNavigator = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen name="Home" component={Home} />
      <BottomTabNavigator.Screen name="Trade" component={PlaceholderScreen} />
      <BottomTabNavigator.Screen
        name="Portfolio"
        component={PlaceholderScreen}
      />
    </BottomTabNavigator.Navigator>
  );
}
