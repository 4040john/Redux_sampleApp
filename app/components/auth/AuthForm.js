import React, {Component} from 'react';
import {StyleSheet, View, Text, Platform, Button} from 'react-native';
import Input from '../../utils/forms/Input';
import validationRules from '../../utils/forms/ValidationRules';
import Logger from '../../utils/Logger';

class AuthForm extends Component {
  state = {
    // type: 'Register',
    type: '로그인', // 로그인 / 등록
    action: '로그인', // 로그인 / 등록
    actionMode: '회원가입', // 회원가입 / 로그인 화면으로
    hasErrors: false,
    form: {
      email: {
        value: '',
        type: 'textInputRevised',
        rules: {
          isRequired: true,
          isEmail: true,
        },
        valid: false,
      },
      password: {
        value: '',
        type: 'textInput',
        rules: {
          isRequired: true,
          minimumLength: 6,
        },
        valid: false,
      },
      confirmPassword: {
        value: '',
        type: 'textInput',
        rules: {
          confirmPassword: 'password',
        },
        valid: false,
      },
    },
  };

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false,
    });
    let formCopy = this.state.form;
    formCopy[name].value = value;

    //rules
    let rules = formCopy[name].rules;
    let valide = validationRules(value, rules, formCopy);
    formCopy[name].valid = valide;

    this.setState({
      form: formCopy,
    });

    // Logger.debug('form', this.state.form);
  };

  confirmPassword = () =>
    this.state.type != '로그인' ? (
      <Input
        value={this.state.form.confirmPassword.value}
        type={this.state.form.confirmPassword.type}
        secureTextEntry={true}
        placeholder="비밀번호 재입력"
        placeholderTextColor="#ddd"
        onChangeText={value => this.updateInput('confirmPassword', value)}
      />
    ) : null;
  changeForm = () => {
    const type = this.state.type;

    this.setState({
      type: type === '로그인' ? '등록' : '로그인',
      action: type === '로그인' ? '등록' : '로그인',
      actionMode: type === '로그인' ? '로그인 화면으로' : '회원가입',
    });
  };

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
            // fontweight: 'bold',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          입력정보를 확인하시길 바랍니다.
        </Text>
      </View>
    ) : null;

  submitUser = () => {
    //Init
    let isFormValide = true;
    let submittedForm = {};
    const formCopy = this.state.form;

    for (let key in formCopy) {
      if (this.state.type === '로그인') {
        if (key !== 'confirmPassword') {
          isFormValide = isFormValide && formCopy[key].valid;
          submittedForm[key] = formCopy[key].value;
        }
      } else {
        isFormValide = isFormValide && formCopy[key].valid;
        submittedForm[key] = formCopy[key].value;
        // console.log('isFormValide', isFormValide);
        // console.log('submittedForm[key]', submittedForm[key]);
      }
    }

    if (isFormValide) {
      if (this.state.type === '로그인') {
        console.log('로그인:');
        for (let key in submittedForm) {
          console.log(submittedForm[key]);
        }
      } else {
        console.log('회원가입:');
        for (let key in submittedForm) {
          console.log(submittedForm[key]);
        }
      }
    } else {
      this.setState({
        hasErrors: true,
      });
    }
  };

  render() {
    return (
      <View>
        <Input
          value={this.state.form.email.value}
          type={this.state.form.email.type}
          autoCapitalize={'none'}
          keyboardType="email-address"
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
        <View>
          <View
            style={{
              ...Platform.select({
                ios: {marginTop: 30},
                android: {marginBottom: 10},
              }),
            }}>
            <Button
              title={this.state.action}
              color="#48567f"
              onPress={this.submitUser}
            />
          </View>
          <View
            style={{
              ...Platform.select({
                ios: {marginTop: 15},
                android: {marginBottom: 10},
              }),
            }}>
            <Button
              title={this.state.actionMode}
              color="#48567f"
              onPress={this.changeForm}
            />
          </View>
          <View
            style={{
              ...Platform.select({
                ios: {marginTop: 15},
                android: {marginBottom: 10},
              }),
            }}>
            <Button
              title="비회원 로그인"
              color="#48567f"
              onPress={() => this.props.goWithoutLogin()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default AuthForm;
