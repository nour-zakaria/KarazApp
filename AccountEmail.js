import React , {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, StatusBar,TextInput} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class AccountEmail extends Component {

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
            تاكيد الحساب
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
        <View>
        <TouchableOpacity  style={styles.backbutton} 
          onPress={() => this.props.navigation.navigate('AssertPhone')}
        >
           <ReactImage
        source={require("./Images/surface1.png")}
       
       
        />
        </TouchableOpacity>
           </View>
      <ReactImage
        source={require("./Images/checkemail.png")}
        resizeMode="contain"
        style={styles.image}
        />
      <Text style={styles.text1}>
        الرجاء إدخال الكود المرسل إلى رقم الهاتف
           {"\n"} 
           ********11
      </Text>
      {/* <Text style={styles.text2}></Text> */}
      <Text style={styles.text3}>تفقدي بريدك الالكتروني !</Text>
      <View>
       <TouchableOpacity style={styles.button2}  onPress={() =>  this.props.navigation.navigate('NewPass')}>
          <Text style={styles.textin}> تاكيد الحساب</Text>
        </TouchableOpacity>
           </View>
    </View>
       


 

    );
  }
}



const styles = StyleSheet.create({
  button2: {
    opacity: 1,
    position: "absolute",
    backgroundColor:"rgba(204, 87, 117, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 14,
    paddingRight: 120,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(204, 87, 117, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(204, 87, 117, 1)",
    borderBottomWidth: 1,
    borderBottomColor:"rgba(204, 87, 117, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(204, 87, 117, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 328,
    height: 55,
    left: 16,
  top: 220,
  
  },
  textin:{
    color: "#FFFFFF",
   fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
   fontFamily: "Cairo",
    left:-15
  }
  ,
  container: {
    flex: 1,
     backgroundColor: "#FFFFFF"
  },
  image: {
    width: 185,
    height: 112,
    top:90,
    left:98
  },
  text1: {
    width: 300,
    height: 80,
    color: "rgba(3,3,3,1)",
    fontSize: 15,
    fontFamily: "cairo",
    textAlign: "center",
    top: 170,
    marginLeft: 40
  },
  text2: {
    width: 187,
    height: 34,
    color: "#121212",
    fontFamily: "cairo-700",
    marginTop: 3,
    marginLeft: 58
  },
  text3: {
    width: 164,
    height: 34,
    color: "rgba(222, 49, 99, 1)",
    fontSize: 18,
    fontFamily: "cairo-700",
    top: 50,
    marginLeft: 90
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