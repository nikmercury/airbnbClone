import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestScreen from '../screens/Guests';


import HomeTabNavigator from './HomeTabNavigation';
import PostScreen from '../screens/PostScreen';


const Stack = createStackNavigator();


 const Router = (props) => {
     return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                        name={"Home"}
                        component={HomeTabNavigator}
                        options={{headerShown: false}}
                    />
                <Stack.Screen
                    name={"Destination Search"}
                    component={DestinationSearchScreen}
                    options={{
                        title: 'Search your destination'
                    }}
                />
                <Stack.Screen
                    name={"Guests"}
                    component={GuestScreen}
                    options={{
                        title: 'How many people'
                    }}
                />

                <Stack.Screen
                    name={"Post"}
                    component={PostScreen}
                    options={{
                        title: 'Accommodation'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Router;