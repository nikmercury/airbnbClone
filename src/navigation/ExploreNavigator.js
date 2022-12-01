import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import SearchResultsTabNavigation from "./SearchResultsTab";

const Stack = createStackNavigator();

const Router = (props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={'Welcome'}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name={'SearchResults'}
                component={SearchResultsTabNavigation}
                options={{
                    title: 'Search your destination'
                }}
            />
        </Stack.Navigator>
    );
};

export default Router;