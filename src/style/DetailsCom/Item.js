import React,{useReducer,useState,useEffect,useContext} from 'react';
import {  View } from 'react-native';
import {  SearchBar } from '@ant-design/react-native';

import ItemLeftList from './ItemLeftList'
import FlatListUse from './ItemRightList/FlatListUse'


export const TodosDispatch = React.createContext({'a':'a'} );
export function Item(){
    // const [itemValue,setItemvalue] = useState();
    // let theme = useContext(ItemContext)
    let [states, dispatch] = useReducer(
        (states, action) => {
            switch (action.type) {
                case "ItemClick":
                    return {
                        ...states,
                        itemLeftData:action.text[0],
                        itemLeftIndex:action.text[1]
                    };

                default:
                    return states;
            }
        },
        {
            itemLeftData: '默认的itemLeftData',
            itemLeftIndex:1
        }
    );
    useEffect(
        ()=>{
            console.info('state开始')
            console.info(states)

            console.info('state结束')

        },
        [states]
    )

        return (
            <View style={{ flex: 1,  backgroundColor: 'fff3eb' }}>
                <TodosDispatch.Provider value={dispatch}>
                    <SearchBar placeholder="Search" showCancelButton style={{ backgroundColor: '#fff3eb' ,borderLeftColor:'#ffd8c2'}} />
                    <View style={{ flex: 10,backgroundColor: 'fff3eb',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{ flex: 3,backgroundColor: 'red',flexDirection:'row',justifyContent:'space-between'}}>
                            <ItemLeftList states={states}/>
                        </View>
                        <View style={{ flex: 7,backgroundColor: 'yellow',flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{ flex: 1,  backgroundColor: 'fff3eb' }}>
                                <FlatListUse scrollIndex={states.itemLeftIndex}/>
                            </View>
                        </View>
                    </View>
                </TodosDispatch.Provider>
            </View>
        );
}