import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import ChoosePassword from './screens/ChoosePassword';
import SetupPersonalization from "./screens/SetupPersonalization";
import SignUpPhoneNumber from "./screens/SignUpPhoneNumber";
import SignUpEmail from "./screens/SignupEmail";
import Verification from "./screens/Verification";
import Walkthrough from "./screens/Walkthrough";


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


