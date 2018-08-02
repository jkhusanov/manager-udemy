import _ from 'lodash';
import React from 'react';
import { StyleSheet, Picker, Text } from 'react-native';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, clearEmployeeForm } from '../actions';
import { Card, CardSection, Input, CustomButton } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEditScreen extends React.Component {
  static navigationOptions = {
    title: 'Edit Employee',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerTintColor: '#2F80ED',
    headerStyle: { backgroundColor: '#FAFAFA', borderBottomWidth: 0.5, borderBottomColor: '#aaaaaa', },
  };

  componentDidMount() {
    _.each(this.props.navigation.state.params.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }
  componentWillUnmount() {
    this.props.clearEmployeeForm()
  }

  onButtonPress() {
    const { name, phone, shift, navigation } = this.props;

    // console.log(name, phone, shift)
    this.props.employeeSave({ name, phone, shift, uid: this.props.navigation.state.params.employee.uid, navigation })
  }

  onTextButtonPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  render() {
    // console.log(this.props.navigation.state.params && this.props.navigation.state.params.employee)
    return (
      <Card>
        <EmployeeForm { ...this.props}/>
        <CardSection>
          <CustomButton onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </CustomButton>
        </CardSection>
        <CardSection>
            <CustomButton onPress={this.onTextButtonPress.bind(this)}>
              Text Schedule
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
  employeeSave,
  clearEmployeeForm, 
}) (EmployeeEditScreen);