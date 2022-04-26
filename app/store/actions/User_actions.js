import {SIGN_IN, SIGN_UP} from '../types';

import axios from 'axios';
import {SIGNUP} from '../../utils/Misc';

export function SignIn(data) {
  console.log('data', data);
  return {
    type: SIGN_IN,
    payload: {
      email: data.email,
      token: data.password,
    },
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
