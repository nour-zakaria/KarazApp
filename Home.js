import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { Image as ReactImage } from "react-native";


export default class Home extends React.Component  {
 constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar  
                    backgroundColor = "#CC5775"  
                    barStyle = "dark-content"   
                    hidden = {true}    
                  
                />  
        <ReactImage
          source={require("./Images/back.png")}
          style={styles.backgroundImage}
        />
           <ReactImage
          source={require("./Images/logo.png")}
          style={styles.LOGO}
        />


        <TouchableOpacity style={styles.button1}  
           onPress={() =>
          this.props. navigation.navigate('Signup')
          }>
          <Text style={styles.text}>انشاء حساب</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}
          onPress={() =>
           this.props.  navigation.navigate('Login')
          }>
          <Text style={styles.text} >تسجيل دخول</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Cong') }
          style={styles.button3}
          >
          <Text style={styles.textend}  >الدخول كزائر </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 360,
    height: 640,
    left: 0,
    top: 0
  },
  LOGO: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 121,
    height: 155.4,
    left: 118.99,
    top: 139.08
  },
  button1: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(204, 87, 117, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 14,
    paddingRight: 120,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    // fontSize: 14,
    // fontWeight: "400",
    // fontStyle: "normal",
    // fontFamily: "Cairo",
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.2901960784313726,
    shadowOffset: {
      width: 30,
      height: 30
    },
    shadowRadius: 60,
    width: 328,
    height: 55,
    left: 16,
    top: 391
  },
   text: {
     opacity: 1,
    position: "absolute",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'arial',
    textAlign: 'center',
    paddingTop: 15,
    paddingLeft: 120
  },
  button2: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(219, 219, 219, 0.3)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 14,
    paddingRight: 120,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(219, 219, 219, 0.3)",
    borderRightWidth: 1,
    borderRightColor: "rgba(219, 219, 219, 0.3)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(219, 219, 219, 0.3)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(219, 219, 219, 0.3)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 4,
    width: 328,
    height: 55,
    left: 16,
    top: 480,
    
  
  },
  button3: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 0)",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "Cairo",
    textAlign: "center",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 69,
    height: 26,
    left: 145,
    top: 560,
  },
    textend: {
     opacity: 1,
    position: "absolute",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Cairo',
    textAlign: 'center',
    }
});
