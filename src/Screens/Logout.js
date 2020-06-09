import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../Redux/Actions/authAction';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';

const Logout = () => {
    let dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutAction())
        AsyncStorage.removeItem()
    }

    return (
        <View style={styles.container}>
            <View>
                <Button 
                    title="LOGOUT"
                    onPress={handleLogout}
                    containerStyle={{
                        alignItems: 'center'
                    }}
                    buttonStyle={{
                        backgroundColor: '#3DDC84',
                        width: '55%'
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Logout;