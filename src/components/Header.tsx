import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { palette } from '../assets/constants';

interface HeaderProps {
  title: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

export const Header = ({ title, leftIcon, rightIcon }: HeaderProps): React.ReactElement => {
  const LeftIcon = leftIcon as any;
  const RightIcon = rightIcon as any;

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: palette.secondary,
        padding: 10,
        paddingVertical: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TouchableWithoutFeedback style={{ width: 32, height: 32 }}>
          {/* <LeftIcon size={32} /> */}
        </TouchableWithoutFeedback>

        <Text style={{ fontSize: 24, fontWeight: '700' }}>{title}</Text>

        <TouchableWithoutFeedback style={{ width: 32, height: 32 }}>
          {/* <RightIcon size={32} /> */}
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
