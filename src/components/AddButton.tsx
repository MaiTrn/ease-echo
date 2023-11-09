import React from 'react';
import { View, TouchableOpacity, StyleSheet, ButtonProps } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { palette } from '../assets/constants';

export const AddButton = ({
  children,
  onPress,
}: Omit<ButtonProps, 'title'> & { children: React.ReactNode }): React.ReactElement => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
        <View style={{ flex: 1, backgroundColor: palette.white }} />
        <Svg width={75} height={80} viewBox="0 0 75 80" fill="red">
          <Path
            d="M75.2 0v80H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
            fill={palette.white}
          />
        </Svg>
        <View style={{ flex: 1, backgroundColor: palette.white }} />
      </View>

      <TouchableOpacity style={[styles.buttonContainer, styles.shadow]} onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
