import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutList  from './views/homepage/workoutList.js';
import WorkoutCategories from './views/homepage/workoutCategories.js';
import FirstChoiceHeader from './views/generic/header.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SocialFeed from './pages/social.js';
import AccountDetails from './pages/account.js';

// Setting up navigation using bottom tabs
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomePage() {
  return(
    <View style={{flex: 1}}>
      <ScrollView>
        <WorkoutCategories />
        <WorkoutList />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

function MainTabNavigator() {
  return(
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Account') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }
            else if (route.name === 'Feed') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Feed" component={SocialFeed} />
        <Tab.Screen name="Account" component={AccountDetails} />
      </Tab.Navigator>
  );
}

function MainStackNavigator() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <MainStackNavigator />
  );
}