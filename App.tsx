import useFonts from "./src/hooks/useFonts";
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return <MainNavigator />;
}
