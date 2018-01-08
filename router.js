import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import AgendaScreen from './Components/Agenda';
import Page1 from './Components/Page1';

export default DrawerNavigator({
  Menu: {
    screen: AgendaScreen
  },
  Page2: {
    screen: Page1
  }
}, {
  drawerWidth: 300,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});