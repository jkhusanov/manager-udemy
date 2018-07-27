import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

import { Card, CardSection, Input, CustomButton, Spinner } from './common'

class LoginFormScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerTintColor: '#2F80ED',
    headerStyle: { backgroundColor: '#FAFAFA', borderBottomWidth: 0.5, borderBottomColor: '#aaaaaa', },

  };
  onEmailChangeText(text) {
    this.props.emailChanged(text)
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }
  onButtonPress() {
    const { email, password, navigation } = this.props
    this.props.loginUser({email, password, navigation})

  }
  renderError() {
    if(this.props.error) {
      return(
        <View style={styles.errorContainer}>
          <Text style = {styles.errorStyles}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }
  render() {
    return (
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
          {this.renderError()}
          <CardSection>
            { this.props.loading ? 
            <Spinner size="large"/> :
            <CustomButton onPress={this.onButtonPress.bind(this)}>
              Login
            </CustomButton>
            }
          </CardSection>
        </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorStyles: {
    fontSize: 16,
    color: 'red',
    alignSelf: 'center',
  },
});
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginFormScreen);