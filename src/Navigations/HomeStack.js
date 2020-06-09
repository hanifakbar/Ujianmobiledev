import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Detail} from '../Screens';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
};

export default HomeStack;