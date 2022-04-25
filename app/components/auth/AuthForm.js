/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Input from '../../utils/forms/Input';

class AuthForm extends Component {
  state = {
    type: 'Register',
    // type: 'Login',
    action: 'Login',
    action: '새로 등록할게요~',
    hasErrors: true,
    form: {
      email: {value: '', type: 'textInputRevised', rulese: {}, valid: false},
      password: {value: '', type: 'textInput', rulese: {}, valid: false},
      confirmPassword: {value: '', type: 'textInput', rulese: {}, valid: false},
    },
  };

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false,
    });
    let formCopy = this.state.form;
    formCopy[name].value = value;

    this.setState({
      form: formCopy,
    });

    console.log(this.state.form);
  };

  confirmPassword = () =>
    this.state.type != 'Login' ? (
      <Input
        value={this.state.form.confirmPassword.value}
        type={this.state.form.confirmPassword.type}
        secureTextEntry={true}
        placeholder="비밀번호 재입력"
        placeholderTextColor="#ddd"
        onChangeText={value => this.updateInput('confirmPassword', value)}
      />
    ) : null;

  formHasErrors = () =>
    this.state.hasErrors ? (
      <View
        style={{
          marginBottom: 10,
          marginTop: 30,
          padding: 20,
          backgroundColor: '#ee3344',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontweight: 'bold',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          입력정보를 확인하시길 바랍니다.
        </Text>
      </View>
    ) : null;

  render() {
    return (
      <View>
        <Input
          value={this.state.form.email.value}
          type={this.state.form.email.type}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          placeholder="이메일 주소"
          placeholderTextColor="#ddd"
          onChangeText={value => this.updateInput('email', value)}
        />
        <Input
          value={this.state.form.password.value}
          type={this.state.form.password.type}
          secureTextEntry={true}
          placeholder="비밀번호"
          placeholderTextColor="#ddd"
          onChangeText={value => this.updateInput('password', value)}
        />
        {this.confirmPassword()}
        {this.formHasErrors()}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default AuthForm;
