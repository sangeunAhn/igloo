import React from 'react';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import * as axios from 'axios';

export default class MasonryList extends React.Component {
  constructor(props) {
    super(props);
  }

  _makeUser = async id => {
    const {navigation} = this.props;

    let formData = new FormData();
    formData.append('id', 'fb' + id);

    // 데이터베이스에 넣기
    await fetch('http://13.209.221.206/php/Login/makeUser.php', {
      method: 'POST',
      body: formData,
      header: {
        'content-type': 'multipart/form-data',
      },
    });

    navigation.navigate('Schools', {
      userId: id,
    });
  };

  _gotoSchool = id => {
    this.props.navigation.navigate('Schools', {
      userId: id,
    });
  };

  _responseInfoCallback = (error, result) => {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      const t = this;
      axios
        .post('http://13.209.221.206/php/Login/ExistId.php', {
          id: 'fb' + result.id,
        })
        .then(function(response) {
          var ms = response.data.message;
          {
            ms === 'true'
              ? t._gotoSchool('fb' + result.id)
              : t._makeUser('fb' + result.id);
          }
        });
    }
  };

  render() {
    return (
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            console.log(result);
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
              const infoRequest = new GraphRequest(
                '/me',
                {
                  parameters: {
                    fields: {
                      string: 'email,name,first_name,last_name,birthday,gender',
                    },
                    access_token: {
                      string: data.accessToken.toString(),
                    },
                  },
                },
                this._responseInfoCallback,
              );
              new GraphRequestManager().addRequest(infoRequest).start();
            });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      />
    );
  }
}
