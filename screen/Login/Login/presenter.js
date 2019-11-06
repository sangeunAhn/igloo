import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import KakaoLogin from '../../../components/SocialLogin/kakaoLogin';
import FacebookLogin from '../../../components/SocialLogin/FacebookLogin';
import Modal from "react-native-simple-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';


const {width, height} = Dimensions.get('window');

const Login = props => (
 
  <>
    <ImageBackground
      imageStyle={{opacity: 0.9}}
      style={{backgroundColor: 'gray ', flex: 1, alignSelf: 'stretch'}}
      source={require('../../../images/bg.jpg')}>
      <View style={styles.container}>
        <Animatable.Text
          animation="fadeInUp"
          duration={3500}
          useNativeDriver={true}
          style={{lineHeight: 55, color: 'white', fontSize: width * 0.1}}>
          대학교 모임이 {'\n'}궁금할땐?
        </Animatable.Text>

        <Animatable.View
          style={{marginTop: height * 0.2, alignItems: 'center'}}
          animation="fadeIn"
          delay={3000}
          duration={2000}
          useNativeDriver={true}>
          <FacebookLogin {...props} />
          <KakaoLogin {...props} />
        </Animatable.View>
      </View>
      <View style={{flexDirection:'row',flexWrap:'wrap', justifyContent:'center', paddingHorizontal:30, bottom:10}}>
      <Text style={{fontSize:11}}>
        SNS 계정으로 로그인 시, SNS 계정 연동에 대한 </Text>
        <TouchableOpacity onPress={props.openModal1} ><Text style={{color:'blue', fontSize:11, fontWeight:'bold'}}>이용약관</Text></TouchableOpacity>
        <Text style={{fontSize:11}}> 및 </Text>
        <TouchableOpacity onPress={props.openModal2} ><Text style={{color:'blue', fontSize:11, fontWeight:'bold'}}>개인정보 처리방침</Text></TouchableOpacity>
        <Text style={{fontSize:11}}>에 동의하시는 것으로 간주됩니다.
      </Text>
      </View>
    </ImageBackground>
    <Modal
      modalDidClose={props.modalDidClose1}
        open={props.open1}
        closeOnTouchOutside={true}
        modalStyle={{
          borderRadius: 3,
          backgroundColor: "#F5F5F5",
          height:height*0.8
          }}
        >
          <View style={{marginTop:10,marginBottom:15, marginHorizontal:10}}>
          <View style={{justifyContent:'center'}}>
             <TouchableOpacity style={{position:'absolute', right:0,width:30,height:30}}onPress={props.modalDidClose1}>
             <Ionicons style={{position:'absolute', right:0}} name="ios-close" size={30} color="black" />
             </TouchableOpacity>
             <Text style={{fontSize:20,textAlign:'center', alignSelf:'center'}}>
               이용약관
             </Text>
             </View>
             <View style={{borderBottomWidth:0.5, borderBottomColor:'gray', marginVertical:5}}/>
           <ScrollView>
             
             <Text>
             제 1 장 환영합니다!
{'\n'}
제 1 조 (목적)
{'\n'}
2gloo(이하 ‘회사’)가 제공하는 서비스를 이용해 주셔서 감사합니다. 회사는 여러분이 다양한 인터넷과 모바일 서비스를 좀 더 편리하게 이용할 수 있도록 회사 또는 관계사의 개별 서비스에 모두 접속 가능한 통합로그인계정 체계를 만들고 그에 적용되는 '2gloo계정 약관(이하 '본 약관')을 마련하였습니다. 본 약관은 여러분이 2gloo계정 서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건 및 절차 등 기본적인 사항을 규정하고 있으므로 주의 깊게 읽어주시기 바랍니다.
{'\n'}{'\n'}

제 2 조 (약관의 효력 및 변경)
{'\n'}
①본 약관의 내용은 2gloo계정 웹사이트 또는 개별 서비스의 화면에 게시하거나 기타의 방법으로 공지하고, 본 약관에 동의한 여러분 모두에게 그 효력이 발생합니다.
{'\n'}
②회사가 전항에 따라 공지 또는 통지를 하면서 공지 또는 통지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 여러분의 의사표시가 없는 경우에는 변경된 약관을 승인한 것으로 봅니다. 여러분이 개정약관에 동의하지 않을 경우 여러분은 이용계약을 해지할 수 있습니다.
{'\n'}
{'\n'}
제 3 조 (약관 외 준칙)
{'\n'}
본 약관에 규정되지 않은 사항에 대해서는 관련법령 또는 회사가 정한 개별 서비스의 이용약관, 운영정책 및 규칙 등(이하 ‘세부지침’)의 규정에 따릅니다.
{'\n'}
{'\n'}
제 4 조 (용어의 정의)
{'\n'}
①본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
{'\n'}
1.2gloo계정: 회사 또는 관계사가 제공하는 개별 서비스를 하나의 로그인계정과 비밀번호로 회원 인증, 회원정보 변경, 회원 가입 및 탈퇴 등을 관리할 수 있도록 회사가 정한 로그인계정 정책을 말합니다.
{'\n'}
2.회원: 2gloo계정이 적용된 개별 서비스 또는 2gloo계정 웹사이트에서 본 약관에 동의하고, 2gloo계정을 이용하는 자를 말합니다.
{'\n'}
3.개별 서비스: 2gloo계정을 이용하여 접속 가능한 회사 또는 관계사가 제공하는 서비스를 말합니다. 개별 서비스는 추후 추가/변동될 수 있으며 서비스가 추가/변동될 때에는 2gloo 기업사이트에 변경 사항을 게시합니다.
{'\n'}
4.2gloo계정 정보 : 2gloo계정을 이용하기 위해 회사가 정한 필수 내지 선택 입력 정보로서 2gloo계정 웹사이트 또는 개별 서비스 내 2gloo계정 설정 화면을 통해 정보 확인, 변경 처리 등을 관리할 수 있는 회원정보 항목을 말합니다.
{'\n'}
{'\n'}
제 2 장 2gloo계정 이용계약
{'\n'}
제 5 조 (계약의 성립)
{'\n'}
①2gloo계정 이용 신청은 모바일 앱 서비스 회원가입 화면에서 여러분이 2gloo계정 정보에 일정 정보를 입력하는 방식으로 이루어집니다.
{'\n'}
②2gloo계정 이용계약은 여러분이 본 약관의 내용에 동의한 후 본 조 제1항에서 정한 이용신청을 하면 회사가 입력된 일정 정보를 인증한 후 가입을 승낙함으로써 체결됩니다.
{'\n'}
{'\n'}
제 6 조 (2gloo계정 이용의 제한)
{'\n'}
①제5조에 따른 가입 신청자에게 회사는 원칙적으로 2gloo계정의 이용을 승낙합니다. 다만, 회사는 아래 각 호의 경우에는 그 사유가 해소될 때까지 승낙을 유보하거나 승낙하지 않을 수 있습니다.
{'\n'}
1.회사가 본 약관 또는 세부지침에 의해 여러분의 2gloo계정을 삭제하였던 경우
{'\n'}
2.여러분이 다른 사람의 명의나 이메일 주소 등 개인정보를 이용하여 2gloo계정을 생성하려 한 경우
{'\n'}
3.2gloo계정 생성 시 필요한 정보를 입력하지 않거나 허위의 정보를 입력한 경우
{'\n'}
4.제공 서비스 설비 용량에 현실적인 여유가 없는 경우
{'\n'}
5.서비스 제공을 위한 기술적인 부분에 문제가 있다고 판단되는 경우
{'\n'}
6.기타 회사가 재정적, 기술적으로 필요하다고 인정하는 경우
{'\n'}
7.회사로부터 회원자격정지 조치 등을 받은 회원이 그 조치기간에 이용계약을 임의로 해지하고 재이용을 신청하는 경우
{'\n'}
8.기타 관련법령에 위배되거나 세부지침 등 회사가 정한 기준에 반하는 경우
{'\n'}
②만약, 여러분이 위 조건에 위반하여 2gloo계정을 생성한 것으로 판명된 때에는 회사는 즉시 여러분의 2gloo계정 이용을 정지시키거나 2gloo계정을 삭제하는 등 적절한 제한을 할 수 있습니다.
{'\n'}
{'\n'}
제 3 장 2gloo계정 이용
{'\n'}
제 7 조 (2gloo계정 제공)
{'\n'}
①회사가 개별 서비스와 연동하여 2gloo계정에서 제공하는 서비스(이하 “2gloo계정 서비스” 또는 “서비스”) 내용은 아래와 같습니다.
{'\n'}
1.로그인 : “회사”의 서비스 이용을 위해서는 회원 가입이 필요합니다. 2gloo 앱을 통해 회원가입을 진행할 수 있으며, SNS(페이스북, 카카오) ID를 연동하여 이용할 수 있습니다.
{'\n'}
2.2gloo계정 정보 관리 : 개별 서비스 이용을 위해 2gloo계정 정보를 통합 관리합니다. 또한, 여러분이 이용하고자 하는 개별 서비스의 유형에 따라 전문기관을 통한 실명확인 및 본인인증을 요청할 수 있고, 이를 2gloo계정 정보로 저장합니다.
{'\n'}
3.기타 회사가 제공하는 서비스
{'\n'}
②회사는 더 나은 2gloo계정 서비스의 제공을 위하여 여러분에게 서비스의 이용과 관련된 각종 고지, 관리 메시지 및 기타 광고를 비롯한 다양한 정보를 서비스화면 내에 표시하거나 여러분의 이메일로 전송할 수 있습니다. 광고성 정보 전송의 경우에는 사전에 수신에 동의한 경우에만 전송합니다.
{'\n'}
{'\n'}
제 8 조 (2gloo계정 서비스의 변경 및 종료)
{'\n'}
①회사는 2gloo계정 서비스를 365일, 24시간 쉬지 않고 제공하기 위하여 최선의 노력을 다합니다. 다만, 아래 각 호의 경우 2gloo계정 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.
{'\n'}
1.2gloo계정 서비스용 설비의 유지·보수 등을 위한 정기 또는 임시 점검의 경우
{'\n'}
2.정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 2gloo계정 이용에 지장이 있는 경우
{'\n'}
3.관계사와의 계약 종료, 정부의 명령/규제 등 회사의 제반 사정으로 2gloo계정 서비스를 유지할 수 없는 경우
{'\n'}
4.기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우
{'\n'}
①전항에 의한 2gloo계정 서비스 중단의 경우에는 미리 제12조에서 정한 방법으로 여러분에게 통지 내지 공지하겠습니다. 다만, 회사로서도 예측할 수 없거나 통제할 수 없는 사유(회사의 과실이 없는 디스크 내지 서버 장애, 시스템 다운 등)로 인해 사전 통지 내지 공지가 불가능한 경우에는 그러하지 아니합니다. 이러한 경우에도 회사가 상황을 파악하는 즉시 최대한 빠른 시일 내에 서비스를 복구하도록 노력하겠습니다.
{'\n'}
②여러분에게 중대한 영향을 미치는 서비스의 변경 사항이나 종료는 2gloo계정에 등록된 이메일 주소로 이메일(이메일주소가 없는 경우 서비스 내 전자쪽지 발송, 서비스 내 알림 메시지를 띄우는 등의 별도의 전자적 수단) 발송 또는 여러분이 등록한 휴대폰번호로 문자메시지 발송하는 방법 등으로 개별적으로 알려 드리겠습니다.
{'\n'}
{'\n'}
제 9 조 (2gloo계정 관리)
{'\n'}
①2gloo계정은 여러분 본인만 이용할 수 있으며, 다른 사람이 여러분의 2gloo계정을 이용하도록 허락할 수 없습니다. 그리고 여러분은 다른 사람이 여러분의 2gloo계정을 무단으로 사용할 수 없도록 직접 비밀번호를 관리하여야 합니다. 회사는 다른 사람이 여러분의 2gloo계정을 무단으로 사용하는 것을 막기 위하여 비밀번호 입력 및 추가적인 본인 확인 절차를 거치도록 할 수 있습니다. 만약 무단 사용이 발견된다면, 고객센터를 통하여 회사에게 알려주시기 바라며, 회사는 무단 사용을 막기 위한 방법을 여러분에게 안내하도록 하겠습니다.
{'\n'}
②여러분은 2gloo계정 모바일 앱 서비스 내 2gloo계정 설정 화면을 통하여 여러분의 2gloo계정 정보를 열람하고 수정할 수 있습니다. 다만, 2gloo계정 서비스의 제공 및 관리를 위해 필요한 2gloo계정, 전화번호, 기타 본인확인정보 등 일부 정보는 수정이 불가능할 수 있으며, 수정하는 경우에는 추가적인 본인 확인 절차가 필요할 수 있습니다. 여러분이 이용 신청 시 알려주신 내용에 변동이 있을 때, 직접 수정하시거나 이메일, 고객센터를 통하여 회사에 알려 주시기 바랍니다.
{'\n'}
③여러분이 2gloo계정 정보를 적시에 수정하지 않아 발생하는 문제에 대하여 회사는 책임을 부담하지 아니합니다.
{'\n'}
{'\n'}
제 4 장 계약당사자의 의무
{'\n'}
제 10 조 (회원의 의무)
{'\n'}
①여러분이 2gloo계정 서비스를 이용할 때 아래 각 호의 행위는 하여서는 안 됩니다.
{'\n'}
1.이용 신청 또는 변경 시 허위 사실을 기재하거나, 다른 회원의 2gloo계정 및 비밀번호를 도용, 부정하게 사용하거나, 다른 사람의 명의를 사용하거나 명의자의 허락 없이 문자메시지(SMS) 인증 등을 수행하는 행위
{'\n'}
2.타인의 명예를 손상시키거나 불이익을 주는 행위
{'\n'}
3.게시판 등에 음란물을 게재하거나 음란사이트를 연결(링크)하는 행위
{'\n'}
4.회사 또는 제3자의 저작권 등 기타 권리를 침해하는 행위
{'\n'}
5.공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형, 음성 등을 타인에게 유포하는 행위
{'\n'}
6.2gloo계정 서비스와 관련된 설비의 오동작이나 정보 등의 파괴 및 혼란을 유발시키는 컴퓨터 바이러스 감염 자료를 등록 또는 유포하는 행위
{'\n'}
7.2gloo계정 서비스의 운영을 고의로 방해하거나 안정적 운영을 방해할 수 있는 정보 및 수신자의 명시적인 수신거부의사에 반하여 광고성 정보 또는 스팸메일(Spam Mail)을 전송하는 행위
{'\n'}
8.회사의 동의 없이 서비스 또는 이에 포함된 소프트웨어의 일부를 복사, 수정, 배포, 판매, 양도, 대여, 담보제공하거나 타인에게 그 이용을 허락하는 행위와 소프트웨어를 역설계하거나 소스 코드의 추출을 시도하는 등 서비스를 복제, 분해 또는 모방하거나 기타 변형하는 행위
{'\n'}
9.타인으로 가장하는 행위 및 타인과의 관계를 허위로 명시하는 행위
{'\n'}
10.다른 회원의 개인정보를 수집, 저장, 공개하는 행위
{'\n'}
11.자기 또는 타인에게 재산상의 이익을 주거나 타인에게 손해를 가할 목적으로 허위의 정보를 유통시키는 행위
{'\n'}
12.윤락행위를 알선하거나 음행을 매개하는 내용의 정보를 유통시키는 행위
{'\n'}
13.수치심이나 혐오감 또는 공포심을 일으키는 말이나 글, 사진을 계속하여 상대방에게 도달하게 하여 상대방의 일상적 생활을 방해하는 행위
{'\n'}
14.기타 불법한 행위
{'\n'}
②여러분은 서비스의 이용권한, 기타 이용계약상 지위를 타인에게 양도·증여할 수 없으며, 담보로 제공할 수 없습니다.
{'\n'}
③혹시라도 여러분이 관련 법령, 회사의 모든 약관 또는 정책을 준수하지 않는다면, 회사는 여러분의 위반행위 등을 조사할 수 있고, 여러분의 서비스 이용을 잠시 또는 계속하여 중단하거나, 재가입에 제한을 둘 수도 있습니다.
{'\n'}
④본 조에서 정한 사항 및 그 밖에 2gloo계정 서비스의 이용에 관한 자세한 사항은 2gloo 운영정책 등을 참고해 주시기 바랍니다.
{'\n'}
{'\n'}
제 11 조 (개인정보의 보호)
{'\n'}
여러분의 개인정보의 안전한 처리는 회사에게 있어 중요한 일 중 하나입니다. 여러분의 개인정보는 서비스의 원활한 제공을 위하여 여러분이 동의한 목적과 범위 내에서만 이용됩니다. 법령에 의하거나 여러분이 별도로 동의하지 아니하는 한 회사가 여러분의 개인정보를 제3자에게 제공하는 일은 없습니다.
{'\n'}
{'\n'}
제 12 조 (회원에 대한 통지 및 공지)
{'\n'}
회사는 여러분과의 의견 교환을 소중하게 생각합니다. 여러분은 언제든지 문의하기 공간을 통해 의견을 개진할 수 있습니다. 여러분에게 중대한 영향을 미치는 사항의 경우에는 2gloo계정에 등록된 이메일 주소로 이메일(이메일주소가 없는 경우 서비스 내 전자쪽지 발송, 서비스 내 알림 메시지를 띄우는 등의 별도의 전자적 수단) 발송 또는 여러분이 등록한 휴대폰번호로 문자메시지 발송하는 방법 등으로 개별적으로 알려 드리겠습니다.
{'\n'}
{'\n'}
제 5 장 이용계약 해지 등
{'\n'}
제 13 조 (이용계약 해지)
{'\n'}
①여러분이 2gloo계정 이용을 더 이상 원치 않는 때에는 언제든지 서비스 내 제공되는 메뉴를 이용하여 이용계약의 해지 신청을 할 수 있으며, 회사는 법령이 정하는 바에 따라 신속히 처리하겠습니다.
{'\n'}
②회사는 법령에서 정하는 기간 동안 여러분이 2gloo계정 서비스를 이용하기 위해 2gloo계정 로그인 혹은 접속한 기록이 없는 경우 여러분이 등록한 이메일주소, 휴대폰번호로 이메일, 문자메시지 또는 2gloo톡 메시지를 보내는 등 기타 유효한 수단으로 통지 후 여러분의 2gloo계정 정보를 파기하거나 분리 보관할 수 있으며, 이로 인해 2gloo계정 서비스 이용을 위한 필수적인 정보가 부족할 경우 이용계약이 해지될 수도 있습니다.
{'\n'}
③이용계약이 해지된 경우라도 여러분은 다시 회사에 대하여 이용계약의 체결을 신청할 수 있습니다.
{'\n'}
{'\n'}
제 14 조 (손해배상)
{'\n'}
①회사는 회사의 과실로 인하여 여러분이 손해를 입게 될 경우 본 약관 및 관련 법령에 따라 여러분의 손해를 배상하겠습니다. 다만 회사는 회사의 과실 없이 발생된 아래와 같은 손해에 대해서는 책임을 부담하지 않습니다. 또한 회사는 법률상 허용되는 한도 내에서 간접 손해, 특별 손해, 결과적 손해, 징계적 손해, 및 징벌적 손해에 대한 책임을 부담하지 않습니다.
{'\n'}
1.천재지변 또는 이에 준하는 불가항력의 상태에서 발생한 손해
{'\n'}
2.여러분의 귀책사유로 서비스 이용에 장애가 발생한 경우
{'\n'}
3.서비스에 접속 또는 이용과정에서 발생하는 개인적인 손해
{'\n'}
4.제3자가 불법적으로 회사의 서버에 접속하거나 서버를 이용함으로써 발생하는 손해
{'\n'}
5.제3자가 회사 서버에 대한 전송 또는 회사 서버로부터의 전송을 방해함으로써 발생하는 손해
{'\n'}
6.제3자가 악성 프로그램을 전송 또는 유포함으로써 발생하는 손해
{'\n'}
7.전송된 데이터의 생략, 누락, 파괴 등으로 발생한 손해, 명예훼손 등 제3자가 서비스를 이용하는 과정에서 발생된 손해
{'\n'}
8.기타 회사의 고의 또는 과실이 없는 사유로 인해 발생한 손해
{'\n'}
{'\n'}
제 15 조 (분쟁의 해결)
{'\n'}
본 약관 또는 서비스는 대한민국법령에 의하여 규정되고 이행됩니다. 서비스 이용과 관련하여 회사와 여러분 간에 분쟁이 발생하면 이의 해결을 위해 성실히 협의할 것입니다. 그럼에도 불구하고 해결되지 않으면 민사소송법상의 관할법원에 소를 제기할 수 있습니다.
{'\n'}
{'\n'}
공고일자 : 2019년 6월 11일
{'\n'}
시행일자 : 2019년 6월 11일
{'\n'}
             </Text>
           </ScrollView>
          </View>
        </Modal>

        <Modal
      modalDidClose={props.modalDidClose2}
        open={props.open2}
        closeOnTouchOutside={true}
        modalStyle={{
          borderRadius: 3,
          backgroundColor: "#F5F5F5",
          height:height*0.8
          }}
        >
          <View style={{marginTop:10,marginBottom:15, marginHorizontal:10}}>
          <View style={{justifyContent:'center'}}>
             <TouchableOpacity style={{position:'absolute', right:0,width:30,height:30}}onPress={props.modalDidClose2}>
             <Ionicons style={{position:'absolute', right:0}} name="ios-close" size={30} color="black" />
             </TouchableOpacity>
             <Text style={{fontSize:20,textAlign:'center', alignSelf:'center'}}>
               개인정보처리방침
             </Text>
             </View>
             <View style={{borderBottomWidth:0.5, borderBottomColor:'gray', marginVertical:5}}/>
           <ScrollView>
             
             <Text>
             "2gloo" 개인정보처리방침
{'\n'}
"2gloo"는 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 통신비밀보호법, 전기통신사업법 등 정보통신서비스제공자가 준수하여야 할 관련 법규상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 신경을 쓰고 있습니다
{'\n'}
​{'\n'}
{'\n'}
"2gloo"의 개인정보처리방침은 다음과 같은 내용을 담고 있습니다.
{'\n'}
1. 처리하는 개인정보 항목
{'\n'}
2. 개인정보의 처리목적
{'\n'}
3. 개인정보의 제3자 제공
{'\n'}
4. 개인정보의 처리 및 보유기간
{'\n'}
5. 개인정보 파기절차 및 방법
{'\n'}
6. 정보주체의 권리·의무 및 그 행사방법
{'\n'}
7. 개인정보의 안전성 확보조치
{'\n'}
8. 개인정보 자동수집장치의 설치/운영 및 거부에 관한 사항
{'\n'}
9. 개인정보보호 책임자 및 연락처
{'\n'}
​{'\n'}
{'\n'}
1. 처리하는 개인정보 항목
{'\n'}
① "2gloo"는 회원가입, 고객상담, 서비스 제공 및 이용과정에서 아래와 같이 필요한 최소한의 개인정보를 수집하고 있습니다.
{'\n'}
- 필수정보 : SNS(카카오톡, 페이스북) 로그인 정보 식별값, SNS 프로필 사진
{'\n'}
② 서비스 이용과정이나 사업처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
{'\n'}
- 모바일 기기 이용 시 단말기 식별번호, 단말 OS 정보, Push 수신여부
{'\n'}
- 이용자의 브라우저 종류 및 OS, 방문 기록(IP Address, 접속시간), 쿠키
{'\n'}
③ 서비스 이용 시 사진 접근에 대한 요구
{'\n'}
- 해당 이용자의 모임을 홍보하는 것에 필요한 사진이며 홍보 이외의 목적으로는 사용하지 않습니다.
{'\n'}
​{'\n'}
{'\n'}
2. 개인정보의 처리목적
{'\n'}
① 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 본인인증
{'\n'}
② 회원의 원활한 의사소통
{'\n'}
③ 문의 접수에 대한 처리결과 회신
{'\n'}
④ 기업윤리상담센터의 상담/신고 접수 및 처리결과 회신
{'\n'}
⑤ 이용자의 관심, 성향의 추정을 통한 맞춤형 컨텐츠 추천 및 마케팅에 활용
{'\n'}
​{'\n'}
{'\n'}
3. 개인정보의 제3자 제공
{'\n'}
회사는 개인정보를 "2. 개인정보의 처리목적"에서 고지한 범위내에서 사용하며, 정보주체의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 개인정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
{'\n'}
- 정보주체가 사전에 동의한 경우
{'\n'}
- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
{'\n'}
​{'\n'}
{'\n'}
4. 개인정보의 처리 및 보유기간
{'\n'}
① 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유/이용 기간 내에서 개인정보를 처리 및 보유하며, 원칙적으로 개인정보의 처리목적이 달성되면 지체 없이 파기합니다. 단, 이용자에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.
{'\n'}
② 회원탈퇴 후에도 관계법령의 규정에 의하여 보존할 필요가 있는 경우 법령에 따라 일정기간 회원정보를 보관합니다.
{'\n'}
[관계법령] 
{'\n'}
개인정보의 처리 및 보유기간 관계법령
{'\n'}
보존항목
{'\n'}
근거법령
{'\n'}
보존기간
{'\n'}
계약 또는 청약철회 등에 관한 기록
{'\n'}
전자상거래 등에서의 소비자 보호에 관한 법률
{'\n'}
5년
{'\n'}
재화 등의 공급에 관한 기록
{'\n'}
5년
{'\n'}
소비자의 불만 또는 분쟁처리에 관한 기록
{'\n'}
3년
{'\n'}
표시/광고에 관한 기록
{'\n'}
6개월
{'\n'}
서비스 방문 기록
{'\n'}
통신비밀보호법
{'\n'}
3개월
{'\n'}
5. 개인정보 파기절차 및 방법
{'\n'}
① 개인정보는 원칙적으로 개인정보의 처리목적이 달성되면 지체 없이 파기합니다.
{'\n'}
② 개인정보의 파기절차 및 방법은 다음과 같습니다.
{'\n'}
가. 파기절차
{'\n'}
- 정보주체가 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 보관사유에 따라("5. 개인정보의 처리 및 보유기간" 참조)일정 기간 저장된 후 파기됩니다.
{'\n'}
나. 파기방법
{'\n'}
- 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
{'\n'}
- 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
{'\n'}
​{'\n'}
{'\n'}
6. 정보주체의 권리•의무 및 그 행사방법
{'\n'}
정보주체는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 정보삭제 및 처리정지를 요청할 수도 있습니다. 정보삭제 또는 처리정지를 원하시는 경우 개인정보보호 책임자에게 서면, 전화 또는 전자우편으로 연락하시면 지체 없이 조치하겠습니다.
{'\n'}
​{'\n'}
{'\n'}
7. 개인정보의 안전성 확보조치
{'\n'}
회사는 개인정보를 처리함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 기술적, 관리적, 물리적 조치를 하고 있습니다.
{'\n'}
① 개인정보 처리 직원의 최소화 및 교육 회사의 개인정보관련 처리 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 수행하며, 개인정보보호를 강조하고 있습니다. 
{'\n'}
② 비인가자에 대한 출입 통제 개인정보를 수집 후 보관하고 있는 개인정보시스템의 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다. 
{'\n'}
​{'\n'}
{'\n'}
8. 개인정보 자동수집장치의 설치/운영 및 거부에 관한 사항
{'\n'}
회사는 웹기반 서비스 제공을 위하여 쿠키를 이용하는 경우가 있습니다. 쿠키는 보다 빠르고 편리한 이용을 지원하기위해 사용됩니다.
{'\n'}
① 쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자 컴퓨터에 저장됩니다.
{'\n'}
② 쿠키 사용목적은 이용자의 취향과 관심분야를 파악하여 개인형 맞춤화 된 서비스를 제공하기 위해 사용합니다. 이용자가 웹사이트에 방문할 경우 웹 사이트 서버는 이용자의 디바이스에 저장되어 있는 쿠키의 내용을 읽어 이용자의 환경설정을 유지하고 최적화된 서비스를 제공하게 됩니다.
{'\n'}
​{'\n'}
{'\n'}
9. 개인정보보호 책임자 및 연락처
{'\n'}
귀하께서는 홈페이지 등을 이용하시는 과정에서 발생하는 모든 개인정보보호 관련 민원을 개인정보보호 책임자에게 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
{'\n'}{'\n'}{'\n'}
개인정보보호 책임자
{'\n'}{'\n'}
이 름 : 이재준
{'\n'}
직 위 : 대표
{'\n'}
메 일 : leejjun28@gmail.com
{'\n'}{'\n'}
기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
{'\n'}
개인정보침해신고센터 {'\n'}( http://privacy.kisa.or.kr / 국번없이 118 )
{'\n'}
대검찰청 사이버수사과 {'\n'}( http://www.spo.go.kr / 국번없이 1301 )
{'\n'}
경찰청 사이버안전국 {'\n'}( http://cyberbureau.police.go.kr / 국번없이 182 ){'\n'}
             </Text>
           </ScrollView>
          </View>
        </Modal>
  </>
);

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    width: width * 0.2,
    height: height * 0.1,
    top: Platform.OS === 'ios' ? 30 : 15,
    left: 10,
    zIndex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 120,
  },
  container2: {
    paddingHorizontal: '7%',
    paddingTop: '28%',
  },
  loginButton: {
    marginTop: 20,
  },
  password: {
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  passwordFont: {
    fontSize: width * 0.04,
    color: '#B7B9BC',
  },
  and: {
    marginVertical: height * 0.065,
    height: height * 0.025,
    alignItems: 'center',
    flexDirection: 'row',
  },
  andLineLeft: {
    flex: 1,
    width: '100%',
    backgroundColor: '#CCCFD2',
    height: 1,
    marginRight: 4,
  },
  andLineRight: {
    flex: 1,
    width: '100%',
    backgroundColor: '#CCCFD2',
    height: 1,
    marginLeft: 4,
  },
  signUpButton: {
    backgroundColor: 'transparent',
    height: height * 0.07,

    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButton2: {
    width: width * 0.6,
    height: height * 0.07,
    borderRadius: 15,
  },
  signUpText: {
    color: 'white',
    fontSize: width * 0.04,
  },
});

export default Login;
