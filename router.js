import React from 'react';
import { StackNavigator } from 'react-navigation';
import AgendaScreen from './Components/Agenda';

const RootNavigator = StackNavigator({
  Home: {
    screen: AgendaScreen,
    navigationOptions: {
    	title: 'Home Screen'
    }
  }
});

export default RootNavigator;