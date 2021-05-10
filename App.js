import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { TabNavigator } from './components/TabNavigator';
import SignupLoginScreen from './screens/SignupLoginScreen';

export default class App extends React.Component {
  render() {
    return(
      <AppContainer />
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  Login: {screen: SignupLoginScreen},
  TabNavigator: {screen: TabNavigator},
});

const AppContainer = createAppContainer(SwitchNavigator);