import { Navigation } from 'react-native-navigation'

export const navigateToScreen = (data) => {
    Navigation.push(data.id, {
        component: {
          name: data.route,
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

export const showModal = ({modal, props, title}) => {
  console.log('Modal shoving', modal, props, title)
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: modal,
            passProps: {
              props
            },
            options: {
              topBar: {
                title: {
                  text: title
                }
              }
            }
          }
        }]
      }
      });
}
export const dismissModal = (props) => {
    Navigation.dismissModal(props.dismiss);
}

export const goToAuth = () => Navigation.setRoot({
    root: {
        id: 'Auth',
        component: {
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
              id: 'Home',
              component: {
                name: 'Home',
              }
            }
          ]
        }
      }
    });
