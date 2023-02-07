import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#F4F4F4",
  },

  mainContainer: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 20,
  },

  title: {
    marginTop: 20,
    marginBottom: 34,
    fontFamily: "Sora_600SemiBold",
    fontSize: 18,
    alignSelf: "center",
  },

  passwordInputContainer: {
    marginTop: 20,
    marginBottom: 37,
  },

  signUpHintText: {
    alignSelf: "center",
    marginTop: 13,
    fontFamily: "Sora_400Regular",
    color: "#A0A0A0",
  },
});
