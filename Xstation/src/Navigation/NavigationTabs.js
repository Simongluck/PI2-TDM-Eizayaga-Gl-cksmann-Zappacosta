import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../Screens/Profile";
import Home from "../Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from '@expo/vector-icons/Entypo';
import createPost from "../Screens/CreatePost";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator()

function NavigationTabs() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Home" options={{ headerShown: false, tabBarIcon:()=> <Entypo name="home" size={24} color="black" />  }} component={Home}  />
            <Tab.Screen name= "CreatePost" options={{headerShown: false, tabBarIcon:()=><MaterialIcons name="add-box" size={24} color="black" />}} component={createPost} />
            <Tab.Screen name="Profile" options={{ headerShown: false, tabBarIcon:()=><MaterialCommunityIcons name="face-man-profile" size={24} color="black" /> }} component={Profile} />
        </Tab.Navigator>

    );
}

export default NavigationTabs