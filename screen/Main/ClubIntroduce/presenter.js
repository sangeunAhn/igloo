import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import HeaderScrollView from 'react-native-header-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import ImageView from 'react-native-image-view';
import Swiper from 'react-native-swiper';
import {Slider} from 'react-native-elements';
import {Thumbnail, Text} from 'native-base';
import ClubChars from '../../../components/Char/ClubChars';
import MasonryView from '../../../components/Photo/MasonryList';

const {width, height} = Dimensions.get('window');
const ClubIntroduce = props => (
  <>
    <ImageView
      images={[
        {
          source: {
            uri: props.clubMainPicture,
          },
          title: '메인사진',
          width: width,
        },
        {
          source: {
            uri: props.clubLogo,
          },
          title: '로고사진',
          width: width,
          height: width,
        },
      ]}
      imageIndex={props.imageViewIndex}
      isVisible={props.isImageViewVisible}
    />
    {props.isGetting1 && props.isGetting2 ? (
      <Swiper paginationStyle={{bottom:10}} loop={false}>
        <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <SafeAreaView>
              <Ionicons
                name="ios-arrow-back"
                size={width * 0.08}
                color="black"
              />
            </SafeAreaView>
          </TouchableOpacity>
          <ImageBackground
            blurRadius={3}
            source={{uri: props.clubMainPicture}}
            style={{
              alignItems: 'center',
              flex: 1.8,
              width: '100%',
              height: '100%',
            }}
          />
          <View style={{top: -100}}>
            <View
              style={{
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.8,
                shadowRadius: 2,
                position: 'absolute',
                alignSelf: 'center',
                alignItems: 'center',
                elevation: 1,
                backgroundColor: 'white',
                width: width * 0.9,
                height: 200,
                padding: 10,
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  top:-15,
                  height: 90,
                  marginTop: 50,
                  flex: 1,
                  flexDriection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                  {props.clubName}
                </Text>
                <Text >
                  {' '}
                  {props.clubChar.map((char, i) => {
                    return <ClubChars fontSize={14} chars={char} key={i} />;
                  })}
                </Text>
               
              </View>

              <Thumbnail
                source={{uri: props.clubLogo}}
                style={{
                  left: width * 0.45 - 55,
                  position: 'absolute',
                  top: -55,
                  zIndex: 1000,
                  width: 110,
                  height: 110,
                  borderRadius: 60,
                  alignSelf: 'center',
                }}
              />
            </View>
          </View>
          <View style={{top: 110, flex: 3}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginVertical: height * 0.02,
              }}>
              <Text
                style={{
                  color: '#003964',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                소규모
              </Text>
              <Slider
                disabled={true}
                value={props.clubSize}
                style={{width: width * 0.55}}
                minimumTrackTintColor="#A9DFE2"
                maximumTrackTintColor="#D1D5FA"
                thumbTintColor="white"
                thumbStyle={{
                  borderWidth: 3.5,
                  borderColor: '#ADCDE9',
                  width: 18,
                  height: 18,
                  borderRadius: 18 * 0.5,
                }}
                trackStyle={{height: 3}}
              />
              <Text
                style={{
                  color: '#580000',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                대규모
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: width * 0.8,
                height: 0.2,
                backgroundColor: '#D8D8D8',
              }}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginVertical: height * 0.02,
              }}>
              <Text
                style={{
                  color: '#003964',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                자율적인
              </Text>
              <Slider
                disabled={true}
                value={props.clubAutonomous}
                style={{width: width * 0.55}}
                minimumTrackTintColor="#A9DFE2"
                maximumTrackTintColor="#D1D5FA"
                thumbTintColor="white"
                thumbStyle={{
                  borderWidth: 3.5,
                  borderColor: '#ADCDE9',
                  width: 18,
                  height: 18,
                  borderRadius: 18 * 0.5,
                }}
                trackStyle={{height: 3}}
              />
              <Text
                style={{
                  color: '#580000',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                체계적인
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: width * 0.8,
                height: 0.2,
                backgroundColor: '#D8D8D8',
              }}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginVertical: height * 0.02,
              }}>
              <Text
                style={{
                  color: '#003964',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                재미있는
              </Text>
              <Slider
                disabled={true}
                value={props.clubFunny}
                style={{width: width * 0.55}}
                minimumTrackTintColor="#A9DFE2"
                maximumTrackTintColor="#D1D5FA"
                thumbTintColor="white"
                thumbStyle={{
                  borderWidth: 3.5,
                  borderColor: '#ADCDE9',
                  width: 18,
                  height: 18,
                  borderRadius: 18 * 0.5,
                }}
                trackStyle={{height: 3}}
              />
              <Text
                style={{
                  color: '#580000',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                진지한
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: width * 0.8,
                height: 0.2,
                backgroundColor: '#D8D8D8',
              }}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginVertical: height * 0.02,
              }}>
              <Text
                style={{
                  color: '#003964',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                친목도모
              </Text>
              <Slider
                disabled={true}
                value={props.clubFriendship}
                style={{width: width * 0.55}}
                minimumTrackTintColor="#A9DFE2"
                maximumTrackTintColor="#D1D5FA"
                thumbTintColor="white"
                thumbStyle={{
                  borderWidth: 3.5,
                  borderColor: '#ADCDE9',
                  width: 18,
                  height: 18,
                  borderRadius: 18 * 0.5,
                }}
                trackStyle={{height: 3}}
              />
              <Text
                style={{
                  color: '#580000',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                활동중심
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: width * 0.8,
                height: 0.2,
                backgroundColor: '#D8D8D8',
              }}
            />
          </View>
        </View>
        <View style={{flex: 1}}>
        <TouchableOpacity
                style={styles.backBtn}
                onPress={() => {
                  props.navigation.goBack();
                }}>
                <SafeAreaView>
                  <Ionicons
                    name="ios-arrow-back"
                    size={width * 0.08}
                    color="black"
                  />
                </SafeAreaView>
              </TouchableOpacity>
          <View >
            <Text style={{fontSize:width * 0.05, fontWeight:'bold', marginTop:50, marginLeft:15}}>모임 소개</Text>
          </View>
          <ScrollView style={styles.introBox} nestedScrollEnabled={true}>
            <Text style={{paddingVertical: 15, paddingHorizontal: 10}}>
              {props.clubIntroduce}
            </Text>
          </ScrollView>
          <Text style={{fontSize:width * 0.05, fontWeight:'bold', marginTop:30, marginLeft:15, top:-30}}> 연락 가능 연락처 </Text>
          <View style={styles.phone}>
              <Text style={{paddingVertical: 15, paddingHorizontal: 10}}>
                {props.clubPhoneNumber}
              </Text>
          </View>
        </View>
        <>
          {props.recordIsGetting ? (
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.backBtn}
                onPress={() => {
                  props.navigation.goBack();
                }}>
                <SafeAreaView>
                  <Ionicons
                    name="ios-arrow-back"
                    size={width * 0.08}
                    color="black"
                  />
                </SafeAreaView>
              </TouchableOpacity>
              <View style={styles.container}>
                <HeaderScrollView
                  containerStyle={{backgroundColor: '#FAFAFA'}}
                  headerContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...ifIphoneX({paddingTop: 18}, {paddingTop: 0}),
                    height:
                      Platform.OS === 'ios' ? height * 0.1 : height * 0.08,
                  }}
                  headlineStyle={{
                    height: height * 0.1,
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    fontSize: width * 0.05,
                    paddingTop:
                      Platform.OS === 'ios' ? height * 0.055 : height * 0.048,
                  }}
                  headerComponentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: height * 0.08,
                  }}
                  titleStyle={{
                    // paddingTop: Platform.OS === 'ios' ? 15 : 0,
                    color: '#3B3B3B',
                    fontSize: width * 0.075,
                    marginBottom:10
                  }}
                  fadeDirection="up"
                  title="동아리 기록">
                  {props.imageRoom.length === 0 ? (
                    <>
                      <View style={styles.noImageView}>
                        <Text style={styles.noImageText}>
                          활동 사진이 없습니다.
                        </Text>
                      </View>
                    </>
                  ) : (
                    <MasonryView {...props} />
                  )}
                </HeaderScrollView>
              </View>
            </View>
          ) : (
            <View style={styles.loading}>
              <ActivityIndicator size="large" />
            </View>
          )}
        </>
      </Swiper>
    ) : (
      <ActivityIndicator size="large" style={styles.activityIndicator} />
    )}
  </>
);

const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    width: width * 0.2,
    height: height * 0.1,
    top: Platform.OS === 'ios' ? 30 : 15,
    left: width * 0.028,
    zIndex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  chars: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.8,
    marginTop: height * 0.05,
  },
  blank: {
    width: width,
    height: height * 0.03,
  },
  MainPictureView: {
    alignItems: 'center',
    marginTop: height * 0.007,
    marginHorizontal: width * 0.05,
  },
  logoView1: {
    alignItems: 'center',
    top: -height * 0.036,
    zIndex: 1,
  },
  logoView2: {
    width: height * 0.15,
    height: height * 0.15,
    top: -height * 0.036,
    zIndex: 1,
    borderRadius: height * 0.15 * 0.5,
  },
  clubLogo: {
    backgroundColor: '#ADCDE9',
    width: height * 0.15,
    height: height * 0.15,
    borderRadius: height * 0.15 * 0.5,
    borderWidth: 0.2,
    borderColor: '#9F9F9F',
  },
  input: {
    borderRadius: 8,
    width: '100%',

    backgroundColor: 'white',
    shadowColor: '#E1E1E1',
    shadowOffset: {height: 1.5, width: 0},
    shadowOpacity: 5,
    shadowRadius: 3,
    elevation: 1.5,
    marginTop: 5,
  },
  text: {
    color: '#ADCDE9',
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },
  text1: {
    color: '#ADCDE9',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    paddingHorizontal: width * 0.05,
  },
  textIn: {
    flex: 1,
    padding: 7,
    fontSize: width * 0.04,
  },
  block: {
    paddingBottom: 30,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  clubMainPicture: {
    marginTop: 5,
    width: width,
    height: height * 0.35,
    borderRadius: 5,
    backgroundColor: '#CEE1F2',
  },
  noImageView: {
    width: width,
    paddingTop: height * 0.01,
    height: height * 0.6,
    justifyContent: 'center',
    alignContent: 'center',
  },
  noImageText: {
    fontSize: width * 0.035,
    color: '#BBBBBB',
    textAlign: 'center',
    alignSelf: 'center',
  },
  loading: {
    width,
    height: height * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  introBox: {
    borderRadius: 5,
    backgroundColor: 'white',
    top: 0,
    marginBottom: width * 0.05,
    marginTop:width*0.04,
    marginHorizontal: width * 0.07,
    shadowColor: '#E1E1E1',
    shadowOffset: {height: 1.5, width: 0},
    shadowOpacity: 5,
    shadowRadius: 3,
    elevation: 1.5,
  },
  phone:{
    top:-30,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: width * 0.13,
    marginTop:width*0.04,
    marginHorizontal: width * 0.07,
    shadowColor: '#E1E1E1',
    shadowOffset: {height: 1.5, width: 0},
    shadowOpacity: 5,
    shadowRadius: 3,
    elevation: 1.5,
    width:'85%',
    height:40
  }
});

export default ClubIntroduce;
