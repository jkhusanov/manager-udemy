import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './app/reducers';
import API_KEYS from './app/utils/config_keys';
import LoginForm from './app/components/LoginForm';

export default class App extends React.Component {
  componentDidUpdate(){
    firebase.initializeApp({
      apiKey: API_KEYS[0].apiKey,
      authDomain: API_KEYS[0].authDomain,
      databaseURL: API_KEYS[0].databaseURL,
      projectId: API_KEYS[0].projectId,
      storageBucket: API_KEYS[0].storageBucket,
      messagingSenderId: API_KEYS[0].messagingSenderId
    });
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm/>

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
