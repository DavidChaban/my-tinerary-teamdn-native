import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cities from '../src/Screens/Cities';



const StackNav = createNativeStackNavigator();

export default function Stack() {
    return (
        <StackNav.Navigator>
            <StackNav.Screen name="Cities" component={Cities} />
     
        </StackNav.Navigator>
    )
}