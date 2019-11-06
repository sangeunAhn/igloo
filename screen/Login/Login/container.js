import React, {useState} from 'react';
import {Alert, Animated} from 'react-native';
import * as axios from 'axios';
import Login from './presenter';
import {AsyncStorage} from 'react-native';

class Container extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
      value: new Animated.Value(0),
      position: new Animated.ValueXY({x: 0, y: 400}),
    };
  }
  componentDidMount() {
    this._moveX();
    this._retrieveData();
  }

  render() {
    return (
      <Login
        {...this.props}
        login={this._login}
        idPwFind={this._idPwFind}
        signUp={this._signUp}
        idChange={this._idChange}
        pwChange={this._pwChange}
        fadeIn={this._fadeIn}
        getStyle={this._getStyle}
        moveX={this._moveX}
      />
    );
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userId');
      if (value !== null) {
        console.log('스토리지에 있는 데이터 =', value);
        this.props.navigation.navigate('Schools', {
          userId: value,
        });
      }
    } catch (error) {
      console.log('스토리지에 데이터가 없습니다.');
    }
  };

  _moveX = () => {
    Animated.decay(this.state.position, {
      toValue: {x: 0, y: 1},
      velocity: 0.1,
      // deceleration : 0.1
    }).start();
  };

  _getStyle = () => {
    return {
      transform: [{translateY: this.state.position.y}],
    };
  };

  _goToUpdateClub = () => {
    const t = this;
    const {id} = this.state;

    axios
      .post('http://13.209.221.206/php/Login/GetUserNo.php', {
        id,
      })
      .then(function(response) {
        var userNo = response.data.message.userNo;
        t.props.navigation.navigate('UpdateClub', {
          userNo: userNo,
        });
      });
  };

  _goToCreateClub = () => {
    const t = this;
    const {id} = this.state;

    axios
      .post('http://13.209.221.206/php/Login/GetUserNo.php', {
        id,
      })
      .then(function(response) {
        var userNo = response.data.message.userNo;
        var school = response.data.message.school;
        setTimeout(() => {
          t.props.navigation.navigate(
            'MakeClub',
            {
              userNo: userNo,
              school: school,
            },
            1000,
          );
        });
      });
  };

  _getClub = () => {
    const {id} = this.state;
    const t = this;
    axios
      .post('http://13.209.221.206/php/Login/LoginGetClub.php', {
        id,
      })
      .then(function(response) {
        var ms = response.data.message;
        {
          ms === 'true' ? t._goToUpdateClub() : t._goToCreateClub();
        }
      });
  };

  _getIdPw = () => {
    const {id, password} = this.state;
    const t = this;
    axios
      .post('http://13.209.221.206/php/Login/Login.php', {
        id,
        password,
      })
      .then(function(response) {
        var login = response.data.message;

        if (login === 'true') {
          t._getClub();
        } else {
          Alert.alert('ID나 비밀번호가 맞지 않습니다.');
        }
      });
  };

  _login = () => {
    const {id, password} = this.state;
    if (id === '' || password === '') {
      Alert.alert('아이디와 비밀번호를 입력해주세요.');
    } else {
      this._getIdPw();
    }
  };
}

export default Container;
