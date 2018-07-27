import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';



export default class EmployeeScreen extends React.Component {
  static navigationOptions = {
    title: 'Employee',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerTintColor: '#2F80ED',
    headerStyle: { backgroundColor: '#FAFAFA', borderBottomWidth: 0.5, borderBottomColor: '#aaaaaa', },
  };
  render() {

    return (
      <View style = {styles.container}>
        <Text> 
          Employee One
        </Text>

      </View>
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
