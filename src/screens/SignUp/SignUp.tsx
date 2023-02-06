import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { MainNavigatorScreens } from "../../navigation/types";
import Checkbox from "expo-checkbox";

function SignUp() {
  const navigation = useNavigation<NavigationProp<MainNavigatorScreens>>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 34,
            fontFamily: "Sora_600SemiBold",
            fontSize: 18,
            alignSelf: "center",
          }}
        >
          Create your account
        </Text>

        <TextInput
          label="First Name"
          placeholder="John"
          value={firstName}
          onValueChange={setFirstName}
        />

        <View style={{ marginTop: 20 }}>
          <TextInput
            label="Last Name"
            placeholder="Doe"
            value={lastName}
            onValueChange={setLastName}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <TextInput
            label="Email"
            placeholder="john@doe.com"
            value={email}
            onValueChange={setEmail}
          />
        </View>

        <View style={{ marginTop: 20, marginBottom: 16 }}>
          <TextInput
            label="Password"
            placeholder="Minimum 8 characters"
            value={password}
            onValueChange={setPassword}
            sensitive
          />
        </View>

        <View style={{ flexDirection: "row", marginBottom: 32 }}>
          <Checkbox
            style={{ marginRight: 10 }}
            color={termsAccepted ? "#770FDF" : "#E6E6E6"}
            value={termsAccepted}
            onValueChange={setTermsAccepted}
          />
          <Text
            style={{
              flex: 1,
              color: "#A0A0A0",
              fontFamily: "Sora_400Regular",
              fontSize: 12,
            }}
          >
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
          <Text
            style={{
              alignSelf: "center",
              marginTop: 13,
              fontFamily: "Sora_400Regular",
              color: "#A0A0A0",
            }}
          >
            Already have an account?{" "}
            <Text style={{ textDecorationLine: "underline", color: "#000" }}>
              Log in Here
            </Text>
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
}

export default SignUp;
