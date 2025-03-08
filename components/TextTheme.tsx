import {StyleSheet, Text, type TextProps} from 'react-native'
import React from 'react'
import {globalStyles} from "@/styles/styles";

export enum Variants {
  h1,
  h2
}

interface Props extends TextProps {
  variant: Variants,
  lines?: number
}

const TextTheme = ({
                     children,
                     variant = Variants.h2,
                     lines = 1,
                     ...rest
                   }: Props) => {
  return (
    <Text
      style={[
        styles.text,
        variant === Variants.h1 && globalStyles.mainResult,
        variant === Variants.h2 && globalStyles.subResult
      ]}
      numberOfLines={lines}
      adjustsFontSizeToFit
      {...rest}>
      {children}
    </Text>
  )
}
export default TextTheme;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: 'SpaceMono',
  }
});
