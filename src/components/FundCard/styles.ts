import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    marginRight: 15,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },

  fundName: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 12,
    color: "#000",
    marginTop: 7,
  },

  chartContainer: {
    flex: 1,
  },

  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  price: {
    fontFamily: "Sora_400Regular",
    fontSize: 14,
  },

  percentageContainer: {
    flexDirection: "row",
    marginLeft: 2,
  },

  percentage: {
    fontFamily: "Sora_400Regular",
    fontSize: 14,
  },
});
