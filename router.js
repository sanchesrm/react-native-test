import React from 'react';
import { Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import AgendaScreen from './Components/Agenda';
import AddCompromisso from './Components/AddCompromisso';

export default DrawerNavigator({
  Calendar: {
    screen: AgendaScreen
  },
  'Add Class': {
    screen: AddCompromisso
  }
}, {
	drawerWidth: Dimensions.get('window').width * 0.6,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});