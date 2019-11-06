import React, {useState} from 'react';
import {
  Text,
  Dimensions,
  Image,
  YellowBox,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import * as axios from 'axios';
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
        getProfile();
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
      .then(async result => {
        await setProfile(result);
        await logCallback(
          `Get Profile Finished:${JSON.stringify(result)}`,
          setProfileLoading(false),
        );
        _existId(result.id);
        _storeData(result.id);
      })
      .catch(err => {
        logCallback(
          `Get Profile Failed:${err.code} ${err.message}`,
          setProfileLoading(false),
        );
      });
  };

  const _storeData = async id => {
    try {
      await AsyncStorage.setItem('userId', 'kakao' + id);
    } catch (error) {
      console.log('스토리지에 ID 저장 안됨.');
    }
  };

  const _makeUser = async id => {
    let formData = new FormData();
    formData.append('id', 'kakao' + id);

    // 데이터베이스에 넣기
    await fetch('http://13.209.221.206/php/Login/makeUser.php', {
      method: 'POST',
      body: formData,
      header: {
        'content-type': 'multipart/form-data',
      },
    });

    props.navigation.navigate('RegisterSchool', {
      userId: id,
    });
  };

  const _gotoSchool = id => {
    props.navigation.navigate('Schools', {
      userId: id,
    });
  };

  const _existId = id => {
    axios
      .post('http://13.209.221.206/php/Login/ExistId.php', {
        id: 'kakao' + id,
      })
      .then(function(response) {
        var ms = response.data.message;
        {
          ms === 'true' ? _gotoSchool('kakao' + id) : _makeUser('kakao' + id);
        }
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
