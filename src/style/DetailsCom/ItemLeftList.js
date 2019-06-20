import React from 'react';
import { Text, View ,ScrollView,Item} from 'react-native';
import { List } from '@ant-design/react-native';


export default function ItemLeftList(props){
    const Item = List.Item;
        return (
            <View style={{ flex: 1,  backgroundColor: 'fff3eb' }}>
                <ScrollView
                    style={{ flex: 1, backgroundColor: '#f5f5f9' }}
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <List >
                        <Item >
                            蔬菜
                        </Item>
                        <Item >
                            蛋白质
                        </Item>
                        <Item >
                            肉类
                        </Item>
                        <Item >
                            水果
                        </Item>
                        <Item >
                            主食
                        </Item>
                    </List>
                </ScrollView>
            </View>
        );
}