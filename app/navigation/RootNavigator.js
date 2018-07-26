import { createStackNavigator } from 'react-navigation';
import EmployeeNavigator from './EmployeeNavigator';

export default createStackNavigator ({
  Employee: {
    screen: EmployeeNavigator,
  }, 

}, 
{
  headerMode: "none",
  mode: "modal",
})