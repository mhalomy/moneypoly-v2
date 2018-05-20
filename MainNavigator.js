import { createBottomTabNavigator } from 'react-navigation';
import { Home } from './src/screens';

export const MainNavigator = createBottomTabNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: {
    tabBarVisible: true
  },
  lazy: true
});