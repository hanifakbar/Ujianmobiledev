import React, { useEffect } from 'react';
import { View, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../Redux/Actions/authAction';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    let dataKucing = useSelector(state => state.auth.dataKucing);
    let dispatch = useDispatch();
    // console.log(dataKucing)
    
    useEffect(() =>{
        dispatch(getData())
    }, [dispatch])

    return (
        <View style={{backgroundColor: '#626C66', flex:1}}>
            <FlatList 
                keyExtractor={(index) => index.toString()}
                data={dataKucing}
                numColumns={2}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detail', {detail: item})}
                        style={{backgroundColor: '#626C66', flex:1}}
                    >
                        <Image
                        style={{width: 200, height: 200}}
                        source={{
                            uri: item.url
                        }}
                    />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Home;