import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  accountBalanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  accountBalance: {
    color: "#000",
    fontSize: 14,
    fontFamily: "Sora_600SemiBold",
    marginRight: 4,
  },

  personContainer: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 99,
  },

  bellContainer: {
    marginRight: 20,
  },
});
