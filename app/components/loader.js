import React, { Component } from 'react';
import { View, Animated } from 'react-native'
import { images, width, height, colors, flex } from '../theme/constants';

class Loader extends Component {
    state = {
        value: new Animated.Value(1)
    }
    componentDidMount(){
        this.start()
    }

    start = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.value, {
                    toValue: 1.3,
                    duration: 300
                }),
                Animated.timing(this.state.value, {
                    toValue: 1.0,
                    duration: 600
                })])).start()
    }

    render() {
        const{value} = this.state;
        const shadowRadius = value.interpolate({
            inputRange: [1, 1.3],
            outputRange: [1,10]
        })
        const shadowOpacity = value.interpolate({
            inputRange: [1, 1.3],
            outputRange: [1, .3]
        })
        const scaleAnimation = {
            shadowRadius,
            shadowOpacity,
            transform: [
                {
                    scale: value
                }
            ]
        }
        return (
            <View style={styles.container}>
            <Animated.Image
                    source={images.github}
                    style={[styles.image, scaleAnimation]}
                />

            </View>
        );
    }
}
const styles = {
    container: {
        width: width*0.9,
        height: height,
        paddingVertical: 40,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        shadowColor: 'black',
        shadowOffset: {x:1, y: 1},
        borderRadius: 50
    }
}

export default Loader;