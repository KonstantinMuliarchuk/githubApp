import OAuthManager from 'react-native-oauth'
import { AsyncStorage, Platform } from 'react-native'
import { action } from '../store/store';
import { AUTHORIZED, USER_KEY, NAVIGATE } from '../utils/constants';
import { setAxiosDefaults } from '../utils/axiosDefaults';

const client_id = Platform.OS === 'ios' ? 'e2d5ea5767ec2646c132' : 'efb96edc60f746d70c64'
const client_secret = Platform.OS === 'ios' ? '0a3d69a4a9fd7bbf4b889248937400b6c3a201d8' : 'c25e8b8fa83537f688dd017e7eeb8f2ee50d6248'

const config = {
  github: {
    client_id,
    client_secret
  }
}
// Create the manager
const manager = new OAuthManager('AppGenesis')

// configure the manager
manager.configure(config);
export const auth = () => {

  //authorize
  manager.authorize('github', { scopes: 'public_repo' })
    .then(response => {
      console.log('Token received: ', response)
      if (response.status === 'ok') {
        console.log('Token received: ', response)
        let token = response.response.credentials.accessToken;

        if (token) {
          action(AUTHORIZED, token)
          AsyncStorage.setItem(USER_KEY, token)
          setAxiosDefaults(token)
          action(NAVIGATE, { goHome: true })
        } else {
          alert('No token provided!')
        }
      }

    })
    .catch(error => alert(error))
}