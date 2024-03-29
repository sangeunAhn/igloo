import React from 'react';
import {StyleSheet, View, Dimensions, Text, Platform} from 'react-native';
import SchoolBtn from '../../../components/Button/SchoolBtn';

const {width, height} = Dimensions.get('window');

const RegisterSchool = props => (
  <>
    <View style={styles.container}>
      <Text style={styles.title}>학교 등록</Text>
      <Text style={styles.explanation}>※ 본인의 학교를 선택해주세요.</Text>
      <View style={{flexDirection: 'column', height: height * 0.83}}>
        <View style={styles.schools}>
          <SchoolBtn
            school={'상언대학교'}
            backgroundColor={'white'}
            lineColor={'#34495e'}
            onPress={props.AAPress}
          />
          <SchoolBtn
            school={'강민대학교'}
            backgroundColor={'white'}
            lineColor={'#e67e22'}
            onPress={props.BBPress}
          />
        </View>
        <View style={styles.schools1} />
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
  },
  explanation: {
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    marginTop: Platform.OS === 'ios' ? height * 0.1 : height * 0.07,
    marginLeft: width * 0.05,
    marginBottom: height * 0.02,
    fontSize: width * 0.07,
    fontWeight: '700',
  },
  schools: {
    flex: 1,
    marginHorizontal: width * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  schools1: {
    flex: 1,
    marginHorizontal: width * 0.03,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    left: width * 0.04,
  },
});
// module.exports = Schools;
export default RegisterSchool;
