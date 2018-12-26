import React, { PureComponent } from 'react';
import { Image, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { width, colors } from '../theme/constants';
import { connect } from 'react-redux';


class Button extends PureComponent {
    render() {
        const { label, action, spinnerOn, image } = this.props;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => action()}
            >
                {label && spinnerOn
                    ? <ActivityIndicator size={'large'} />
                    : label && !spinnerOn
                        ? <Text style={{ color: colors.white, fontSize: 16 }}>{label}</Text>
                        : image &&
                        <Image
                            source={image}
                            style={styles.image}
                        />
                }
            </TouchableOpacity>
        );
    }
}

const styles = {
    container: {
        width: width * 0.8,
        height: 50,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    image: {
        height: 40,
        width: 40,
        resizeMode: 'contain',

    }
}

const mapStateToProps = (state) => ({
    spinnerOn: state.layout.btnSpinnerOn
})

export default connect(mapStateToProps, {})(Button);