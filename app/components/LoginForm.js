import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';

import { Card, CardSection, Input, CustomButton } from './common'

class LoginForm extends React.Component {

  onEmailChangeText(text) {
    this.props.emailChanged(text)
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }
  render() {
    return (
      <SafeAreaView>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="account@example.com"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={this.onEmailChangeText.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              label="Password"
              placeholder="Your password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <CardSection>
            <CustomButton>
              Login
            </CustomButton>
          </CardSection>
        </Card>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);