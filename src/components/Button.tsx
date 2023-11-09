import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ButtonProps,
} from 'react-native';
import { palette } from '../assets/constants';

interface CustomButtonProps extends Omit<ButtonProps, 'title'> {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
}

export const Button = ({
  children,
  onPress,
  containerStyle,
  buttonStyle,
}: CustomButtonProps): React.ReactElement => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: palette.action,
    width: 200,
    height: 40,
  },
});
