import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
    root: {
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
            id: 'App',
            children: [
                {
                    component: {
                        name: 'Home',
                    }
                }
            ],
        }
    }
})