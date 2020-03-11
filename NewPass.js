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
import { Image as ReactImage } from "react-native";

// import axios from 'axios';



export default class NewPass extends React.Component {
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
            انشاء كلمة المرور
          </Text>
           <TouchableOpacity  style={styles.backbutton}
             onPress={() => this.props.navigation.navigate('CODE')}
            >
           <ReactImage
        source={require("./Images/surface1.png")}
        resizeMode="contain"
       
        />
        </TouchableOpacity>

          <TextInput
            style={styles.input1}
            value={this.state.value}
            placeholder="كلمة مرور جديدة"
          />
       
        <View>
          <TextInput
            style={styles.input2}
            placeholder= " تاكيد كلمة المرور"
          />
        </View>
       <View>
       <TouchableOpacity style={styles.button2}>
          <Text style={styles.textin}> استمرار</Text>
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
    top: 170,
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
    top: 90,
    textAlign: 'right',
  },
    button2: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(222, 49, 99, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 14,
    paddingRight: 120,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(222, 49, 99, 1)",
    borderRightWidth: 1,
    borderRightColor:"rgba(222, 49, 99, 1)",
    borderBottomWidth: 1,
    borderBottomColor:"rgba(222, 49, 99, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(222, 49, 99, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 328,
    height: 55,
    left: 16,
  top: 250,
  
  },
  textin:{
    color: "#FFFFFF",
   fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
   fontFamily: "Cairo",
    left:-15
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
