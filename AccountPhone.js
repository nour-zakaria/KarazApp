import React , {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, StatusBar,TextInput} from 'react-native';
import {Image as ReactImage} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';


export default class AccountPhone extends Component {

  constructor(props) {
      super(props);
      this.state = { 
        //  code: '',
        // errors :{}
      };
  }
 
 _onFulfill = (code) => {
    axios.post('https://karaz6.herokuapp.com/api/forgetPassword/verifyCode' ,{ 
        code: code,
        })
    .then((Response) => {
        console.log(Response);
      DeviceStorge.saveKey("token", Response.data.token);
       const data =  DeviceStorge.getKey("token");
        const AuthStr = 'Bearer '.concat(Response.data.token); 
       console.log(AuthStr);
      axios.get(' https://karaz6.herokuapp.com/api/verifyAccount/send',{ headers: { Authorization: AuthStr } })
                          .then(response => {
                                  console.log(response.status)
                                   this.props.navigation.navigate('Cong');
                               
                           }).catch(error => {
                                alert(error); });
                            
                           
     }).catch((error) => {
     console.log(error);
      alert(error)
          this.setState(this.setState({ error: error }));});
    


                            
                         
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
                onPress={() => this.props.navigation.navigate('Signup')}
            >
           <ReactImage
        source={require("./Images/surface1.png")}
        resizeMode="contain"
       
        />
        </TouchableOpacity>
        
      <ReactImage
        source={require("./Images/checkmobile.png")}
        resizeMode="contain"
        style={styles.image}
        />
      <Text style={styles.text1}>
        الرجاء إدخال الكود المرسل إلى رقم الهاتف
           {"\n"} 
           ********11
      </Text>
      {/* <Text style={styles.text2}></Text> */}
      <Text style={styles.text3}>تفقدي هاتفك المحمول !</Text>
      <View style = {styles.codeinput}>
        <CodeInput
      ref="codeInputRef1"
      secureTextEntry= {false}
      className={'border-b'}
      space={10}
      size={30}
       keyboardType="numeric"
      codeLength={6}
       activeColor="rgba(222, 49, 99, 1)"
      inactiveColor='rgba(148, 148, 148, 1)'
      inputPosition='center'
      onFulfill={(code) => this._onFulfill(code)}
    />
  </View>
      <View>
       <TouchableOpacity style={styles.button2}  onPress={() =>  this.props.navigation.navigate('Cong')}>
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
    borderRightColor: "rgba(222, 49, 99, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(222, 49, 99, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(222, 49, 99, 1)",
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
  },
  codeinput :{
    top:90
  }
});