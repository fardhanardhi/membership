import {createStackNavigator} from 'react-navigation-stack';
import {
  AuthLoadingScreen,
  LoginScreen,
  DashboardScreen,
  RegisterScreen,
  WelcomeScreen,
} from '../screens';
import {createSwitchNavigator} from 'react-navigation';

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    Welcome: WelcomeScreen,
  },
  {
    initialRouteName: 'Login',
  },
);
const AppStack = createStackNavigator(
  {
    Dashboard: DashboardScreen,
  },
  {
    initialRouteName: 'Dashboard',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default AppNavigator;
