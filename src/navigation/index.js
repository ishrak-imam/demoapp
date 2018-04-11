
import {StackNavigator} from 'react-navigation';
import {connectTheme} from '../utils/theme';

import Signin from '../modules/auth/signin';

export default StackNavigator(
  {
    Signin: {
      screen: connectTheme(Signin),
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Signin',
    headerMode: 'screen'
  }
);
