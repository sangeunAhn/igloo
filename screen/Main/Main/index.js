import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Platform,
  BackHandler,
  SafeAreaView,
  Text,
} from 'react-native';
import ClubDiv from '../../../components/Main/ClubDiv';
import HeaderScrollView from 'react-native-header-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import * as axios from 'axios';

const {width, height} = Dimensions.get('window');

export default class Main extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    header: null,
  });
  constructor(props) {
    super(props);
    this._handleBackButtonClick = this._handleBackButtonClick.bind(this);
  }

  UNSAFE_componentWillMount = () => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this._handleBackButtonClick,
    );
  };

  UNSAFE_componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this._handleBackButtonClick,
    );
  }

  _handleBackButtonClick = () => {
    this.props.navigation.navigate('Schools');
    return true;
  };

  _goToUpdateClub = () => {
    const {navigation} = this.props;
    const userNo = navigation.getParam('userNo', 'NO-ID');
    navigation.navigate('UpdateClub', {
      userNo,
    });
  };

  _goToCreateClub = () => {
    const {navigation} = this.props;
    const userNo = navigation.getParam('userNo', 'NO-ID');
    const school = navigation.getParam('schoolName', 'NO-ID');

    navigation.navigate('MakeClub', {
      userNo,
      school,
    });
  };

  _ExistClub = () => {
    const {navigation} = this.props;
    const userNo = navigation.getParam('userNo', 'NO-ID');
    var t = this;
    axios
      .post('http://13.209.221.206/php/MakeClub/GetClubExist.php', {
        userNo,
      })
      .then(function(response) {
        console.log(response.data.message);
        var result = response.data.message;
        if (result === 'true') {
          t._goToUpdateClub();
        } else {
          t._goToCreateClub();
        }
      });
  };

  render() {
    const {navigation} = this.props;
    const schoolName = navigation.getParam('schoolName', 'NO-ID');
    const userSchool = navigation.getParam('userSchool', 'NO-ID');
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' ? (
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => {
              this.props.navigation.navigate('Schools');
            }}>
            <SafeAreaView>
              <Ionicons
                name="ios-arrow-back"
                size={width * 0.08}
                color="black"
              />
            </SafeAreaView>
          </TouchableOpacity>
        ) : (
          <></>
        )}
        <HeaderScrollView
          headerContainerStyle={styles.headerContainerStyle}
          headlineStyle={styles.headlineStyle}
          headerComponentContainerStyle={styles.headerComponentContainerStyle}
          titleStyle={styles.titleStyle}
          fadeDirection="up"
          title="동아리 찾기">
          <ClubDiv clubKind={'예술 공연'} school={schoolName} {...this.props} />
          <ClubDiv clubKind={'예술 교양'} school={schoolName} {...this.props} />
          <ClubDiv clubKind={'체육 구기'} school={schoolName} {...this.props} />
          <ClubDiv clubKind={'체육 생활'} school={schoolName} {...this.props} />
          <ClubDiv clubKind={'봉사'} school={schoolName} {...this.props} />
          <ClubDiv clubKind={'국제'} school={schoolName} {...this.props} />
          <ClubDiv clubKind={'종교'} school={schoolName} {...this.props} />
          <ClubDiv clubKind={'학술'} school={schoolName} {...this.props} />
          <ClubDiv clubKind={'기타'} school={schoolName} {...this.props} />
        </HeaderScrollView>
        {schoolName === userSchool ? (
          <TouchableOpacity style={styles.addButton} onPress={this._ExistClub}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    width: width * 0.2,
    height: height * 0.1,
    top: Platform.OS === 'ios' ? 30 : 15,
    left: 10,
    zIndex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    paddingTop: 23,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: width * 0.05,
  },
  scroll: {
    flex: 1,
    paddingTop: 10,
  },
  div: {
    height: height * 0.1,
    // backgroundColor:'#dcdcdc',
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  school: {
    fontSize: width * 0.06,
  },
  navTitle: {
    color: 'black',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 30,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  headerContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    ...ifIphoneX({paddingTop: 18}, {paddingTop: 0}),
    height: Platform.OS === 'ios' ? height * 0.1 : height * 0.08,
  },
  headlineStyle: {
    height: height * 0.1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: width * 0.05,
    paddingTop: Platform.OS === 'ios' ? height * 0.055 : height * 0.048,
  },
  headerComponentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.08,
  },
  titleStyle: {
    // paddingTop: Platform.OS === 'ios' ? 15 : 0,
    color: '#3B3B3B',
    fontSize: width * 0.075,
  },
  addButton: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    borderWidth: 1,
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  plusText: {
    fontSize: 30,
    color: 'white',
  },
});
