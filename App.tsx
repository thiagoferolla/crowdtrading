import { Provider } from "react-redux";
import Store from "./src/store/configure";
import useFonts from "./src/hooks/useFonts";
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={Store}>
      <MainNavigator />
    </Provider>
  );
}
