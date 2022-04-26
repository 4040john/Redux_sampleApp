import {SIGN_IN, SIGN_UP} from '../types';

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
  return {
    type: SIGN_UP,
    payload: {
      email: data.email,
      token: data.password,
    },
  };
}
