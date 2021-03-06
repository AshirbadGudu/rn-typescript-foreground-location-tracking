import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile} from 'screens';
import {ICONS} from 'assets';
import {Box} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {StackAndTabType} from 'routes';

export type BottomTabsTypes = {
  Home: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsTypes>();

export default function BottomTabs() {
  const navigation = useNavigation<StackAndTabType>();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerTitleStyle: {fontFamily: 'Nunito-Bold'},
          tabBarLabelStyle: {fontFamily: 'Nunito-Regular'},
          headerRight: () => (
            <Box pr="3">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Notifications');
                }}>
                <ICONS.Notification />
              </TouchableOpacity>
            </Box>
          ),
          headerLeft: () => (
            <Box pl="3">
              <TouchableOpacity
                onPress={() => {
                  navigation.dispatch(DrawerActions.openDrawer());
                }}>
                <ICONS.Menu />
              </TouchableOpacity>
            </Box>
          ),
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <ICONS.Dashboard color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <ICONS.User color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
