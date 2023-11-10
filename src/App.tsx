import { StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './screens/auth/Login';
import { Main } from './screens/main';
import { LevelComplete } from './screens/level-complete/LevelComplete';
import { Landing } from './screens/auth/Landing';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="LoginAsPatient" component={Login('Patient')} />
        <Stack.Screen name="LoginAsDoctor" component={Login('Doctor')} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="LevelComplete" component={LevelComplete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
