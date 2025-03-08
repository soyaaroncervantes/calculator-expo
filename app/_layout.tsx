import {Platform, View} from 'react-native'
import {Slot} from "expo-router";
import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";
import {globalStyles} from "@/styles/styles";
import * as NavigationBar from 'expo-navigation-bar';

const isAndroid = Platform.OS === 'android';

if (isAndroid) {
  void NavigationBar.setBackgroundColorAsync('black')
}

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
