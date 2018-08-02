import React from 'react';
import { StyleSheet, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, CustomButton } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreateScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Employee',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerTintColor: '#2F80ED',
    headerStyle: { backgroundColor: '#FAFAFA', borderBottomWidth: 0.5, borderBottomColor: '#aaaaaa', },
  };
  onButtonPress(){
    const { name, phone, shift, navigation } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday', navigation })
  }
  render() {
    console.log(this.props.navigation.state.params && this.props.navigation.state.params.employee)
    return (
      <Card>
        <EmployeeForm { ...this.props}/>
        <CardSection>
          <CustomButton onPress={this.onButtonPress.bind(this)}>
            Create
          </CustomButton>
        </CardSection>
      </Card>
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
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  }
});


const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return {name, phone, shift };
};

export default connect(mapStateToProps, { 
  employeeUpdate, 
  employeeCreate 
}) (EmployeeCreateScreen);