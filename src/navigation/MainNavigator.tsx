import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigatorScreens } from './types';

import TabNavigator from './TabNavigator'
import SignUp from '../screens/SignUp/SignUp';
import Login from "../screens/Login/Login";
import CustomSignUpHeaderOptions from "../screens/SignUp/Header";

import { useSelector } from "react-redux";
import { RootState } from "../store/configure";
import CustomLoginOptions from "../screens/Login/Header";

const Navigator = createNativeStackNavigator<MainNavigatorScreens>();

export default function MainNavigator() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <NavigationContainer>
      <Navigator.Navigator>
        {!user ? (
          <>
            <Navigator.Screen
              name="Login"
              component={Login}
              options={CustomLoginOptions}
            />
            <Navigator.Screen
              name="SignUp"
              component={SignUp}
              options={(props) => CustomSignUpHeaderOptions(props)}
            />
          </>
        ) : (
          <Navigator.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Navigator.Navigator>
    </NavigationContainer>
  );
}