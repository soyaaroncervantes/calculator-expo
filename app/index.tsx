import {View} from 'react-native'
import {globalStyles} from "@/styles/styles";
import Results from "@/components/calculator/Results";
import ButtonTheme, {ColorsEnum} from "@/components/ButtonTheme";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Results result='50 x 50505050505050505050' subResult='250'/>
      <View>
        <ButtonTheme
          backgroundColor={ColorsEnum.orange}
          label="1"/>
      </View>
    </View>
  )
}
export default CalculatorApp
