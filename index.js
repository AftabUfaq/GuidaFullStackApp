import { registerRootComponent } from 'expo';
import App from './src/App'; // or the correct path to your main app component
import Amplify from 'aws-amplify';
import config from './src/aws-exports'; // Make sure this path is correct

console.log(Amplify); // This will log the Amplify object
console.log(config); // This will log the config object

Amplify.configure(config); // This should not throw error if config is not undefined

registerRootComponent(App);
