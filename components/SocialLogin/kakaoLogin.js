import React, {useState} from 'react';
import {
  Text,
  Dimensions,
  Image,
  YellowBox,
  TouchableOpacity,
} from 'react-native';

import KakaoLogins from '@react-native-seoul/kakao-login';

const {width, height} = Dimensions.get('window');

if (!KakaoLogins) {
  console.error('Module is Not Linked');
}

const logCallback = (log, callback) => {
  console.log(log);
  callback;
};

const TOKEN_EMPTY = 'token has not fetched';
const PROFILE_EMPTY = {
  id: 'profile has not fetched',
  email: 'profile has not fetched',
  profile_image_url: '',
};

export default function App(props) {
  const [loginLoading, setLoginLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);

  const [token, setToken] = useState(TOKEN_EMPTY);
  const [profile, setProfile] = useState(PROFILE_EMPTY);

  const kakaoLogin = () => {
    logCallback('Login Start', setLoginLoading(true));

    KakaoLogins.login()
      .then(result => {
        setToken(result.accessToken);
        logCallback(
          `Login Finished:${JSON.stringify(result)}`,
          setLoginLoading(false),
        );

        logCallback('Get Profile Start', setProfileLoading(true));

        KakaoLogins.getProfile()
          .then(async result => {
            await setProfile(result);
            await logCallback(
              `Get Profile Finished:${JSON.stringify(result)}`,
              setProfileLoading(false),
            );
            props.navigation.navigate('Schools', {
              userId: result.id,
            });
          })
          .catch(err => {
            logCallback(
              `Get Profile Failed:${err.code} ${err.message}`,
              setProfileLoading(false),
            );
          });
      })
      .catch(err => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          logCallback(`Login Cancelled:${err.message}`, setLoginLoading(false));
        } else {
          logCallback(
            `Login Failed:${err.code} ${err.message}`,
            setLoginLoading(false),
          );
        }
      });
  };

  const getProfile = () => {
    logCallback('Get Profile Start', setProfileLoading(true));

    KakaoLogins.getProfile()
      .then(result => {
        setProfile(result);
        logCallback(
          `Get Profile Finished:${JSON.stringify(result)}`,
          setProfileLoading(false),
        );
      })
      .catch(err => {
        logCallback(
          `Get Profile Failed:${err.code} ${err.message}`,
          setProfileLoading(false),
        );
      });
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#F7E314',
        width: width * 0.55,
        height: height * 0.06,
      }}
      onPress={kakaoLogin}>
      <Image
        style={{width: width * 0.1, height: height * 0.04}}
        source={require('../../images/kakao.png')}
      />
      <Text style={{color: '#3C1E1E', fontWeight: 'bold'}}>
        카카오톡으로 로그인
      </Text>
    </TouchableOpacity>
  );
}

YellowBox.ignoreWarnings(['source.uri']);
