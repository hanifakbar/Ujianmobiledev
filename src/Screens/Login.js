import React, { useState } from 'react';
import { View,StyleSheet } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { loginAction } from '../Redux/Actions/authAction';

const Login = ({navigation}) => {
    let [username, setUsername] = useState('');
    console.log(username)
    let dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Icon type="material" name="android" color="#3DDC84" size={200} />
            <Input 
                placeholder="Username"
                onChangeText={e => setUsername(e)}
            />
            <View>
                <Button 
                    title="Login"
                    containerStyle={{
                        alignItems: 'center'
                    }}
                    buttonStyle={{
                        backgroundColor: '#3DDC84',
                        width: '15%'
                    }}
                    onPress={() => dispatch(loginAction({username}))}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',

    }
})

export default Login;