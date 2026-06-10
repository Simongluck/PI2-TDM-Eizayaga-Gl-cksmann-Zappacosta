import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../Screens/Profile";
import Home from "../Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator

function NavigationTabs() {
    return (

<Tab.Navigator>
  <Tab.Screen name= "Profile" component = {Profile}/>
  <Tab.Screen name= "Home" component = {Home}/>
</Tab.Navigator>

    );
}

export default NavigationTabs