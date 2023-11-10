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
}

export const TabBarButton = ({ children, onPress }: CustomButtonProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: 80,
    backgroundColor: palette.white,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.white,
    height: 60,
    width: 80,
    borderRadius: 0,
  },
});
