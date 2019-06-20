import React, {useState,useContext, useEffect } from 'react';
import {
    TextInput,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    RefreshControl,
} from 'react-native';

//屏幕信息
const dimensions = require('Dimensions');
//获取屏幕的宽度和高度
const {width, height} = dimensions.get('window');

export default function useFlatList(flatListData) {

    const styles = StyleSheet.create({
        abc:{
            backgroundColor:'white',
            height:200,
        }
    });

   const items = (item)=>{
       // console.info(item);
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
    const emptyCom = ()=>{
        return (
            <View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 16,color:'red'}}>
                    暂无列表数据，下拉刷新
                </Text>
            </View>
        )
    }

    const onItemClick = (item)=>{
        console.log("page" +  " = " + item.baike_name)
    }
    const headerCom = (item)=>{
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
    const footCom = (item)=>{
        return (
            <View style={{
                flexDirection: 'row',
                width: width,
                height: 50,
                //backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator/>
                <Text style={{color: 'red'}}>
                   没有更多数据了
                </Text>
            </View>
        )
    }
    const onRefresh = ()=>{
        console.info('促发了onRefresh');

    }
    const loadMore = ()=>{
        console.info('促发了loadMore');

    }
    const separator = ()=>{
        return <View style={{height: 1, backgroundColor: '#999999'}}/>;

    }
    const key = (item,index)=>{
        return "index" + index + item;

    }
    useEffect(
        () => {
            console.info('执行了useFlatelisteffect')


        },[]);
    return {
        style: styles.abc,
        data:flatListData,
        renderItem: (item)=>items(item.item),
        ListEmptyComponent:()=>emptyCom(),
        ListHeaderComponent:()=>headerCom(),
        ListFooterComponent:()=>footCom(),
        refreshControl:<RefreshControl
            title={'Loadingaa'}
            colors={['red']}
            refreshing={false}
            onRefresh={() =>
                onRefresh()
            }
        />,
        refreshing:true,
        onEndReached:()=>loadMore(),
        onEndReachedThreshold:0.1,
        ItemSeparatorComponent:()=>separator(),
        keyExtractor:(item,index)=>key(item,index),

    }
}











// [
//     {key: 'Devin'},
//     {key: 'Jackson'},
//     {key: 'James'},
//     {key: 'Joel'},
//     {key: 'John'},
//     {key: 'Jillian'},
//     {key: 'Jimmy'},
//     {key: 'Julie'}
// ]

// data:{banner:[{id: "01",
//     is_big_banner: "1",
//     isactivity: "1",
//     large_logo_category_url: "http://p0.qhimg.com/t012a2e5af5c66e901d.jpg",
//     soft_order:"2",
//     url: "https://h5.sj.360.cn/CPCTopic/getTopicInfo?actid=266&format=html&showTitleBar=0&webpg=pushnzt_20180525_sweetword"}],
//     list:[
//     {apk_md5: "44d204339d2c43967c3128be1c4800bd",
//         apkid: "com.kugou.android",
//         baike_name: "酷狗音乐 android",
//         box_label: "0",
//         brief: "高人气播放器，贴心音乐伴侣",
//         category_level1_ids: "1,101984",
//         category_level2_ids: "102256,102260",
//         cid: 1,
//         cid2: "102256",
//         down_url: "http://hot.m.shouji.360tpcdn.com/190523/44d204339d2c43967c3128be1c4800bd/com.kugou.android_9225.apk",
//         download_times: "1157313988",
//         download_times_fixed: "115731万次",
//         id: "433",
//         is_ad: "0",
//         is_inscreen_ad: "0",
//         is_offerwall: "0",
//         is_push_ad: "0",
//         logo_url: "http://p0.qhimg.com/t01e80866bc2c058a90.png",
//         logo_url_160: "http://p0.qhimg.com/dr/160_160_/t017c82d27356dca237.png",
//         market_id: "360market",
//         market_name: "360手机助手",
//         name: "酷狗音乐",
//         needapkdata: "0",
//         os_version: "16",
//         rating: "7.9",
//         rating_fixed: 79,
//         short_word: "高人气播放器，贴心音乐伴侣",
//         signature_md5: "f81948027f0a994c5baf926c845b1f8d",
//         single_word: "3500万正版曲库",
//         size: "63719197",
//         size_fixed: 60.77,
//         soft_large_logo_url: "",
//         soft_order: "",
//         tag: "",
//         tag2: "音乐",
//         type: "soft",
//         version_code: "9225",
//         version_name: "9.2.2"}
// ]}