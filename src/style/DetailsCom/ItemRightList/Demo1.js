import React, {useState,useContext,useEffect} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { InputItem} from '@ant-design/react-native';

import useFlatList from '../../../hooks/DetailsCom/ItemRightList/useFlatList'
import useInputItem from '../../../hooks/useInputItem'
import Demo from './Demo'

export default  function Demo1(props) {
    const [flatListData, setFlatListData] = useState([]);
    const [page, setPage] = useState();
    const FlatList1 = useFlatList(flatListData);
    const name = useInputItem('caozhengqian');
    useEffect(
        () => {
            console.info('执行了effect')

            let ignore = false;
                fetch("http://m.app.haosou.com/index/getData?type=1&page=1")
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (!ignore) setFlatListData(responseJson.list)

                    })
                    .catch((error) => {
                        console.error(error);
                    });
            return (()=>{
                console.info('卸载了effetct')})
            },[]);
    useEffect(
        () => {
            console.info('再次执行了执行了effect');
            return (()=>{
                console.info('再次卸载了effetct')})

        },[]);

    return (
        <View style={{flex:1,flexDirection:'column'}}>
            <FlatList {...FlatList1} />
            <InputItem {...name}   />
            <Demo/>
        </View>
    )
}

