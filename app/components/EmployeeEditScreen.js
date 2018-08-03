import _ from 'lodash';
import React from 'react';
import { StyleSheet, Picker, ScrollView } from 'react-native';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, clearEmployeeForm, employeeDelete } from '../actions';
import { Card, CardSection, Confirm, CustomButton } from './common';
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

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  componentDidMount() {
    _.each(this.props.navigation.state.params.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
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

  onAccept() {
    const { uid } = this.props.navigation.state.params.employee
    const { navigation } = this.props
    this.props.employeeDelete({ uid, navigation })
  }
  onDecline() {
    this.setState ({
      showModal: false,
    })
  }

  render() {
    // console.log(this.props.navigation.state.params && this.props.navigation.state.params.employee)
    return (
      <ScrollView>
      <Card>
        <EmployeeForm {...this.props} />
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

        <CardSection>
          <CustomButton onPress={() => this.setState({ showModal: !this.state.showModal})}>
            Fire Employee
          </CustomButton>
        </CardSection>

        <Confirm visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
      </ScrollView>
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

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  clearEmployeeForm,
  employeeDelete
})(EmployeeEditScreen);