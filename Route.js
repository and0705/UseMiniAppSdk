import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Categories from './screens/Categories';
import Category from './screens/Category';
import Weather from './screens/Weather';
import GameList from './screens/GameList';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// Icon.loadFont();

const CategoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title: 'The list of categories',
        }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

const WeatherStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Weather" component={Weather} />
    </Stack.Navigator>
  );
};

const Route = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Categories') {
            iconName = focused ? 'book' : 'book';
          } else if (route.name === 'Weather') {
            iconName = focused ? 'cloud' : 'cloud';
          } else if (route.name === 'Game') {
            iconName = focused ? 'gamepad' : 'gamepad';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Categories" component={CategoryStack} />
      <Tab.Screen name="Weather" component={WeatherStack} />
      <Tab.Screen name="Game" component={GameList} />
    </Tab.Navigator>
  );
};

export default Route;
