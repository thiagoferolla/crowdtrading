import { StyleSheet } from "react-native";

export default StyleSheet.create({
  priceNoteContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: "#F4F4F4",
    padding: 10,
    borderRadius: 4,
  },

  priceNote: {
    fontSize: 12,
    fontFamily: "Sora_400Regular",
    color: "#A0A0A0",
  },

  buyButtonContainer: {
    marginTop: 30,
    marginHorizontal: 33,
    marginBottom: 10,
  },

  chartOptionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 28,
  },

  chartOption: {
    padding: 8,
    borderRadius: 4,
  },

  chartOptionText: {
    fontSize: 15,
    fontFamily: "Sora_500Medium",
  },

  headerTitle: {
    fontSize: 17,
    color: "#000",
    fontFamily: "Sora_600SemiBold",
  },

  headerSubtitle: {
    fontSize: 14,
    color: "#808080",
    fontFamily: "Sora_400Regular",
  },

  headerContainer: { flexDirection: "row", backgroundColor: "#fff" },

  headerBackButtonContainer: {
    width: 60,
    paddingLeft: 20,
    justifyContent: "center",
  },
});
