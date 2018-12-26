import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import { USER_KEY, AUTHORIZED, NAVIGATE } from '../../utils/constants';
import { goHome, goToAuth } from '../../utils/navigation';
import { setAxiosDefaults } from '../../utils/axiosDefaults';
import { action } from '../../store/store';


export default class Initialising extends React.Component {

  async componentDidMount() {
    // AsyncStorage.clear()
    try {
      const token = await AsyncStorage.getItem(USER_KEY)
      console.log('token: ', token)
      if (token) {
        setAxiosDefaults(token)
        action(AUTHORIZED, token)
        action(NAVIGATE, {goHome: true})
      } else {
        setAxiosDefaults()
        action(NAVIGATE, {goToAuth: true})
      }
    } catch (err) {
      console.log('error: ', err)
      goToAuth()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})