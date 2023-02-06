import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigatorScreens } from './types';

import TabNavigator from './TabNavigator'
import SignUp from '../screens/SignUp/SignUp';
import Login from '../screens/Login/Login';
import AssetDetails from '../screens/AssetDetails/AssetDetails';

const Navigator = createNativeStackNavigator<MainNavigatorScreens>();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Navigator.Navigator>
        <Navigator.Screen name="Login" component={Login} />
        <Navigator.Screen name="SignUp" component={SignUp} />
        <Navigator.Screen name="TabNavigator" component={TabNavigator} />
        <Navigator.Screen name="AssetDetails" component={AssetDetails} />
      </Navigator.Navigator>
    </NavigationContainer>
  )
}