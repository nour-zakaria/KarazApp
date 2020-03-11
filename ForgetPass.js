import React , {Component} from 'react';
import {StyleSheet, StatusBar,Text, View,TouchableOpacity, TextInput} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class ForgetPass extends Component {

  constructor(props) {
      super(props);
      this.state = { 
      };
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
                onPress={() => this.props.navigation.navigate('Login')}
            >
           <ReactImage
        source={require("./Images/surface1.png")}
        resizeMode="contain"
       
        />
        </TouchableOpacity>
    
      <ReactImage
        source={require("./Images/pic.png")}
        resizeMode="contain"
        style={styles.image}
        />
        
    <TouchableOpacity style={styles.button1}  onPress={() =>  this.props.navigation.navigate('AssertPhone')} >
          <Text style={styles.textin}> إرسال رسال نصية على جهازك المحمول
</Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.button2} onPress={() =>  this.props.navigation.navigate('AssertEmail')} >
          <Text style={styles.textin}> التحقق من خلال البريد الالكتروني
</Text>
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
    width: 172.18,
    height: 118.86,
    marginTop: 120,
    marginLeft: 94
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
    button1: {
    opacity: 1,
    position: "absolute",
    backgroundColor:"rgba(255, 255, 255, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(116, 116, 116, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(116, 116, 116, 1)",
    borderBottomWidth: 1,
    borderBottomColor:"rgba(116, 116, 116, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(116, 116, 116, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 304,
    height: 55,
    left: 28,
    top: 309
  
  },
    button2: {
    opacity: 1,
    position: "absolute",
    backgroundColor:"rgba(255, 255, 255, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(116, 116, 116, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(116, 116, 116, 1)",
    borderBottomWidth: 1,
    borderBottomColor:"rgba(116, 116, 116, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(116, 116, 116, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
     width: 304,
    height: 55,
    left: 28,
    top: 406
  
  },
  textin:{
    top: 15,
    right:50,
  fontSize:15,
    // color:"rgba(112, 120, 112, 1)"
     color:"rgba(116, 116, 116, 1)"
  }
});