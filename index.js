/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';

// Register the service
ReactNativeForegroundService.register();

ReactNativeForegroundService.start({
  id: 144,
  title: 'Foreground Service',
  message: 'you are online!',
});

AppRegistry.registerComponent(appName, () => App);
