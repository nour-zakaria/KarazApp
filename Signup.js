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
import DeviceStorge from './Services/DeviceStorge';



export default class Signup extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
      name: '',
      phone:'',
      password: '',
      error: {},
      loading: false,
       isChecked: false,
 
    };

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser() {
    // DeviceStorge.saveKey("id_token", response.data.jwt); 
    const { name, phone, password } = this.state;

    this.setState({ error: {}, loading: true });
    axios.post('https://karaz5.herokuapp.com/api/user/signup' ,{
        name: name,
        phone: phone,
        password: password
    })
    .then((response) => {
    
       DeviceStorge.saveKey("id_token", response.data.token);
       this.props.navigation.navigate('Cong');
    })
    .catch((error) => {
      // error['serverError'] =
      alert(error)
        //  alert( 'البريد الالكتروني الذي أدخلته مستخدم في حساب آخر');
          this.setState(this.setState({ error: error }));
           
    });
  }

  render() {

    return (
      <View style={styles.container}>

    <StatusBar  
    backgroundColor = "#CC5775"  
     barStyle = "dark-content"   
      hidden = {false}        
                /> 

      <Text style={styles.tooltext}>
            انشاء حساب
          </Text>
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
            onChangeText={name => this.setState({ name })}
            value={this.state.value}
            placeholder="الاسم كاملا"
          />
        </View>
        <View>
          <TextInput
            style={styles.input2}
            onChangeText={password => this.setState({ password })}
             secureTextEntry={true}
            // onChangeText={(text) => this.validate(text, 'username')}
            placeholder="كلمة المرور "
          />
        </View>
        <View>
          <TextInput
            style={styles.input3}
            onChangeText={phone => this.setState({ phone })}
            // onChangeText={(text) => this.validate(text, 'username')}
            placeholder="رقم الموبايل"
          />
        
         
        </View>
        <TouchableOpacity>
          <Text style={styles.button3}>التسجيل  بالبريد الاكتروني </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.privacy}>
            أوافق على سياسة الخصوصية و الشروط والأحكام{' '}
          </Text>
        </TouchableOpacity>
        
         
<CheckBox
 style={styles.materialCheckbox}
    onClick={()=>{ this.setState({ isChecked:!this.state.isChecked}) }}
    isChecked={this.state.isChecked}
  checkBoxColor ={'#707070'}
  checkedCheckBoxColor ={'#DE3163'}
/>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => this.loginUser()}>
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
    marginTop: 243,
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
    top: 60,
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
    top: 130,
    textAlign: 'right',
  },
  button3: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(88, 93, 246, 1)',
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
    width: 190,
    height: 26,
    right: 180,
    top: 187,
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
    bottom:-110
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
    top: 84,
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
    left: 10,
    top: 245,
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
  }
});
