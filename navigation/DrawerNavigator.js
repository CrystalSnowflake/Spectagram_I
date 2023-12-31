import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabNavigator from '../navigation/TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {TabNavigator} />
            <Drawer.Screen name = "Profile" compoent = {Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;