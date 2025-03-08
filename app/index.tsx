import {Text, View} from 'react-native'
import {globalStyles} from "@/styles/styles";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={globalStyles.mainResult}>
        50 x 50505050505050505050
      </Text>
      <Text style={globalStyles.subResult}>250</Text>
    </View>
  )
}
export default CalculatorApp
