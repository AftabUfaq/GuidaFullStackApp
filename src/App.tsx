import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Walkthrough from "./screens/Walkthrough";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import SignUpEmail from "./screens/SignupEmail";
import SignUpPhoneNumber from "./screens/SignUpPhoneNumber";
const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);

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
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;


