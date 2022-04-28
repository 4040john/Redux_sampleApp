import {SIGN_IN, SIGN_UP, AUTO_SIGN_IN} from '../types';

import axios from 'axios';
import {SIGNUP, SIGNIN, REFRESH} from '../../utils/Misc';

export const AutoSignIn = refToken => {
  console.log('data', data);

  const request = axios({
    method: 'POST',
    url: REFRESH,
    data: 'grant_type=refresh_token&refresh_token' + refToken,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(response => {
      //   console.log('response', response.data);
      return response.data;
    })
    .catch(err => {
      console.log('err', err);
      alert('Alert Errors');
      return false;
    });
  return {
    type: AUTO_SIGN_IN,
    payload: request,
  };
};

export function SignIn(data) {
  console.log('data', data);

  const request = axios({
    method: 'POST',
    url: SIGNIN,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      console.log('response', response.data);
      return response.data;
    })
    .catch(err => {
      console.log('err', err);
      alert('Alert Errors');
      return false;
    });
  return {
    type: SIGN_IN,
    payload: request,
  };
}
export function SignUp(data) {
  console.log('data', data);

  const request = axios({
    method: 'POST',
    url: SIGNUP,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      console.log('response', response.data);
      return response.data;
    })
    .catch(err => {
      console.log('err', err);
      alert('Alert Errors');
      return false;
    });
  return {
    type: SIGN_UP,
    payload: request,
  };
}
