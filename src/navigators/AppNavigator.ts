import {createStackNavigator} from 'react-navigation-stack';
import {
  AuthLoadingScreen,
  LoginScreen,
  DashboardScreen,
  RegisterScreen,
  WelcomeScreen,
  HistoryScreen,
  ProfileScreen,
  VoucherScreen,
  VoucherDetailScreen,
  EditProfileScreen,
  ChangeUsernameScreen,
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
    History: HistoryScreen,
    Profile: ProfileScreen,
    Voucher: VoucherScreen,
    VoucherDetail: VoucherDetailScreen,
    EditProfile: EditProfileScreen,
    ChangeUsername: ChangeUsernameScreen,
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
    initialRouteName: 'AuthLoading',
  },
);

export default AppNavigator;
