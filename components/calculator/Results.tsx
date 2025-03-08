import {StyleSheet, View} from 'react-native'
import TextTheme, {Variants} from "@/components/TextTheme";

interface Props {
  result: string;
  subResult: string;
}

const Results = ({result, subResult}: Props) => {
  return (
    <View style={styles.resultsContainer}>
      <TextTheme variant={Variants.h1}>{result}</TextTheme>
      <TextTheme variant={Variants.h2}>{subResult}</TextTheme>
    </View>
  )
}
export default Results
const styles = StyleSheet.create({
  resultsContainer: {
    gap: 5,
    paddingBlockEnd: 20
  }
})
