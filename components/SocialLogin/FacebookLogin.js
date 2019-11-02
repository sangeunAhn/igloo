import React from 'react';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

export default class MasonryList extends React.Component {
  constructor(props) {
    super(props);
  }

  _responseInfoCallback = (error, result) => {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      console.log(result.id);
      this.props.navigation.navigate('Schools', {
        userId: result.id,
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
