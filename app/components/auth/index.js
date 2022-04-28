/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import AuthLogo from './AuthLogo';
import AuthForm from './AuthForm';
import {getTokens, setTokens} from '../../utils/Misc';
import {AutoSignIn} from '../../store/actions/User_actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AuthComponent extends Component {
  state = {
    loading: false,
  };

  goWithoutLogin = () => {
    this.props.navigation.navigate('AppTabComponent');
  };

  componentDidMount() {
    // '@winthary_app@userId',
    // '@winthary_app@token',
    // '@winthary_app@refToken',
    getTokens(value => {
      if (value[1][1] === null) {
        this.setState({loading: false});
      } else {
        this.props.AutoSignIn(value[2][1]).then(() => {
          if (!this.props.User.auth.token) {
            this.setState({loading: false});
          } else {
            setTokens(this.props.User.auth, () => {
              this.goWithoutLogin();
            });
          }
        });
      }
      console.log('get Token', value);
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View>
            <AuthLogo />
            <AuthForm goWithoutLogin={this.goWithoutLogin} />
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#7487C5',
    paddingTop: 130,
    paddingHorizontal: 50,
  },
});

function mapStateToProps(state) {
  return {
    User: state.User,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({AutoSignIn}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
