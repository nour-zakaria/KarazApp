import React , {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, StatusBar, TextInput} from 'react-native';
import {Image as ReactImage} from 'react-native';
import DeviceStorge from './Services/DeviceStorge';
import axios from 'axios';
const ACCESS_TOKEN = "token";
export default class AssertEmail extends Component {

  constructor(props) {
      super(props);
      this.state = { 
        email :'',
        
        
      };
  }
  
     async onLoginPressed() {
try {
   let email = this.state ; 

  let emailSend = {email}
  const {params} = this.props.navigation.state;
 
 const Response = await  axios.post('https://karaz6.herokuapp.com/api/forgetPassword/FindAccount',email );
//  console.log(Response.status);
// console.log(Response.data.user);
if(Response.status === 200){
  const response = await  axios.post('https://karaz6.herokuapp.com/api/forgetPassword/sendEmail',email );
  if(response.status === 200){
    var UserId = response.data.sucess.id;
  //  console.log(UserId);
    
    this.props.navigation.navigate('CODE2', { passdata: UserId  })
    ;}
          

  }
   //const response = await  axios.post('http://karaz6.herokuapp.com/api/forgetPassword/verifyCode',email );

}
     catch(error) {
        this.setState({error: error});
        console.log( error);
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

      <Text style={styles.tooltext}>
          نسيت كلمة المرور
          </Text>

          <TouchableOpacity 
            style={styles.backbutton}
                onPress={() => this.props.navigation.navigate('ForgetPass')}
            >
           <ReactImage
        source={require("./Images/surface1.png")}
        resizeMode="contain"
       
        />
        </TouchableOpacity>
      <ReactImage
        source={require("./Images/forgetpass.png")}
        resizeMode="contain"
        style={styles.image}
        />
         <TextInput
            style={styles.input1}
                onChangeText={(value) => this.setState({email: value})}
        value={this.state.email}
            placeholder="البريد الاكتروني"
          />
         <TouchableOpacity 
          style={styles.button1} 
          onPress={() =>  this.onLoginPressed()}
          >
        <Text style={styles.text1}> استمرار</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.button2} 
              onPress={() =>
            this.props.navigation.navigate('Signup')} >    
       
            <Text style={styles.text2}> عودة لتسجيل الدخول</Text>
          </TouchableOpacity>           
    </View>

    );
  }

}



const styles = StyleSheet.create({
      container: {
    flex: 1,
     backgroundColor: "#FFFFFF"
  },
  image: {
    width: 170,
    height: 120,
    top:90,
    left:98
  
   
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
    button2: {
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
    right: 140,
    top:440
  },
   text1: {
     opacity: 1,
    position: "absolute",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Cairo',
    textAlign: 'center',
    paddingTop: 14,
    paddingLeft: 145
  },
   text2: {
  fontSize: 14,
  fontWeight: '400',
  fontFamily: 'Cairo',
  color: 'rgba(222, 49, 99, 1)',
  fontStyle: 'normal',
  width:118
  
  },
  
  button1: {
    opacity: 1,
    position: 'absolute',
   backgroundColor: "rgba(222, 49, 99, 1)",
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
    top: 350,
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
    top: 260,
    textAlign: 'right',
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
 
});