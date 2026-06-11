import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Login";
import NavigationTabs from "./NavigationTabs";
import Register from "../Screens/Register";

const Stack = createNativeStackNavigator();

function NavigationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />

                <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />

                <Stack.Screen name="NavigationTabs" options={{ headerShown: false }} component={NavigationTabs} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStack;