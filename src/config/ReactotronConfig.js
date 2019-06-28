import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron
    .configure() // controls connection & communication settings
    .useReactNative(reactotronRedux()) // add all built-in react native plugins
    .connect() // let's connect!

    
  tron.clear();
  console.tron = tron;
}
