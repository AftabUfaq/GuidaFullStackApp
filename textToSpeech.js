// textToSpeech.js
import * as Speech from 'expo-speech';

const speak = (text) => {
    Speech.speak(text);
}

export default speak;
