import React from 'react';
import { StyleSheet, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, CustomButton } from './common';


class EmployeeScreen extends React.Component {
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
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Input a name"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{flexDirection: 'column',}}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value})}
          >
            <Picker.Item label="Monday" value="Monday"/>
            <Picker.Item label="Tuesday" value="Tuesday"/>
            <Picker.Item label="Wednesday" value="Wednesday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
            <Picker.Item label="Saturday" value="Saturday"/>
            <Picker.Item label="Sunday" value="Sunday"/>
          </Picker>
        </CardSection>

        <CardSection>
          <CustomButton>
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

export default connect(mapStateToProps, { employeeUpdate }) (EmployeeScreen);