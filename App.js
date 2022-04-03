import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};


const Stack = createStackNavigator();

const App = () => {
  return (

   <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen/>
        <Stack.Screen/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App