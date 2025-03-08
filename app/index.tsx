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
            onPress={() => console.log('clear')}
            backgroundColor={ColorsEnum.light}
            label="C"/>
          <ButtonTheme
            onPress={() => console.log('switch sign')}
            backgroundColor={ColorsEnum.light}
            label="+/-"/>
          <ButtonTheme
            onPress={() => console.log('delete')}
            backgroundColor={ColorsEnum.light}
            label="del"/>
          <ButtonTheme
            onPress={() => console.log('divide')}
            backgroundColor={ColorsEnum.orange}
            label="÷"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            onPress={() => console.log('7')}
            label="7"/>
          <ButtonTheme
            onPress={() => console.log('8')}
            label="8"/>
          <ButtonTheme
            onPress={() => console.log('9')}
            label="9"/>
          <ButtonTheme
            onPress={() => console.log('multiply')}
            backgroundColor={ColorsEnum.orange}
            label="*"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            onPress={() => console.log('4')}
            label="4"/>
          <ButtonTheme
            onPress={() => console.log('5')}
            label="5"/>
          <ButtonTheme
            onPress={() => console.log('6')}
            label="6"/>
          <ButtonTheme
            onPress={() => console.log('subtract')}
            backgroundColor={ColorsEnum.orange}
            label="-"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            onPress={() => console.log('1')}
            label="1"/>
          <ButtonTheme
            onPress={() => console.log('2')}
            label="2"/>
          <ButtonTheme
            onPress={() => console.log('3')}
            label="3"/>
          <ButtonTheme
            onPress={() => console.log('add')}
            backgroundColor={ColorsEnum.orange}
            label="+"/>
        </View>
        <View style={styles.row}>
          <ButtonTheme
            onPress={() => console.log('0')}
            isDouble
            label="0"/>
          <ButtonTheme
            onPress={() => console.log('decimal')}
            label="."/>
          <ButtonTheme
            onPress={() => console.log('equal')}
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
