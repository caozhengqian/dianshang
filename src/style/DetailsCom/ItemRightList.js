import React from 'react';
import { Text, View ,ScrollView,Item} from 'react-native';
import { List } from '@ant-design/react-native';

import Demo from './ItemRightList/Demo'
import Demo1 from './ItemRightList/Demo1'

export default function ItemRightList(props){
        return (
            <View style={{ flex: 1,  backgroundColor: 'fff3eb' }}>
                {/*<Demo/>*/}
                <Demo1/>
            </View>
        );
}