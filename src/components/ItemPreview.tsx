import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';

import { palette } from '../assets/constants';

interface ItemPreviewProps {
  title: string;
  handlePress?: () => void;
  source?: ImageSourcePropType;
  style?: object;
}

export const ItemPreview = ({ title, handlePress, source, style }: ItemPreviewProps) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          alignItems: 'center',
          margin: 10,
        }}
      >
        <View
          style={{
            height: 90,
            width: 90,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <View
            style={{
              height: 90,
              width: 90,
              borderRadius: 13,
              backgroundColor: palette.primary,
            }}
          >
            <Image source={source} />
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 4,
            color: palette.text,
            fontSize: 12,
            fontWeight: '500',
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
