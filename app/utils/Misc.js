export const APIKEY = `AIzaSyBTQkEWdzIItatzoSSBlLWI29hJOJYjq_g`;
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
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

  console.log('Done.');
};
