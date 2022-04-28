export const APIKEY = `AIzaSyBTQkEWdzIItatzoSSBlLWI29hJOJYjq_g`;
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setTokens = async (values, callback) => {
  const firstPair = ['@winthary_app@userId', values.userId];
  const secondPair = ['@winthary_app@token', values.token];
  const thirdPair = ['@winthary_app@refToken', values.refToken];
  try {
    await AsyncStorage.multiSet([firstPair, secondPair, thirdPair]).then(
      response => {
        callback();
      },
    );
  } catch (e) {
    //save error
  }
};

export const getTokens = async callback => {
  let values;
  try {
    values = await AsyncStorage.multiGet([
      '@winthary_app@userId',
      '@winthary_app@token',
      '@winthary_app@refToken',
    ]).then(value => {
      console.log('value', value);
      callback(value);
    });
  } catch (e) {
    // read error
  }
  // example console.log output:
  // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
};
