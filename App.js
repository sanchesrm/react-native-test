import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import RootNavigator from './router.js';

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
