import { StyleSheet, Text, View } from 'react-native';

interface ContainerProps {
  styleOverrides?: object;
  children: React.ReactNode;
}

export const Container = ({ styleOverrides, children }: ContainerProps): React.ReactElement => {
  return <View style={[styles.container, styleOverrides]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
