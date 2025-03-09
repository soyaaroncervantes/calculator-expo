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
            onPress={console.log}
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
            onPress={console.log}
            label="7"/>
          <ButtonTheme
            onPress={console.log}
            label="8"/>
          <ButtonTheme
            onPress={console.log}
            label="9"/>
          <ButtonTheme
            onPress={console.log}
            backgroundColor={ColorsEnum.orange}
            label="*"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            onPress={console.log}
            label="4"/>
          <ButtonTheme
            onPress={console.log}
            label="5"/>
          <ButtonTheme
            onPress={console.log}
            label="6"/>
          <ButtonTheme
            onPress={console.log}
            backgroundColor={ColorsEnum.orange}
            label="-"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            onPress={console.log}
            label="1"/>
          <ButtonTheme
            onPress={console.log}
            label="2"/>
          <ButtonTheme
            onPress={console.log}
            label="3"/>
          <ButtonTheme
            onPress={console.log}
            backgroundColor={ColorsEnum.orange}
            label="+"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            onPress={console.log}
            isDouble
            label="0"/>
          <ButtonTheme
            onPress={console.log}
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
