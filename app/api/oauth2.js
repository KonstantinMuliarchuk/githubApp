import OAuthManager from 'react-native-oauth'
import {AsyncStorage} from 'react-native'
import { action } from '../store/store';
import { AUTHORIZED, USER_KEY } from '../utils/constants';
import { goHome } from '../utils/navigation';

const config =  {
    github: {
      client_id: 'e2d5ea5767ec2646c132',
      client_secret: '0a3d69a4a9fd7bbf4b889248937400b6c3a201d8'
    }
  }
  // Create the manager
const manager = new OAuthManager('githubapp')

  // configure the manager
  manager.configure(config);
  export const auth = () => {
   manager.authorize('github', { scopes: 'public_repo' })
   .then(response => {
      if (response.status === 'ok') {
        action(AUTHORIZED, response.response.credentials.accessToken)
        AsyncStorage.setItem(USER_KEY, response.response.credentials.accessToken)
        console.log('Token was saved: ',response.response.credentials.accessToken)
        goHome()
      }

    })
    .catch(error => alert('Something went wrong'))
}