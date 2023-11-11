import React from 'react';
import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { DEVICE_WIDTH, palette } from '../assets/constants';
import { IconProps } from 'phosphor-react-native';

interface HeaderProps {
  title: string;
  LeftIcon?: (props: IconProps) => React.JSX.Element;
  RightIcon?: (props: IconProps) => React.JSX.Element;
  onLeftPress?: () => void;
  onRightPress?: () => void;
}

export const Header = ({
  title,
  LeftIcon,
  RightIcon,
  onLeftPress,
  onRightPress,
}: HeaderProps): React.ReactElement => {
  return (
    <View
      style={{
        backgroundColor: palette.background,
        padding: 14,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 3,
        paddingTop: 50,
        position: 'absolute',
        width: DEVICE_WIDTH,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity style={{ width: 32, height: 32 }} onPress={onLeftPress}>
          {LeftIcon && <LeftIcon size={32} />}
        </TouchableOpacity>

        <Text style={{ fontSize: 24, fontWeight: '700' }}>{title}</Text>

        <TouchableOpacity style={{ width: 32, height: 32 }} onPress={onRightPress}>
          {RightIcon && <RightIcon size={32} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};
