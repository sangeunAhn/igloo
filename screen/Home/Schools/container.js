import React from 'react';
import Schools from './presenter';
import * as axios from 'axios';
import {BackHandler} from 'react-native';

class Container extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this._handleBackButtonClick = this._handleBackButtonClick.bind(this);
    this.state = {
      userSchool: '',
      userNo: '',
    };
  }

  UNSAFE_componentWillMount = () => {
    this._getUserData();
    BackHandler.addEventListener(
      'hardwareBackPress',
      this._handleBackButtonClick,
    );
  };

  _handleBackButtonClick = () => {
    return true;
  };

  render() {
    return (
      <Schools
        {...this.props}
        AAPress={this._AAPress}
        BBPress={this._BBPress}
        CCPress={this._CCPress}
        onSwipeRight={this._onSwipeRight}
      />
    );
  }

  _getUserData = () => {
    const {navigation} = this.props;
    var t = this;
    const userId = navigation.getParam('userId', 'NO-ID');
    axios
      .post('http://13.209.221.206/php/Main/GetUserData.php', {
        id: userId,
      })
      .then(function(response) {
        var userNo = response.data.message.userNo;
        var userSchool = response.data.message.school;
        t.setState({
          userNo,
          userSchool,
        });
      });
  };

  _AAPress = () => {
    const {userSchool, userNo} = this.state;
    const {navigation} = this.props;
    navigation.navigate('Main', {
      schoolName: '상언대학교',
      userSchool,
      userNo,
    });
  };

  _BBPress = () => {
    const {userSchool, userNo} = this.state;
    const {navigation} = this.props;
    navigation.navigate('Main', {
      schoolName: '강민대학교',
      userSchool,
      userNo,
    });
  };

  _CCPress = () => {
    this.props.navigation.navigate('Main', {
      schoolName: 'CC대학교',
    });
  };
}

export default Container;
