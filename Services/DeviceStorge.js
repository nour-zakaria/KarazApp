
import { AsyncStorage } from 'react-native';

const DeviceStorge = {

  
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }
  

};

export default DeviceStorge;