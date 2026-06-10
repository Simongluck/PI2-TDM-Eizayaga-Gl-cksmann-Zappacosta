import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import NavigationTabs from './NavigationTabs';


const Stack = createNativeStackNavigator();

function NavigationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />

            <Stack.Screen name="Register" component={Register} />

            <Stack.Screen
          name="NavTab"
          component={NavigationTabs}
        />

        </Stack.Navigator>
    )
}

export default NavigationStack;