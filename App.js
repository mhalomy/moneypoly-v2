import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { MainNavigator } from './MainNavigator';

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <MainNavigator />
      </Provider>
    );
  }
}