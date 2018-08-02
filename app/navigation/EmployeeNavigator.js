import { createStackNavigator } from 'react-navigation';
import EmployeeListScreen from '../components/EmployeeListScreen';
import EmployeeCreateScreen from '../components/EmployeeCreateScreen';
import EmployeeEditScreen from '../components/EmployeeEditScreen';

const EmployeeNavigator = createStackNavigator({

  EmployeeList: {
    screen: EmployeeListScreen, 
    navigationOptions: {
      gesturesEnabled: false
    },
  },
  EmployeeCreate: {
    screen: EmployeeCreateScreen
  },
  EmployeeEdit: {
    screen: EmployeeEditScreen
  }
},
  {
    initialRouteName: 'EmployeeList',
    modal: 'modal',
  });

export default EmployeeNavigator