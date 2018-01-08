import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import AgendaScreen from './Components/Agenda';

const DrawerStack = DrawerNavigator({
  screen: { AgendaScreen: AgendaScreen }
}, {
  initialRouteName: 'AgendaScreen',
  // contentComponent: Menu,
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'Welcome!',
    headerTintColor: 'white',
  })
});

const RootNavigator = StackNavigator({
  // Home: {
  //   screen: AgendaScreen,
  //   navigationOptions: {
  //   	title: 'Home Screen'
  //   }
  // },
  drawerStack: {DrawerStack}
});

export default RootNavigator;