import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
// Switch
} from 'react-native';
import { Image as ReactImage } from "react-native";
 import Switches from 'react-native-switches'



export default class Setting extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
 switchValue: false
    };

  }
  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
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
    الاعدادات
          </Text>
           <TouchableOpacity  style={styles.backbutton}
             onPress={() => this.props.navigation.navigate('CODE')}
            >
           <ReactImage
        source={require("./Images/surface1.png")}
        resizeMode="contain"
        style = {styles.image}
        />
        </TouchableOpacity>
    <View >
      <TouchableOpacity  style={styles.btntextinform} >
    <Text style= {styles.textinform}> المعلومات الشخصية </Text>
        </TouchableOpacity>

          <TouchableOpacity  style={styles.btnImageuser} >
           <ReactImage
        source={require("./Images/user.png")}
        resizeMode="contain"
        style = {styles.Imageuser}
        />
        </TouchableOpacity>
    </View>
    
      <View>
       <View style = {styles.switch}>
  <Switches shape={'pill'} 
  onChange={() => this.setState({switchValue: !this.state.switchValue})} 
  value={this.state.switchValue}
  showText= {false}
  colorSwitchOff =  {'#888888'}
  colorSwitchOn = {'#CC5775'}
  buttonSize = {15}
  sliderHeight= {20.83}
  sliderWidth= {37.19}
  />
 </View>
        <TouchableOpacity  style={styles.btntextnoti} >
     <Text style= {styles.textnoti} > الاشعارات </Text>
      </TouchableOpacity>  
 <TouchableOpacity  style={styles.btnImagenoti} >
           <ReactImage
        source={require("./Images/noti.png")}
        resizeMode="contain"
        style = {styles.Imagenoti} />
         </TouchableOpacity>
    </View>
       <View >
      <TouchableOpacity  style={styles.btntextsec} >
     <Text style= {styles.textsec} > الأمان والخصوصية
          </Text>
     
        </TouchableOpacity>
         <TouchableOpacity  style={styles.btnImagesec}>
           <ReactImage
        source={require("./Images/secure.png")}
        resizeMode="contain"
        style = {styles.Imagesec}
        />
        </TouchableOpacity>
    </View>
     <View style={styles.line1} />
         <View >
      <TouchableOpacity  style={styles.btntextlang}
            //  onPress={() => this.props.navigation.navigate('CODE')}
            >
     <Text style= {styles.textlang} > اللغة  </Text>
        </TouchableOpacity>
          <TouchableOpacity  style={styles.btnImagelang}
            //  onPress={() => this.props.navigation.navigate('CODE')}
           >
           <ReactImage
        source={require("./Images/language.png")}
        resizeMode="contain"
        style = {styles.Imagelang}
        />
        </TouchableOpacity>
    </View>
     <View >
       <TouchableOpacity  
           style={styles.btntextrate}  > 
     <Text style= {styles.textrate} > قيم التطبيق 
          </Text>
        </TouchableOpacity>

         <TouchableOpacity  
          style= {styles.btnImagerate} >
       <ReactImage
        source={require("./Images/rate.png")}
        resizeMode="contain"
        style = {styles.Imagerate}
        />
       
        </TouchableOpacity>
       
    </View>
       <View >
      <TouchableOpacity  style={styles.btntextshare}
            //  onPress={() => this.props.navigation.navigate('CODE')}
            >
     <Text style= {styles.textshare} > شارك التطبيق 
          </Text>
        
        </TouchableOpacity>
         <TouchableOpacity  style={styles.btnImageshare}
            //  onPress={() => this.props.navigation.navigate('CODE')}
            >
           <ReactImage
        source={require("./Images/share.png")}
        resizeMode="contain"
        style = {styles.Imageshare}
        />
        </TouchableOpacity>
    </View>
    <View style={styles.line2} />
       <View >
      <TouchableOpacity  style={styles.btntextout}
            //  onPress={() => this.props.navigation.navigate('CODE')}
            >
     <Text style= {styles.textout} > خروج
          </Text>
       
        </TouchableOpacity>
          <TouchableOpacity  style={styles.btnImageout}
            //  onPress={() => this.props.navigation.navigate('CODE')}
            >
           <ReactImage
        source={require("./Images/out.png")}
        resizeMode="contain"
        style = {styles.Imageout}
        />
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
 
image : {
    width : 8.36 ,
    height : 14.23 ,
    top:3,
    right:2.78
}
 ,
 Imageuser : {
   width : 14.35 ,
    height : 15.73 ,
    
 },
 textinform :{
 width: 132,
 height: 30,
 fontSize: 16,
 fontFamily: "Cairo"
 },
 btntextinform: {
top:80,
left:180,
 },
 btnImageuser : {
     top:50,
    left:325
 },

 Imagenoti:{
    width : 15.05 ,
    height : 17.37 ,
  
 },
  textnoti :{
 width: 62,
 height: 30,

 fontSize: 16,
 fontFamily: "Cairo"
 },
btnImagenoti : {
  top:25,
    left:325  
},
btntextnoti : {
    top:55,
     left:245,
},
 switch: {
  top:75,
    left:30   
 },
 Imagesec : {
   width : 13.99 ,
    height : 15 ,
      
 },
 textsec : {
 width: 132,
 height: 30,
 fontSize: 16,
 fontFamily: "Cairo"
 } ,
btnImagesec : {
top:27,
 left:325  
},
btntextsec : {
top:54,
left:180,
},
   line1: {
  backgroundColor: '#BEBEBE',
  height: 1,
  width: 327,
  top : 60,
  left : 20
},
textlang : {
 width: 132,
 height: 30,
 fontSize: 16,
 fontFamily: "Cairo"   
},
Imagelang: {
   width : 13.99 ,
    height : 15 ,
     
 },
 btntextlang : {
 top:84,
  left:180,
  },
  btnImagelang :{
 top:55,
    left:325  
  },
 textrate : {
 width: 132,
 height: 30,
 fontSize: 16,
 fontFamily: "Cairo"   
},
Imagerate: {
   width : 13.99 ,
    height : 15 , 
 },
 btnImagerate : {
top:55,
left:325   
 },
 btntextrate : {
     top:83,
     left:180,
 },
  textshare : {
 width: 132,
 height: 30,
 fontSize: 16,
 fontFamily: "Cairo"   
},
Imageshare: {
   width : 13.99 ,
    height : 15 ,  
 },
 btntextshare : {
 top:84,
  left:180,
 },
 btnImageshare : {
 top:55,
    left:325   
 },
    line2: {
  backgroundColor: '#BEBEBE',
  height: 1,
  width: 327,
  top : 87,
  left : 20
},
  textout : {
 width: 132,
 height: 30,
 fontSize: 16,
 fontFamily: "Cairo"   
},
Imageout: {
   width : 13.99 ,
    height : 15 ,
    
 },
 btntextout : {
 top:102,
  left:180,
 },
 btnImageout : {
  top:75,
    left:325  
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
