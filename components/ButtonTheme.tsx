import {Pressable, PressableProps, StyleSheet, Text, TextProps} from 'react-native'
import React from 'react'
import {Colors} from "@/constants/Colors";

export enum ColorsEnum {
  dark,
  light,
  orange,
}

interface Props extends PressableProps {
  label: string;
  onPress: () => void;
  backgroundColor?: ColorsEnum;
  textProps?: TextProps;
}

const ButtonTheme = ({label, backgroundColor = ColorsEnum.dark, onPress, ...rest}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        backgroundColor === ColorsEnum.orange && {backgroundColor: Colors.orange},
        backgroundColor === ColorsEnum.dark && {backgroundColor: Colors.darkGray},
        backgroundColor === ColorsEnum.light && {backgroundColor: Colors.textSecondary},
        pressed && {opacity: 0.8}
      ]}
      onPress={onPress}
      {...rest}>
      <Text
        style={[
          styles.buttonText,
          backgroundColor === ColorsEnum.light && {color: Colors.darkGray},
        ]}
        {...rest.textProps}>
            {label}
      </Text>
    </Pressable>
  )
}
export default ButtonTheme
const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    backgroundColor: Colors.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginInline: 10,
    borderRadius: 100,
  },
  buttonText: {
    color: Colors.textPrimary,
    fontWeight: 300,
    fontFamily: 'SpaceMono',
    padding: 10,
    fontSize: 30
  }
})
