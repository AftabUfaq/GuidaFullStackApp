import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CameraComponent from './CameraComponent'; // Ensure this path is correct

const App = () => {
  // Function to handle voice commands
  const handleVoiceCommand = (command) => {
    // Process and perform the action
  };

  // The render function
  return (
    <View style={styles.container}>
      <Text>Welcome to VisionPlus</Text>
      <CameraComponent />
      <Button
        title="Speak Command"
        onPress={() => handleVoiceCommand('example command')}
      />
    </View>
  );
};

// StyleSheet for your components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Other styles as needed
});

export default App;
