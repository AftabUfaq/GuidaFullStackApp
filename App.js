import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styles from './styles'; // Import the styles
import CameraComponent from './CameraComponent';
import speak from './textToSpeech';
import WelcomeScreen from './WelcomeScreen';

const App = () => {
    const [isWelcomeComplete, setIsWelcomeComplete] = useState(false);
    const cameraRef = useRef(null);
    // Function to handle voice commands
    const handleVoiceCommand = (command) => {
    // Process and perform the action
    console.log(command);
    };
  
  // In your App.js
    const takePicture = async () => {
      if (cameraRef.current) {
        let photo = await cameraRef.current.takePictureAsync({ base64: true });
        console.log(photo.base64); // Add this line to log the base64 string
        const base64Image = photo.base64;

        // Send the image to your backend
        fetch('http://172.20.10.3:5000/process-image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            image: base64Image
          })
        })
        .then(response => response.json())
        .then(data => {
      // Handle the response from the backend
      console.log(data); // Log the response from the backend
      const description = data.choices[0].message.content;
            speak(description); // Use the speak function
      // Assuming the response contains the description, you can display it
      alert("Product Description: " + description);
    })
    .catch(error => {
      console.error('Error:', error);
    });

      }
    };

// In the render function before return
if (!isWelcomeComplete) {
  return <WelcomeScreen onFinished={() => setIsWelcomeComplete(true)} />;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to VisionPlus</Text>
      <CameraComponent cameraRef={cameraRef} />
      <Button
        title="Take Photo"
        onPress={takePicture}
      />
    </View>
  );
};
export default App;
