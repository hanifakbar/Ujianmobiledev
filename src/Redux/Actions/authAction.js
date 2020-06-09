import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

    export const getData = () => {
        return async dispatch => {
            try {
                let res = await Axios.get('https://api.thecatapi.com/v1/images/search?limit=10',
                    {headers:{
                        " X-Api-Key" : "0efaa3b6-06b2-4de4-9b59-41dbc340b0e4"
                    }}
                )
                
                                // console.log(res.data)
                dispatch({
                    type: 'GETDATA',
                    payload: res.data
                })
            } catch (error) {
                
            }
        }
    }

    export const loginAction = (data) => {
        console.log(data)
        return async dispatch => {
            try {
                dispatch({
                    type: 'LOGIN',
                    payload: data
                })
                await AsyncStorage.setItem('username', JSON.stringify(data))
            } catch (error) {
                
            }
        }
    }

    export const keepLogin = () => {
        return async dispatch => {
            try {
                let data = await AsyncStorage.getItem('username')
                data = JSON.parse(data)
                dispatch({
                    type: 'LOGIN',
                    payload: data
                })
            } catch (error) {
                
            }
        }
    }

    export const imageAction = (data) => {
        return async dispatch => {
            try {
                dispatch({
                    type: 'IMAGE',
                    payload: data
                })
            } catch (error) {
                
            }
        }
    }

    export const logoutAction = () => {
        return async dispatch => {
            try {
                dispatch({
                    type: 'LOGOUT'
                })
                await AsyncStorage.removeItem('username')
            } catch (error) {
                
            }
        }
    }