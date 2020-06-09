import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import {Icon} from 'react-native-elements';
import ProfileDrawer from './ProfileDrawer';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    let iconName;
                    if(route.name === 'Home'){
                        iconName = 'home'
                    } else {
                        iconName = 'account-circle'
                    }
                    return <Icon 
                        type="material"
                        name={iconName}
                        color={color}
                    />
                }
            })}
            tabBarOptions={{
                activeTintColor: '#3DDC84'
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Profile" component={ProfileDrawer} />
        </Tab.Navigator>
    );
};

export default TabNavigation;