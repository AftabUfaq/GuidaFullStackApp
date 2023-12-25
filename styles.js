// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1E90FF',
    color: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: '80%', // or a specific width like 300
    height: '20%', // or a specific height like 100
    resizeMode: 'contain', // This ensures the whole logo is visible and aspect ratio is maintained
  },
  // Add other styles as needed
});
