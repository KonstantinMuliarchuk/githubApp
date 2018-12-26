import { Dimensions } from 'react-native'

export const {width, height} = Dimensions.get('window');

export const colors = {
    white: 'white',
    grey : 'grey',
    blue: 'blue',
    black: 'black',
    transparent: 'rgba(0,0,0,0)',
    lightGrey: 'rgb(200,200,200)',
    almostTransparent: 'rgba(1,1,1,.1)'
}

export const images = {
    github: require('./images/github.png'),
    fork: require('./images/fork.png'),
    star: require('./images/star.png')
}
export const shadows = {
    default: {
        shadowColor: '#55595C',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    }
}
export const flex = {
    full: {
        flex: 1
    },
    remote: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    horizontal: {
        flexDirection: 'row'
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    }
}