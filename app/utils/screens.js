import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import store from '../store/store'

export function registerScreens() {
  Navigation.registerComponentWithRedux('Home', () => require('../screens/home/Home').default, Provider, store);
  Navigation.registerComponent('Initializing', (sc) => require('../screens/Initialising/Initialising').default);
  Navigation.registerComponentWithRedux('SignIn', () => require('../screens/auth/SignIn').default, Provider, store);
//   Navigation.registerComponent('SignUp', () => require('./SignUp').default);
//   Navigation.registerComponent('Screen2', () => require('./Screen2').default);
}