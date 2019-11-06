import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  Text,
} from 'react-native';
import ClubDiv from '../../../components/Main/ClubDiv';
import HeaderScrollView from 'react-native-header-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/Entypo';
import * as axios from 'axios';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const {width, height} = Dimensions.get('window');

export default class Main extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    header: null,
  });
  constructor(props) {
    super(props);
    this.state = {
      kindsOrder: [],
      collapseArray: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      existClub: '생성',
    };
  }

  UNSAFE_componentWillMount = () => {
    this._KindsOrder();
    this._ExistClub();
  };

  _KindsOrder = () => {
    var kinds = [
      '학술/교양',
      '예술/문화/공연',
      '체육',
      '취업',
      '창업',
      '기타',
      '봉사/사회',
      '어학',
      '친목',
      '오락/게임',
    ];
    var kindsOrder = [];
    let someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    someArray.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    for (var i = 0; i < 10; i++) {
      kindsOrder.push(kinds[someArray[i] - 1]);
    }
    this.setState({kindsOrder});
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
        var result = response.data.message;
        if (result === 'true') {
          t.setState({existClub: '수정'});
        } else {
          t.setState({existClub: '생성'});
        }
      });
  };

  render() {
    const {navigation} = this.props;
    const {kindsOrder, collapseArray} = this.state;
    const t = this;
    const schoolName = navigation.getParam('schoolName', 'NO-ID');
    const userSchool = navigation.getParam('userSchool', 'NO-ID');
    console.log(schoolName, userSchool);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            this.props.navigation.navigate('Schools');
          }}>
          <SafeAreaView>
            <Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
          </SafeAreaView>
        </TouchableOpacity>
        {schoolName === userSchool ? (
          <Menu
            style={{
              position: 'absolute',
              right: -3,
              top: Platform.OS === 'ios' ? 35 : 15,
              zIndex: 1,
              // backgroundColor: 'red',
            }}>
            <MenuTrigger
              style={{
                padding: 13,
              }}>
              <SafeAreaView>
                <Icon name="dots-three-horizontal" size={20} />
              </SafeAreaView>
            </MenuTrigger>
            <MenuOptions
              optionsContainerStyle={{
                marginTop: 20,
                borderRadius: 10,
                width: 100,
                height: 40,
                justifyContent: 'center',
              }}>
              {this.state.existClub === '생성' ? (
                <MenuOption
                  value={1}
                  onSelect={this._goToCreateClub}
                  text="모임 생성"
                />
              ) : (
                <MenuOption
                  value={1}
                  onSelect={this._goToUpdateClub}
                  text="모임 수정"
                />
              )}
            </MenuOptions>
          </Menu>
        ) : (
          <></>
        )}

        <HeaderScrollView
          headerContainerStyle={styles.headerContainerStyle}
          headlineStyle={styles.headlineStyle}
          headerComponentContainerStyle={styles.headerComponentContainerStyle}
          titleStyle={styles.titleStyle}
          fadeDirection="up"
          scrollViewProps={{showsVerticalScrollIndicator: false}}
          title={schoolName}>
          {kindsOrder.map((kinds, i) => {
            return (
              <Collapse
                isCollapsed={collapseArray[i]}
                onToggle={isCollapsed =>
                  this.setState(collapseArray.splice(i, 1, isCollapsed))
                }>
                <CollapseHeader>
                  <View style={{paddingHorizontal: width * 0.03}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={styles.menuTitle}>{kinds}</Text>
                      {collapseArray[i] === true ? (
                        <Ionicons
                          style={{alignSelf: 'flex-end', marginBottom: -2}}
                          name="ios-arrow-up"
                          size={23}
                          color="#a7bfe8"
                        />
                      ) : (
                        <Ionicons
                          style={{alignSelf: 'flex-end', marginBottom: -2}}
                          name="ios-arrow-down"
                          size={23}
                          color="#a7bfe8"
                        />
                      )}
                    </View>
                    <View
                      style={{
                        alignItems: 'flex-end',
                        marginBottom: height * 0.032,
                      }}>
                      <View style={styles.line} />
                    </View>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <ClubDiv
                    key={i}
                    clubKind={kinds}
                    school={schoolName}
                    {...this.props}
                  />
                </CollapseBody>
              </Collapse>
            );
          })}
        </HeaderScrollView>
        {/* {schoolName === userSchool ? (
          <TouchableOpacity style={styles.addButton} onPress={this._ExistClub}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )} */}
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
  headerRight: {
    position: 'absolute',
    right: 0,
    zIndex: 1,
  },
  menuTitle: {
    paddingTop: height * 0.015,
    fontWeight: 'bold',
    color: '#ADCDE9',
    fontSize: height * 0.03,
  },
  line: {
    borderBottomWidth: height * 0.001,
    borderColor: '#ADCDE9',
    width: '85%',
    alignItems: 'flex-end',
  },
});
