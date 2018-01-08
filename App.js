import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AgendaScreen from './Components/Agenda';
import RootNavigator from './router.js';

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
