import { Navigation } from 'react-native-navigation'

export const navigateToScreen = (data) => {
    Navigation.push(data.id, {
        component: {
          name: data.screen,
          passProps: {
            ...data.props
          },
          options: {
            topBar: {
              title: {
                text: data.title
              }
            }
          }
        }
      });
}

export const showModal = (data) => {
    Navigation.showModal({
            component: {
              name: data.screen,
              passProps: {
                ...data.props
              },
              options: {
                topBar: {
                  title: {
                    text: data.title
                  }
                }
              }
            }
      });
}
export const dismissModal = (props) => {
    Navigation.dismissModal(props.componentId);
}

export const goToAuth = () => Navigation.setRoot({
    root: {
        id: 'Auth',
        component: {
            id: 'SignIn',
            name: 'SignIn',
            options: {
                topBar: {
                    visible: false
                }
            }
        },
    },
});

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
          options: {
            topBar: {
              visible: true
            }
          },
          children: [
            {
              component: {
                  id: 'Home',
                name: 'Home',
              }
            }
          ]
        }
      }
    });
