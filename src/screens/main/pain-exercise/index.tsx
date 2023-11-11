import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ExerciseList } from './ExercisesList';
import { PainSelection } from './PainSelection';

const Stack = createNativeStackNavigator();

export const PainExercise = (): React.ReactElement => {
  return (
    <Stack.Navigator initialRouteName="PainSelection" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PainSelection" component={PainSelection} />
      <Stack.Screen name="ExerciseList" component={ExerciseList} />
    </Stack.Navigator>
  );
};
