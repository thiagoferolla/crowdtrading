import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  title: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 17,
    color: "#000",
    marginBottom: 20,
    marginLeft: 8,
  },

  creditsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  numberOfCredits: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 24,
    color: "#000",
  },

  valueOfCredits: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 24,
    color: "#000",
  },

  creditsSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  percentageContainer: {
    flexDirection: "row",
  },

  percentage: {
    fontSize: 14,
    fontFamily: "Sora_400Regular",
  },

  lastPurchase: {
    fontFamily: "Sora_400Regular",
    fontSize: 14,
    color: "#A0A0A0",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },

  button: { flex: 1, marginLeft: 5 },

  retiredCredits: {
    fontFamily: "Sora_400Regular",
    fontSize: 11,
    color: "#A0A0A0",
    marginTop: 15,
  },
});
