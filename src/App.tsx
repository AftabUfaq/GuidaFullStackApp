import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Walkthrough from "./screens/Walkthrough";
import SignUpEmail from "./screens/SignupEmail";
import SignUpPhoneNumber from "./screens/SignUpPhoneNumber";
import ChoosePassword from './screens/ChoosePassword';
import Verification from "./screens/Verification";
import SetupPersonalization from "./screens/SetupPersonalization";
import { View, Text, Pressable, TouchableOpacity } from "react-native";


const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Walkthrough"
              component={Walkthrough}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="SignUpEmail"
            component={SignUpEmail}
            options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPhoneNumber"
              component={SignUpPhoneNumber}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Verification"
              component={Verification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChoosePassword"
              component={ChoosePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SetupPersonalization"
              component={SetupPersonalization}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;


