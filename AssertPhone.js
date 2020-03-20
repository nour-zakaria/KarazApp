import React , {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, StatusBar, TextInput} from 'react-native';
import {Image as ReactImage} from 'react-native';
import axios from 'axios';


export default class AssertPhone extends Component {

  constructor(props) {
      super(props);
      this.state = { 
        phone: '',
        errors : {},
        count : 0,
      };
         this.ONPress = this.ONPress.bind(this);
  }
   validation = () => {
     let isValid = true;
    let {phone} = this.state;
      let errors = {};
      
    if(!phone){
     isValid = false;
     errors["phone"]= 'الرجاء ادخال رقم الهاتف'
       this.setState({errors: errors});
        return isValid;
     }
    else {
      isValid = true;
        return isValid;
    }
      
  }

        ONPress = () =>{
             this.props.navigation.navigate('CODE');    
       
  //   // if(this.validation()){
  //   //   alert(this.validation())
  //    const { phone } = this.state;
  //       axios.post('https://karaz6.herokuapp.com/api/forgetPassword/FindAccount',{
  //       phone: phone,})
  //               .then(Response => {   
                  
  // }).catch(error => {
  //    alert(error+ "سرسؤءر")
  //  errors["serverError"] = "يُرجى التأكد من البيانات المدخلة والمحاولة مجددًا."; });
     }


  render() {
    const {phone } = this.state;
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
           keyboardType="numeric"
            placeholder="رقم الهاتف"
          />
         <TouchableOpacity 
          style={styles.button1} onPress={() => this.ONPress()}>
        <Text style={styles.text1}> استمرار</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.button2} 
              onPress={() =>
            this.props.navigation.navigate('Signup')} >    
       
            <Text style={styles.text2}> عودة لتسجيل الدخول</Text>
          </TouchableOpacity>   
           <Text style={styles.errorStyle}>{this.state.errors["phone"]}</Text>        
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
    top: 360,
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
   errorStyle:{
    color:'red',
   top:195,
    right:25
  }
 
});