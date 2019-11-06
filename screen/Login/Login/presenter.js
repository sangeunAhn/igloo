import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import KakaoLogin from '../../../components/SocialLogin/kakaoLogin';
import FacebookLogin from '../../../components/SocialLogin/FacebookLogin';

const {width, height} = Dimensions.get('window');

const Login = props => (
  <>
    <ImageBackground
      imageStyle={{opacity: 0.9}}
      style={{backgroundColor: 'gray ', flex: 1, alignSelf: 'stretch'}}
      source={require('../../../images/bg.jpg')}>
      <View style={styles.container}>
        <Animatable.Text
          animation="fadeInUp"
          duration={3500}
          useNativeDriver={true}
          style={{lineHeight:55,color: 'white', fontSize: width * 0.1}}>
          대학교 모임이 {'\n'}궁금할땐?
        </Animatable.Text>

        <Animatable.View
          style={{marginTop: height * 0.2, alignItems: 'center'}}
          animation="fadeIn"
          delay={3000}
          duration={2000}
          useNativeDriver={true}>
          <FacebookLogin {...props} />
          <KakaoLogin {...props} />
        </Animatable.View>
      </View>
    </ImageBackground>
  </>
);

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    width: width * 0.2,
    height: height * 0.1,
    top: Platform.OS === 'ios' ? 30 : 15,
    left: 10,
    zIndex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical:90
  },
  container2: {
    paddingHorizontal: '7%',
    paddingTop: '28%',
  },
  loginButton: {
    marginTop: 20,
  },
  password: {
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  passwordFont: {
    fontSize: width * 0.04,
    color: '#B7B9BC',
  },
  and: {
    marginVertical: height * 0.065,
    height: height * 0.025,
    alignItems: 'center',
    flexDirection: 'row',
  },
  andLineLeft: {
    flex: 1,
    width: '100%',
    backgroundColor: '#CCCFD2',
    height: 1,
    marginRight: 4,
  },
  andLineRight: {
    flex: 1,
    width: '100%',
    backgroundColor: '#CCCFD2',
    height: 1,
    marginLeft: 4,
  },
  signUpButton: {
    backgroundColor: 'transparent',
    height: height * 0.07,

    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButton2: {
    width: width * 0.6,
    height: height * 0.07,
    borderRadius: 15,
  },
  signUpText: {
    color: 'white',
    fontSize: width * 0.04,
  },
});

export default Login;
