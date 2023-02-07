import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
} from "react-native";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { MainNavigatorScreens } from "../../navigation/types";
import styles from "./styles";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../../store/user/userSlice";

function Login() {
  const navigation = useNavigation<NavigationProp<MainNavigatorScreens>>();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (
      yup.string().email().validateSync(email) &&
      yup.string().min(1).required().validateSync(password)
    ) {
      dispatch(loginAction({ email }));
    } else {
      Alert.alert("Error", "Your email or password is invalid");
    }
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        label="Email"
        placeholder="john@doe.com"
        autoCapitalize="none"
        keyboardType="email-address"
        autoComplete="email"
        value={email}
        onValueChange={setEmail}
      />

      <View style={styles.passwordInputContainer}>
        <TextInput
          label="Password"
          placeholder="Minimum 8 characters"
          value={password}
          onValueChange={setPassword}
          sensitive
        />
      </View>

      <Button title="Login" onPress={login} />

      <TouchableWithoutFeedback onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.signUpHintText}>
          Don't have an account?{" "}
          <Text style={{ textDecorationLine: "underline" }}>Sign up</Text> here
        </Text>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

export default Login;
