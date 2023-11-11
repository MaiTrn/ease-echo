import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const palette = {
  // primary: '#2b5865',
  // secondary: '#8fbdc2',
  // background: '#f0ede8',
  warning: '#ffa700',
  action: '#e57601',
  cardBackground: '#f3f1f1',
  white: '#ffffff',
  lightGray: '#f0f0f0',
  darkGray: '#898C95',

  background: '#fafeff',
  primary: '#66d6f5',
  secondary: '#cbf0fb',
  accent: '#ff5a1b',
  success: '#07F482',
  danger: '#ff0000',

  text: '#01080a',
  textSecondary: '#9a9a9a',
  textWhite: '#ffffff',
};

export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;
