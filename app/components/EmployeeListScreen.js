import React from 'react';
import { StyleSheet, Button, View } from 'react-native';


export default class EmployeeListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
    title: 'Employees',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerTintColor: '#2F80ED',
    headerStyle: { backgroundColor: '#FAFAFA', borderBottomWidth: 0.5, borderBottomColor: '#aaaaaa', },
    headerRight: (
      <Button
        onPress={() => navigation.navigate('EmployeeCreate')}
        title="Add"
        color="#2F80ED"
      />
    )
  }
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
