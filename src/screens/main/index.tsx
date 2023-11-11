import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PainExercise } from './pain-exercise';
import { PainInfo } from './PainInfo';
import { Distraction } from './distraction';
import { Profile } from './Profile';
import {
  ChatCircleDots,
  Ghost,
  HouseLine,
  IconProps,
  MonitorPlay,
  RocketLaunch,
} from 'phosphor-react-native';
import { palette } from '../../assets/constants';
import { Dashboard } from './Dashboard';
import { AddButton, TabBarButton } from '../../components';

const TabIcon = ({ focused, color, route }) => {
  const props: IconProps = {
    size: focused ? '35' : '28',
    color,
    weight: focused ? 'fill' : 'regular',
  };
  if (route.name === 'PainExercise') {
    return <MonitorPlay {...props} />;
  }
  if (route.name === 'Distraction') {
    return <RocketLaunch {...props} />;
  }
  if (route.name === 'PainInfo') {
    return <ChatCircleDots {...props} />;
  }
  if (route.name === 'UserProfile') {
    return <Ghost {...props} />;
  }
};

export const Main = (): React.ReactElement => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: palette.background,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: palette.white,
        tabBarInactiveTintColor: palette.white,
        tabBarIcon: (props) => <TabIcon {...props} route={route} />,
        tabBarButton: (props) => <TabBarButton {...props} />,
      })}
    >
      <Tab.Screen name="PainExercise" component={PainExercise} />
      <Tab.Screen name="Distraction" component={Distraction} />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <HouseLine
              weight={focused ? 'fill' : 'regular'}
              size={focused ? '35' : '28'}
              color={palette.white}
            />
          ),
          tabBarButton: (props) => <AddButton {...props} />,
        }}
      />
      <Tab.Screen name="PainInfo" component={PainInfo} />
      <Tab.Screen name="UserProfile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: 80,
    backgroundColor: palette.white,
  },
  buttonStyle: {
    backgroundColor: palette.white,
    height: 60,
    width: 80,
    borderRadius: 0,
  },
});
