import React,{useEffect,useReducer,useContext} from 'react';
import { View ,ScrollView} from 'react-native';
import { List } from '@ant-design/react-native';
// import useItem from './useItem'
// import useEventCallback from '../../hooks/
// import {ItemContext} from './itemContext'
import {TodosDispatch} from './Item'
// ItemLeftList.contextType = TodosDispatch;

export default function ItemLeftList(initData){
    let items = ['蔬菜','蛋白质','肉类','水果','主食']
    const dispatchItem = useContext(TodosDispatch);

    let [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "ClickItem":
                    return {
                        ...state,
                        isClick:action.index,
                        clickValue:items[action.index],
                    };
                default:
                    return state;
            }
        },
        {
            isClick: 0,
            clickValue:'蔬菜',
            items:items
        }
    );
    // const dispatchItem = useContext(TodosDispatch);
    // const onChange=()=>{
    //
    // }
    // const {ItemLeftData,clickValue}= useItem()

   // const callback =  useEventCallback((items) => {
   //      clickValue(items)
   //  }, [clickValue]);
   //  useEffect(
   //      ()=>{
   //          dispatchItem({ type: 'ItemClick', ItemLeftListData: items });
   //      },[dispatchItem, items]
   //  )
    useEffect(
        ()=>{
            console.info('intitData')
            console.info(initData)
            console.info(TodosDispatch)
        },[]
    )
    function onPressItemLeft (index) {
        dispatch({ type: "ClickItem", index })
        dispatchItem({ type: 'ItemClick', text: [items,index] });
    }
    const Item = List.Item;
    console.info(state.clickValue)
        return (
            <View style={{ flex: 1,  backgroundColor: 'fff3eb' }}>
                <ScrollView
                    style={{ flex: 1, backgroundColor: '#f5f5f9' }}
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <List>
                        {state.items.map((value,index)=>(
                            state.isClick == index
                                ?
                                    <Item style={{  backgroundColor: 'red' }}
                                        key={index}
                                        onPress={()=>{ onPressItemLeft(index)}}
                                    >
                                        {value}
                                    </Item>
                                :
                                    <Item
                                        key={index}
                                        onPress={()=>{ onPressItemLeft(index)}}
                                           >
                                            {value}
                                    </Item>
                        ))}
                    </List>
                </ScrollView>
            </View>
        );
}