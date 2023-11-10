import React from 'react';
import { View, StyleSheet, TextInput as RNTextInput, TextInputProps } from 'react-native';
import { palette } from '../assets/constants';

interface CustomTextInputProps extends TextInputProps {
  icon?: React.ReactNode;
  styleOverrides?: object;
}

export const TextInput = ({
  icon,
  styleOverrides,
  ...props
}: CustomTextInputProps): React.ReactElement => {
  return (
    <View style={{ borderColor: palette.darkGray, ...styles.container }}>
      {icon}
      <RNTextInput
        underlineColorAndroid="transparent"
        placeholderTextColor={palette.darkGray}
        style={styles.textInput}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 320,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 8,
  },
  textInput: {
    marginLeft: 8,
    width: 250,
    height: 50,
    color: palette.primary,
  },
});
