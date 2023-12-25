import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styles'; // Import the styles
import * as Speech from 'expo-speech';
import { Button } from 'react-native';


const WelcomeScreen = ({ onFinished }) => {
  useEffect(() => {
    playWelcomeMessage();
  }, []);

  const playWelcomeMessage = async () => {
    const startSpeaking = () => {
      Speech.speak("Welcome to Vision Plus", {
        onDone: () => setIsWelcomeComplete(true) // Call onFinished after speech is done
      });
    };

    startSpeaking();
  };

  return (
    <View style={styles.welcomeContainer}>
      <Image source={require('./VisionPlusLogo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to VisionPlus</Text>
      {/* Add a button to manually trigger the onFinished function */}
      <Button
        title="Take Photo"
        onPress={onFinished}
      />
    </View>
  );
};

export default WelcomeScreen;
