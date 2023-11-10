import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { DistractionSelection } from './DistractionSelection';
import { Art } from './Art';
import { Music } from './Music';

const Stack = createNativeStackNavigator();

export const Distraction = (): React.ReactElement => {
  return (
    <Stack.Navigator initialRouteName="DistractionSelection" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DistractionSelection" component={DistractionSelection} />
      <Stack.Screen name="Art" component={Art} />
      <Stack.Screen name="Music" component={Music} />
    </Stack.Navigator>
  );
};
