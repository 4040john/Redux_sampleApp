import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

const Input = props => {
  let template = null;
  switch (props.type) {
    case 'textInput':
      template = <TextInput {...props} style={styles.input} />;
      break;
    case 'textInputRevised':
      template = <TextInput {...props} style={styles.inputRevised} />;
      break;

    default:
      return template;
  }

  return template;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 17,
    padding: 5,
    marginTop: 30,
  },
  inputRevised: {
    width: '100%',
    // borderBottomWidth: 3,
    // borderBottomColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 17,
    padding: 5,
    marginTop: 30,
  },
});

export default Input;
