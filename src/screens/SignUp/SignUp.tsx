import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { MainNavigatorScreens } from "../../navigation/types";
import Checkbox from "expo-checkbox";
import styles from "./styles";

function SignUp() {
  const navigation = useNavigation<NavigationProp<MainNavigatorScreens>>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.pageTitle}>Create your account</Text>

      <TextInput
        label="First Name"
        placeholder="John"
        value={firstName}
        onValueChange={setFirstName}
      />

      <View style={styles.inputContainer}>
        <TextInput
          label="Last Name"
          placeholder="Doe"
          value={lastName}
          onValueChange={setLastName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="Email"
          placeholder="john@doe.com"
          value={email}
          onValueChange={setEmail}
        />
      </View>

      <View style={styles.passwordInputContainer}>
        <TextInput
          label="Password"
          placeholder="Minimum 8 characters"
          value={password}
          onValueChange={setPassword}
          sensitive
        />
      </View>

      <View style={styles.termsOfServiceCheckboxContainer}>
        <Checkbox
          style={{ marginRight: 10 }}
          color={termsAccepted ? "#770FDF" : "#E6E6E6"}
          value={termsAccepted}
          onValueChange={setTermsAccepted}
        />
        <Text style={styles.termsOfServiceCheckboxText}>
          I am over 18 years of age and I have read and agree to the{" "}
          <Text style={{ color: "#000000" }}>Terms of Service</Text> and{" "}
          <Text style={{ color: "#000000" }}>Privacy policy</Text>.
        </Text>
      </View>

      <Button
        title="Create Account"
        onPress={() => navigation.navigate("TabNavigator")}
      />

      <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginHintText}>
          Already have an account?{" "}
          <Text style={{ textDecorationLine: "underline", color: "#000" }}>
            Log in Here
          </Text>
        </Text>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

export default SignUp;
