import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Search from './screens/Search';
import Order from './screens/Order';
import Bag from './screens/Bag';
import Profile from './screens/Profile';
import { or } from 'react-native-reanimated';

const homeName = "Home";
const searchName = "Search";
const orderName = "Order";
const bagName = "Bag";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

export default function Container() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = 'ios-home';

                    } else if (rn === searchName) {
                        iconName = focused ? 'list' : 'list-outline';

                    } else if (rn === orderName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (rn == profileName){
                        iconName = "ios-person";
                    } else if (rn == bagName) {
                        iconName = "ios-home";
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 80}
                }}>

                <Tab.Screen name={homeName} component={Home} options={{headerShown: false}}/>
                <Tab.Screen name={searchName} component={Search} />
                <Tab.Screen name={orderName} component={Order} />
                <Tab.Screen name={bagName} component={Bag}/>
                <Tab.Screen name={profileName} component={Profile} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}