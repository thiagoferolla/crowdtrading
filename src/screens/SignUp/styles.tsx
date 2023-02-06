import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 20,
  },

  pageTitle: {
    marginTop: 20,
    marginBottom: 34,
    fontFamily: "Sora_600SemiBold",
    fontSize: 18,
    alignSelf: "center",
  },

  inputContainer: {
    marginTop: 20,
  },

  passwordInputContainer: {
    marginTop: 20,
    marginBottom: 16,
  },

  termsOfServiceCheckboxContainer: {
    flexDirection: "row",
    marginBottom: 32,
  },

  termsOfServiceCheckboxText: {
    flex: 1,
    color: "#A0A0A0",
    fontFamily: "Sora_400Regular",
    fontSize: 12,
  },

  loginHintText: {
    alignSelf: "center",
    marginTop: 13,
    fontFamily: "Sora_400Regular",
    color: "#A0A0A0",
  },

  headerBarProgressMainContainer: {
    flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
  },
  
  headerBarProgress: {
    borderRadius: 99,
    backgroundColor: "#F4F4F4",
    height: 5,
    width: 50,
  },
});
