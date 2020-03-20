import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';
import CheckBox from 'react-native-check-box'
import { Image as ReactImage } from "react-native";
import axios from 'axios';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import DeviceStorge from './Services/DeviceStorge';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-community/google-signin';
// GoogleSignin.configure();
const ACCESS_TOKEN = "token";
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
   this.state = {  name: '',password: '',errors: {},
      isChecked: false, accept : false, alertMsg : '' , MultiInput: '' ,
     pressStatus: false };
 this.signup = this.signup.bind(this);
 
  }
//   signIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     this.setState({ userInfo });
//   } catch (error) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // user cancelled the login flow
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // operation (e.g. sign in) is in progress already
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // play services not available or outdated
//     } else {
//       // some other error happened
//     }
//   }
// };

   async signup () {
      try {
          let { name ,password, MultiInput} = this.state;
let user = {name , password}
      if(MultiInput.includes("@"))
      {
        user.email= MultiInput

      }
      else {
user.phone= MultiInput
      }   
 const Response = await  axios.post('https://karaz6.herokuapp.com/api/user/signup' , user ) 
    await DeviceStorge.setItem(ACCESS_TOKEN,Response.data.token);
     const AuthStr = 'Bearer '.concat(await DeviceStorge.getItem(ACCESS_TOKEN)); 
     console.log(AuthStr + "siiiign upp")
    const response = await  axios.get('https://karaz6.herokuapp.com/api/user/profile',{ headers: { Authorization: AuthStr } }) 
      if(response.status === 200) {
               this.props.navigation.navigate('Cong');}
    else if(response.status === 201) { 
       const response2 = await  axios.get('https://karaz6.herokuapp.com/api/verifyAccount/MobileSend',{ headers: { Authorization: AuthStr } }) 
                    var obj = JSON.parse(Response.config.data)
                   if("email" in obj){ this.props.navigation.navigate('AccountEmail'); }
                     else {  this.props.navigation.navigate('AccountPhone');}  }                           
      }catch(error) {
        this.setState({error: error});
        console.log("error " + error);
    }                         
  
  }
  render() {

    return (
      <View style={styles.container}>
      
  

   <StatusBar  
    backgroundColor = "#CC5775"  
     barStyle = "dark-content"   
      hidden = {false}        
                /> 

      {/* <Text style={styles.tooltext}>
            انشاء حساب
          </Text> */}
           <TouchableOpacity  
           style={styles.backbutton}
               onPress={() => this.props.navigation.navigate('Home')}
            >
           <ReactImage
        source={require("./Images/surface1.png")}
        resizeMode="contain"
       
        />
        </TouchableOpacity>
    <View style={styles.line1} />
<Text style={styles.loginButtonBelowText1}>أو</Text>
<View style={styles.line2} />
        <View style={styles.button2Row}>

          <TouchableOpacity style={styles.button2}>
            <View style={styles.imageRow}>
              <Image
                source={require('./Images/face.png')}
                resizeMode="contain"
                style={styles.image}
              />
              <Image
                source={require('./Images/Facebook.png')}
                resizeMode="contain"
                style={styles.image3}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.rect}>
            <TouchableOpacity
              onPress={() => this.signIn}>
           
              style={styles.button}>
              <View style={styles.image2Row}>
                <Image
                  source={require('./Images/goog.png')}
                  resizeMode="contain"
                  style={styles.image2}
                />
                <Text style={styles.google}>Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.loremIpsum} />
        <View>
          <TextInput
            style={styles.input1}
             onChangeText={(value) => this.setState({name: value})}
        value={this.state.name}
            placeholder="الاسم كاملا"
          />
            <Text style={styles.errorStyle1}>{this.state.errors["name"]}</Text> 
        </View>
        <View>
          <TextInput
            style={styles.input2}
                   onChangeText={(value) => this.setState({MultiInput: value})}
        value={this.state.MultiInput}
 placeholder="رقم الهاتف او البريد الاكتروني"
          
          />
            <Text style={styles.errorStyle2}>{this.state.errors["password"]}</Text> 
        </View>
        <View>
          <TextInput
            style={styles.input3}
              onChangeText={password => this.setState({ password })}
             secureTextEntry={true}
            placeholder="كلمة المرور "
            //  keyboardType="numeric"
         
           />
            <Text style={styles.errorStyle3}>{this.state.errors["phone"]}</Text> 
        
         
        </View>
        
        <TouchableOpacity>
          <Text style={styles.privacy}>
            أوافق على سياسة الخصوصية و الشروط والأحكام{' '}
          </Text>
        </TouchableOpacity>
        
         
<CheckBox
 style={styles.materialCheckbox}
    onClick={()=>{ this.setState({ isChecked:!this.state.isChecked}) }}
    isChecked={this.state.isChecked}
  // checkBoxColor ={'#CC5775'}
   checkedCheckBoxColor ={'#FFFFFF'}
/>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => this.signup()}>
          <Text>انشاء حساب</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text3}> هل لديك حساب؟ </Text>
          <TouchableOpacity
           style={styles.button4}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.text4} > سجل دخول الان </Text>
            
          </TouchableOpacity>
        </View> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: "#FFFFFF"
  },
  button2: {
    width: 159,
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderColor: 'rgba(0,0,0,0.22)',
      borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
  },
   materialCheckbox: {
    width: 10,
    height: 10,
    marginTop: 180,
    marginLeft: 311,
    left:5
  },
  image: {
    width: 12,
    height: 21,
  },
  image3: {
    width: 68,
    height: 18,
    marginLeft: 17,
    marginTop: 2,
  },
  imageRow: {
    height: 21,
    flexDirection: 'row',
    flex: 1,
    marginRight: 31,
    marginLeft: 31,
    marginTop: 12,
  },
  rect: {
    width: 159,
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.22)',
    marginLeft: 10,
  },
  button: {
    width: 159,
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderColor: 'rgba(0,0,0,0.22)',
      borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
  },
  image2: {
    width: 22,
    height: 21,
  },
  google: {
    width: 50,
    height: 18,
    color: '#121212',
    fontFamily: 'roboto-regular',
    marginLeft: 14,
    marginTop: 1,
  },
  image2Row: {
    height: 21,
    flexDirection: 'row',
    flex: 1,
    marginRight: 36,
    marginLeft: 37,
    marginTop: 12,
  },
  button2Row: {
    height: 45,
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 16,
    marginRight: 16,
  },
  loremIpsum: {
    color: '#121212',
    fontFamily: 'roboto-regular',
    marginTop: 41,
    marginLeft: 205,
  },
  input1: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(212, 212, 212, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(212, 212, 212, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 212, 212, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(212, 212, 212, 1)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 328,
    height: 48,
    left: 15,
    top: -10,
    textAlign: 'right',
  },
  input2: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(212, 212, 212, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(212, 212, 212, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 212, 212, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(212, 212, 212, 1)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 328,
    height: 48,
    left: 15,
    top: 50,
    textAlign: 'right',
  },
  input3: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(212, 212, 212, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(212, 212, 212, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 212, 212, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(212, 212, 212, 1)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 328,
    height: 48,
    left: 15,
    top: 110,
    textAlign: 'right',
  },
  button3: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    // color: 'rgba(88, 93, 246, 1)',
    // fontSize: 14,
    // fontWeight: '400',
    // fontStyle: 'normal',
    // fontFamily: 'Cairo',
    // textAlign: 'center',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,                                                                         
    paddingBottom: 0,
    paddingLeft: 0,
    width: 190,
    height: 26,
    right: 180,
    top: 395,
  },
  button1: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 14,
    paddingRight: 125,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(222, 49, 99, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(222, 49, 99, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(222, 49, 99, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(222, 49, 99, 1)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 328,
    height: 48,
    left: 15,
    top: 440,
  },
  text3: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(88, 82, 88, 1)',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Cairo',
    textAlign: 'center',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 100,
    height: 26,
    right: 90,
    bottom:-130
  },
  button4: {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 100,
    height: 26,
    right: 185,
    top: 103,
  },
  text4: {
  fontSize: 14,
  fontWeight: '400',
  fontFamily: 'Cairo',
  color: 'rgba(222, 49, 99, 1)',
  fontStyle: 'normal',
  
  },
  privacy: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 300,
    height: 26,
    left: 8,
    top: 184,
    color: 'rgba(222, 49, 99, 1)',
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Cairo',
  },
   tooltext: {
    opacity: 1,
    position: 'absolute',
   color: '#000000',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 300,
    height: 30,
    right: 50,
    top: 15,
    fontSize: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Cairo',
  },
  line2: {
 backgroundColor: '#BEBEBE',
  height: 1,
  width: 147,
  top : 109,
  left:190
  },
  line1: {
  backgroundColor: '#BEBEBE',
  height: 1,
  width: 147,
  top : 130,
  left : 20
},

loginButtonBelowText1: {
  fontFamily: 'AvenirNext-Bold',
  fontSize: 14,
  paddingHorizontal: 5,
  alignSelf: 'center',
  color: '#A2A2A2',
  top : 120,
},
   backbutton:{
     opacity: 1,
    position: 'absolute',
   color: '#000000',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 14.63,
    height: 24.92,
    right: 10,
    top: 15, 
  },
    errorStyle1:{
    color:'red',
    top:45,
    right:25
  },
   errorStyle2:{
    color:'red',
   top:115,
    right:25
  },
   errorStyle3:{
    color:'red',
   top:180,
    left:280
  },
  switch: {
    color: "#585DF6",
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Cairo',
    textAlign: 'center',
    }
});
