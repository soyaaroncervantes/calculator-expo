import {StyleSheet, View} from 'react-native'
import {globalStyles} from "@/styles/styles";
import Results from "@/components/calculator/Results";
import ButtonTheme, {ColorsEnum} from "@/components/ButtonTheme";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Results result='50 x 50505050505050505050' subResult='250'/>
      <View style={styles.container}>
        <View style={styles.row}>
          <ButtonTheme
            backgroundColor={ColorsEnum.light}
            label="C"/>
          <ButtonTheme
            backgroundColor={ColorsEnum.light}
            label="+/-"/>
          <ButtonTheme
            backgroundColor={ColorsEnum.light}
            label="del"/>
          <ButtonTheme
            backgroundColor={ColorsEnum.orange}
            label="÷"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            label="7"/>
          <ButtonTheme
            label="8"/>
          <ButtonTheme
            label="9"/>
          <ButtonTheme
            backgroundColor={ColorsEnum.orange}
            label="*"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            label="4"/>
          <ButtonTheme
            label="5"/>
          <ButtonTheme
            label="6"/>
          <ButtonTheme
            backgroundColor={ColorsEnum.orange}
            label="-"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            label="1"/>
          <ButtonTheme
            label="2"/>
          <ButtonTheme
            label="3"/>
          <ButtonTheme
            backgroundColor={ColorsEnum.orange}
            label="+"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            isDouble
            label="0"/>
          <ButtonTheme
            label="."/>
          <ButtonTheme
            backgroundColor={ColorsEnum.orange}
            label="="/>
        </View>
      </View>
    </View>
  )
}
export default CalculatorApp

const styles = StyleSheet.create({
  container: {
    gap: 12,
    padding: 10
  },
  row: {
    flexDirection: 'row',
  }
})
