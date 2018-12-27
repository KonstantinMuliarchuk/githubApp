import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/button.component';
import { width, images, colors } from '../../../theme/constants';
import { auth }  from '../../../api/oauth2';
import { setAxiosDefaults } from '../../../utils/axiosDefaults';
import { AUTHORIZED, NAVIGATE, USER_KEY } from '../../../utils/constants';

class SignUp extends PureComponent {

  render() {
    console.log('props: ', this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.title}> To Use App Please Auth with GitHub</Text>
        <Button
          image={images.github}
          action={()=> auth()}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    width: width * 0.65
  }
});


export default SignUp;