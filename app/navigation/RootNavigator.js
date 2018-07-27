import { createSwitchNavigator } from 'react-navigation';
import EmployeeNavigator from './EmployeeNavigator';
import LoginStack from './LoginStack';

export default createSwitchNavigator ({
  LoginStack: {
    screen: LoginStack
  },
  Employee: {
    screen: EmployeeNavigator,
  }, 

}, 
{
  initialRouteName: 'LoginStack',
})