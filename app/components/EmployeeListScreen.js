import React from 'react';
import { StyleSheet, Button, View } from 'react-native';



export default class EmployeeListScreen extends React.Component {
  static navigationOptions = {
    title: 'Employees',
  };
  render() {

    return (
      <View style = {styles.container}>
        <Button 
          title= 'Employee'
          onPress={() => this.props.navigation.navigate('EmployeeCreate')}
        /> 
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
