/**
 * @format
 */
import Storybook from './.storybook';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {App} from './src/App';
import {name as appName} from './app.json';

let AppEntryPoint = App;

// make it true to render storybook
// let isStoryBook = false;

let isStoryBook = true;

if (isStoryBook) {
  AppEntryPoint = Storybook;
}

AppRegistry.registerComponent(appName, () => AppEntryPoint);
