import _ from 'lodash'
import React from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeListScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.employeesFetch();
  };


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

  renderItem(employee) {
    return (
    <ListItem
      employee = {employee}
    />
    )
  }

  render() {
    // console.log(this.props.navigation)
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.employees}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
const mapStateToProps = state => {
  //transforming object to array
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};
export default connect(mapStateToProps, { employeesFetch })(EmployeeListScreen);
