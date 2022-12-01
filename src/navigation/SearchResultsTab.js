import React from "react";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResults';
import { useRoute } from "@react-navigation/native";


const Tab = createMaterialTopTabNavigator();



const SearchResultsTabNavigation = () => {

    const route = useRoute();
    const {guests} = route.params;

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'gold',
            indicatorStyle: {
                backgroundColor: 'gold',
            }
        }}>
            <Tab.Screen name="list">
                {() => (
                    <SearchResultsScreen guests = {guests} />
                )}
            </Tab.Screen>
            <Tab.Screen name="map">
                {() => (
                    <SearchResultsScreen guests = {guests} />
                )}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigation;