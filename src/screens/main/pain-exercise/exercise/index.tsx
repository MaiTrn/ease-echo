import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Exercise } from '../Exercises';
import { PainSelection } from '../pain/PainSelection';

const Stack = createNativeStackNavigator();

export const PainExercise = (): React.ReactElement => {
  return (
    <Stack.Navigator initialRouteName="PainSelection" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PainSelection" component={PainSelection} />
      <Stack.Screen name="Exercise" component={Exercise} />
    </Stack.Navigator>
  );
};