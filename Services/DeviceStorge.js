import { AsyncStorage } from 'react-native';

const DeviceStorge = {

//   async storeToken(key,value) {
//     try {
//        await AsyncStorage.setItem(key,JSON.stringify(value));

//     } catch (error) {
//       console.log("Something went wrong", error);
//     }
//   },

//   async getToken(key) {
//     try {
//       let userData = await AsyncStorage.getItem(key);
//       const item = JSON.parse(userData);
//       console.log(item)
//     return Promise.resolve(item);
       
  
// }catch (error) {
//       console.log("Something went wrong", error);
//     }
//   }
   getItem: async (key) => {
        try {
             let result = await AsyncStorage.getItem(key);
             return JSON.parse(result);
        } 
        catch (e) {
             throw e;
        } 
    },

    setItem: async (key, value) => {

        try {
            const item = JSON.stringify(value);

            return await AsyncStorage.setItem(key, item);
        } catch (e) {
            throw e;
        }
    }

}

export default DeviceStorge;