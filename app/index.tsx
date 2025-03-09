import {StyleSheet, View} from 'react-native'
import {globalStyles} from "@/styles/styles";
import Results from "@/components/calculator/Results";
import ButtonTheme, {ColorsEnum} from "@/components/ButtonTheme";
import {useCalculator} from "@/hooks/useCalculator";

const CalculatorApp = () => {
  const {
    formula,
    buildNumber,
    cleanNumber
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      <Results result={formula} subResult='250'/>
      <View style={styles.container}>
        <View style={styles.row}>
          <ButtonTheme
            onPress={cleanNumber}
            backgroundColor={ColorsEnum.light}
            label="C"/>
          <ButtonTheme
            onPress={console.log}
            backgroundColor={ColorsEnum.light}
            label="+/-"/>
          <ButtonTheme
            onPress={console.log}
            backgroundColor={ColorsEnum.light}
            label="del"/>
          <ButtonTheme
            onPress={console.log}
            backgroundColor={ColorsEnum.orange}
            label="÷"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            onPress={buildNumber}
            label="7"/>
          <ButtonTheme
            onPress={buildNumber}
            label="8"/>
          <ButtonTheme
            onPress={buildNumber}
            label="9"/>
          <ButtonTheme
            onPress={console.log}
            backgroundColor={ColorsEnum.orange}
            label="*"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            onPress={buildNumber}
            label="4"/>
          <ButtonTheme
            onPress={buildNumber}
            label="5"/>
          <ButtonTheme
            onPress={buildNumber}
            label="6"/>
          <ButtonTheme
            onPress={console.log}
            backgroundColor={ColorsEnum.orange}
            label="-"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            onPress={buildNumber}
            label="1"/>
          <ButtonTheme
            onPress={buildNumber}
            label="2"/>
          <ButtonTheme
            onPress={buildNumber}
            label="3"/>
          <ButtonTheme
            onPress={console.log}
            backgroundColor={ColorsEnum.orange}
            label="+"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            onPress={buildNumber}
            isDouble
            label="0"/>
          <ButtonTheme
            onPress={buildNumber}
            label="."/>
          <ButtonTheme
            onPress={console.log}
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
