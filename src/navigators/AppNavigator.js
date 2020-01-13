import {createStackNavigator} from 'react-navigation-stack';
import {AuthLoadingScreen, LoginScreen} from '../screens';
import {createSwitchNavigator} from 'react-navigation';

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    // App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default AppNavigator;
