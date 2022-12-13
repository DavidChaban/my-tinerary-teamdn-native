import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cities from '../src/Screens/Cities';


const DrawerNav = createDrawerNavigator();

export default function Drawer() {
    return (
        <DrawerNav.Navigator>
            <DrawerNav.Screen name="Cities" component={Cities} />
            
        </DrawerNav.Navigator>
    );
}