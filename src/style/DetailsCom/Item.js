import React from 'react';
import { Text, View } from 'react-native';
import { Icon, SearchBar, TabBar } from '@ant-design/react-native';

import ItemLeftList from './ItemLeftList'
import ItemRightList from './ItemRightList'

export default function Item(props){

        return (
            <View style={{ flex: 1,  backgroundColor: 'fff3eb' }}>
                <SearchBar placeholder="Search" showCancelButton style={{ backgroundColor: '#fff3eb' ,borderLeftColor:'#ffd8c2'}} />
                <View style={{ flex: 10,backgroundColor: 'fff3eb',flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{ flex: 3,backgroundColor: 'red',flexDirection:'row',justifyContent:'space-between'}}>
                        <ItemLeftList/>
                    </View>
                    <View style={{ flex: 7,backgroundColor: 'yellow',flexDirection:'row',justifyContent:'space-between'}}>
                        <ItemRightList/>
                    </View>
                </View>
            </View>
        );
}