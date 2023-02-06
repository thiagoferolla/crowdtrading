import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

interface NewsCardProps {
  image: ImageSourcePropType;
  logo: ImageSourcePropType;
  description: string;
}

export default function NewsCard(props: NewsCardProps) {
  return (
    <View style={styles.newsCardContainer}>
      <Image
        source={props.image}
        style={styles.newsCoverImage}
        resizeMode="cover"
      />

      <View style={styles.newsDescriptionContainer}>
        <Image source={props.logo} style={{}} resizeMode="contain" />

        <Text style={styles.newsTitle} numberOfLines={5}>
          {props.description}
        </Text>

        <TouchableOpacity onPress={() => console.warn("read more")}>
          <Text style={styles.newsReadMoreBtn}>Read more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
