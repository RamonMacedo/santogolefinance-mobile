import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
    initialRouteName="Dashboard"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        let color;

        if (route.name === 'Dashboard') {
          iconName = 'list';
          color = focused ? '#FFB115': '#DEDEDE';
        } else if (route.name === 'Register') {
          iconName = 'dollar-sign';
          color = focused ? '#FFB115': '#DEDEDE';
        }

        // You can return any component that you like here!
        return <Icon name={`${iconName}`} size={24} color={color} />;
      },
    })}
    tabBarOptions={{
      inactiveBackgroundColor: '#292929',
      activeBackgroundColor: '#181818',
      activeTintColor: '#FFB115',
      inactiveTintColor: '#3c3c3c',
      labelStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      tabStyle: {
        borderTopColor: '#FFB115',
        borderTopWidth: 2
      },
      showLabel: false,
    }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
}

export default Routes;
