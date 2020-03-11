  
  
  import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
      
    };
    
  }

  render() {
    
    return (
  
  <View style={styles.container}>
      <Image
        source={require("./assets/تهانينا.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 244,
    height: 141,
    marginTop: 90,
    marginLeft: 58
  }
});