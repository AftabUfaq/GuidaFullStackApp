import * as React from "react";
import { useState,useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable,TextInput, Alert } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
type RootStackParamList = {
  Walkthrough: undefined;
  SignUpEmail: undefined;
  SignUpPhoneNumber: undefined; // Add this line
  ChoosePassword: { email?: string; phoneNumber?: string };
  // ... other screen names
};
// Define the type for the navigation prop specifically for this screen
type ChoosePasswordNavigationProp = StackNavigationProp<RootStackParamList, 'ChoosePassword'>;

// Define the props for the SignUpEmail component
type Props = {
  navigation: ChoosePasswordNavigationProp;
}
const ChoosePassword = () => {
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'ChoosePassword'>>();
  const { email, phoneNumber } = route.params;

  const handleRegistration = async () => {
    // Implement your registration logic here
    // Send the email/phone number and password to your backend
    try {
      // Example: POST request to your backend
      const response = await fetch('https://your-backend-api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phoneNumber, password }),
      });

      const result = await response.json();
      if (result.success) {
        // Navigate to the next screen or perform successful registration actions
        //navigation.navigate('YourNextScreen');
        Alert.alert('Registration Success', result.message);
      } else {
        // Handle registration errors (e.g., user already exists)
        Alert.alert('Registration Error', result.message);
      }
    } catch (error) {
      // Handle network errors or show a generic error message
      Alert.alert('Network Error', 'Unable to register. Please try again later.');
      console.error('Registration error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Choose a password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.skyWhite,
  },
  prompt: {
    fontSize: FontSize.largeNoneBold_size,
    color: Color.inkDarkest,
    fontFamily: FontFamily.interRegular,
    marginBottom: 20,
  },
  input: {
    borderColor: Color.inkDarkest,
    borderWidth: 1,
    width: '90%',
    padding: 15,
    borderRadius: 5,
    fontSize: FontSize.regularNoneMedium_size,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Color.colorIndigo,
    width: '90%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: Color.skyWhite,
    fontSize: FontSize.regularNoneMedium_size,
    fontFamily: FontFamily.interRegular,
  },
});

export default ChoosePassword;