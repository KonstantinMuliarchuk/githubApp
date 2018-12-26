import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import { width, colors } from '../theme/constants';
import { inputs } from '../utils/inputs';
import validate from '../utils/validate';

class Input extends PureComponent {

    state = {
        valid: false,
        value: ''
    }
    handleValidation = () => {
        let valid

        this.props.callbackBlur && this.props.callbackBlur()

        return this.props.required && (
            valid = validate(this.state.value, this.props.type) === false || this.state.value === ''
                ? false
                : true,
            this.setState({ valid: valid }),
            valid)
    }

    handleChange = (value) => {
        const { callbackChange } = this.props;

        callbackChange && callbackChange(value);

        this.setState({ value: value });
    }
    render() {
        const { type, defaultValue } = this.props,
        inputType = inputs[type].placeholder;

        return (
            <View style={styles.container}>
                <Text style={styles.placeholder}>{`${inputType}`}</Text>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid={colors.transparent}
                    keyboardType={inputs[type].type}
                    defaultValue={defaultValue}
                    value={defaultValue}
                    autoCorrect={false}
                    onChangeText={(value) => this.handleChange(value)}
                    secureTextEntry={type === 'password'}
                />

            </View>
        );
    }
}

const styles = {
    container: {
        width: width*0.8,
        marginVertical: 5
    },
    placeholder: {
        fontSize: 15,
        marginBottom : 10
    },
    textInput: {
        width: width*0.8,
        height: 45,
        backgroundColor: colors.lightGrey,
        fontSize: 15,
        padding: 11

    }
}

export default Input;