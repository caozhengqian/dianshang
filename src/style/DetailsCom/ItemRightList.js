import React from 'react';
import {  View } from 'react-native';
import {InputItem} from '@ant-design/react-native';
// import Demo from './itemRightList/Demo'
import Demo1 from './ItemRightList/FlatListUse'
import useInputItem from '../../hooks/useInputItem'



export default function ItemRightList(){
    const InputItems = useInputItem('hello');

    // const FlatList1 = useFlatList({});
        return (
            <View style={{ flex: 1,  backgroundColor: 'fff3eb' }}>
                <Demo1/>
                <InputItem {...InputItems}/>
            </View>
        );
}