import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/Navigation/NavigationStack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <NavigationStack />
  );
}


