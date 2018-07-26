import { createStackNavigator } from 'react-navigation';
import EmployeeListScreen from '../components/EmployeeListScreen';
import LoginFormScreen from '../components/LoginFormScreen';
import EmployeeScreen from '../components/Emloyee';

const EmployeeNavigator = createStackNavigator({
  Login: {
    screen: LoginFormScreen,

  },
  EmployeeList: {
    screen: EmployeeListScreen, 
    navigationOptions: {
      gesturesEnabled: false
    },
  },
  EmployeeCreate: {
    screen: EmployeeScreen
  }
},
  {
    initialRouteName: 'Login',
    modal: 'modal',
  });

export default EmployeeNavigator