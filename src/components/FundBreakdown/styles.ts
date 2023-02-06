import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { marginBottom: 60 },
  
  title: {
    paddingHorizontal: 20,
    fontFamily: "Sora_600SemiBold",
    color: "#000000",
    fontSize: 17,
  },

  sectionsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },

  sectionItem: {
    borderBottomColor: "#770FDF",
  },

  sectionTitle: {
    fontSize: 14,
                    fontFamily: "Sora_600SemiBold",
                    paddingVertical: 7,
  },

  newsCardContainer: {
    width: 220,
    height: 280,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    overflow: "hidden",
    borderRadius: 4,
    marginRight: 15,
  },

  newsCoverImage: { width: 220, height: 106 },

  newsTitle: {
    marginTop: 10,
    flex: 1,
    fontFamily: "Sora_400Regular",
    fontSize: 12,
    color: "#000",
  },

  newsDescriptionContainer: {
    padding: 15,
    flex: 1,
  },

  newsReadMoreBtn: {
    textDecorationLine: "underline",
    fontFamily: "Sora_400Regular",
    fontSize: 12,
    color: "#000",
  },
});
