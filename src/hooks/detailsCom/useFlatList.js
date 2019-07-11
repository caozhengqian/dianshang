import React, {useState,useEffect,useReducer } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    RefreshControl,
} from 'react-native';

import useDataApi from '../../fetch/useDataApi'
// import {StatutsContext} from "../../../context/superContext";
import FetchUrl from "../../context/fetchUrl";

//屏幕信息
const dimensions = require('Dimensions');
//获取屏幕的宽度和高度
const {width} = dimensions.get('window');

export default function useFlatList(initData) {
    // const [page,setPage] = useState(initData.scrollIndex)
    const [{ data}, doFetch] = useDataApi('',{payload:{list:[]}});

    let [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "REFRESH":
                    return {
                        ...state,
                        page:state.page = 1,
                        isRefresh:!state.isRefresh
                    };
                case "LOADMORE":
                    return {
                        ...state,
                        page:state.page+1,
                    };
                case "FETCH":
                    return {
                        ...state,
                        page:action.index,
                    };
                default:
                    return state;
            }
        },
        {
            page: 1,
            isRefresh:false,
        }
    );

    useEffect(
        () => {
            console.info(state.page);
            console.info(`${FetchUrl.getFlatListData}?type=1&page=${state.page}`)
            doFetch({url:`${FetchUrl.getFlatListData}?type=1&page=${state.page}`,
                method:'GET',
                header:{},
                body:{}
            })
        },[doFetch, state.page,state.isRefresh]);
    useEffect(
        () => {
            console.info('initDataChange');
            dispatch({ type: "FETCH" ,index:initData.scrollIndex});

        },[initData]);

    useEffect(
        ()=>{
            console.info('执行了useflatlist');
        }
    )

    //一、用该组件显示
    const items = (item)=>{
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>onItemClick(item)}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: 'center',
                    marginTop: 5,
                    backgroundColor: '#fff',
                    padding: 10
                }}>
                    <Image source={{uri: item.logo_url}} style={{width: 60,
                        height: 60,
                        resizeMode: 'stretch'}}/>
                    <Text style={{marginLeft: 6}}>
                        {item.baike_name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    //二、点击列表事件
    const onItemClick = (item)=>{
        console.log("page" +  " = " + item.baike_name)
    }

    //三、头部显示(可传入参数item)
    const headerCom = ()=>{
        return (
            <View style={ {
                width: width,
                height: 50,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{color: 'white'}}>
                    头部布局
                </Text>
            </View>
        )
    }

    //四、刷新
    const onRefresh = ()=>{
        dispatch({ type: "REFRESH" });
    }

    //加载更多方法
    const loadMore = ()=>{
        dispatch({ type: "LOADMORE" });
    }

    //分割线样式
    const separator = ()=>{
        return <View style={{height: 1, backgroundColor: '#999999'}}/>;
    }

    //必须设置key
    const key = (item,index)=>{
        return "index" + index + item;
    }

    return {
        data:data.payload.list,
        //用该组件显示
        renderItem: (item)=>items(item.item),
        ListHeaderComponent:(item) => headerCom(item),

        //刷新
        refreshControl:<RefreshControl
            title={'Loadingaa'}
            tintColor={'#ff7847'}
            refreshing={false}
            onRefresh={() =>
                onRefresh()
            }
        />,
        ItemSeparatorComponent:()=>separator(),

        //距离底部多少执行onEndReached
        onEndReachedThreshold:0.1,
        //上面那个执行的具体方法
        onEndReached:()=>loadMore(),
        //必须设置key
        keyExtractor:(item,index)=>key(item,index),


    }
}