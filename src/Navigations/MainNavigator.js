import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import TabNavigation from './TabNavigation';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {keepLogin} from '../Redux/Actions/authAction';

const MainNavigation = () => {
    let username = useSelector(state => state.auth.username)
    let dispatch = useDispatch();
                                // console.log(username)
    useEffect(() => {
        AsyncStorage.getItem('username')
        .then(res => {
                                // console.log(res)
            dispatch(keepLogin(res))
        })
        .catch(err => {
            console.log(err)
        })
    }, [dispatch])

    return (
        <NavigationContainer>
            {
                username
                ?
                <TabNavigation />
                :
                <AuthStack />
            }
        </NavigationContainer>
    );
};

export default MainNavigation;