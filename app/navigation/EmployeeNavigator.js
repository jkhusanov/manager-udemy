import { createStackNavigator } from 'react-navigation';
import EmployeeListScreen from '../components/EmployeeListScreen';
import EmployeeScreen from '../components/EmployeeScreen';

const EmployeeNavigator = createStackNavigator({

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
    initialRouteName: 'EmployeeList',
    modal: 'modal',
  });

export default EmployeeNavigator