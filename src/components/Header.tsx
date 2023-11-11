import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { palette } from '../assets/constants';
import { IconProps } from 'phosphor-react-native';

interface HeaderProps {
  title: string;
  LeftIcon?: (props: IconProps) => React.JSX.Element;
  RightIcon?: (props: IconProps) => React.JSX.Element;
}

export const Header = ({ title, LeftIcon, RightIcon }: HeaderProps): React.ReactElement => {
  return (
    <View
      style={{
        backgroundColor: palette.background,
        padding: 14,
        margin: 25,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 3,
        marginTop: 30,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TouchableWithoutFeedback style={{ width: 32, height: 32 }}>
          <LeftIcon size={32} />
        </TouchableWithoutFeedback>

        <Text style={{ fontSize: 24, fontWeight: '700' }}>{title}</Text>

        <TouchableWithoutFeedback style={{ width: 32, height: 32 }}>
          <RightIcon size={32} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
