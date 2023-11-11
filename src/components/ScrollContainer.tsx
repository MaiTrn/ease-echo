import React from 'react';
import { DEVICE_WIDTH } from '../assets/constants';
import { ScrollView } from 'react-native';

interface ScrollContainerProps {
  styleOverrides?: object;
  children: React.ReactNode;
}

export const ScrollContainer = ({
  children,
  styleOverrides,
}: ScrollContainerProps): React.ReactElement => {
  return (
    <ScrollView
      snapToEnd={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        {
          width: DEVICE_WIDTH,
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 80,
          justifyContent: 'center',
          alignItems: 'center',
        },
        styleOverrides,
      ]}
    >
      {children}
    </ScrollView>
  );
};
