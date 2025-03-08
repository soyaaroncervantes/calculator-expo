import {View} from 'react-native'
import {Slot} from "expo-router";
import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";
import {globalStyles} from "@/styles/styles";

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  if (!loaded) return null;

  return (
    <View style={globalStyles.background}>
      <Slot/>
      <StatusBar style="auto"/>
    </View>
  )
}
export default RootLayout
