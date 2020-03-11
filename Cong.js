import React , {Component} from 'react';
import {StyleSheet, StatusBar,Text, View,TouchableOpacity, TextInput} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class Cong extends Component {

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
    
      <ReactImage
        source={require("./Images/تهانينا.png")}
        resizeMode="contain"
        style={styles.image}
        />
      <Text style={styles.text1}>
        يمكنك الان التمتع بمزايا التطبيق{"\n"} وبناء حساب شخصي رائع
      </Text>
      <Text style={styles.text2}></Text>
      <Text style={styles.text3}> اهلا بك في عالم كرز!</Text>
      <View>
       <TouchableOpacity style={styles.button2}   onPress={() => this.props.navigation.navigate('Home')} >
          <Text style={styles.textin}> الرئيسية</Text>
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
    top: 100
  
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
    width: 244,
    height: 141,
    marginTop: 90,
    marginLeft: 58
  },
  text1: {
    width: 204,
    height: 58,
    color: "rgba(3,3,3,1)",
    fontSize: 15,
    fontFamily: "cairo",
    textAlign: "center",
    marginTop: 100,
    marginLeft: 78
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
    marginTop: -150,
    marginLeft: 90
  }
});