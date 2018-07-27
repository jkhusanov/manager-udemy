import { createStackNavigator } from 'react-navigation';
import LoginFormScreen from '../components/LoginFormScreen';


export default createStackNavigator({
  LoginStack: {
    screen: LoginFormScreen,
  },
});