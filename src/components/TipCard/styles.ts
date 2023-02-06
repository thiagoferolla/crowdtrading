import { StyleSheet} from 'react-native'

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: "#770FDF",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
  },
  textContainer: 
    {
      alignItems: "flex-start",
      justifyContent: "center",
      flex: 1,
    },
  title: {
    fontFamily: "Sora_600SemiBold",
            fontSize: 16,
            color: "#ffffff",
  },
  subtitle: {
      fontFamily: "Sora_400Regular",
      fontSize: 12,
      color: "#ffffff",
      marginTop: 10,
    },
  imageContainer: {},
})