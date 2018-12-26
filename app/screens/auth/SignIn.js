import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Auth from './components/Auth';
import { colors, height, width } from '../../theme/constants';
import { setAxiosDefaults } from '../../utils/axiosDefaults';

class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Auth/>
            </View>
        );
    }
}

const styles = {
    container: {
        height: height,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    }
}

export default SignIn;