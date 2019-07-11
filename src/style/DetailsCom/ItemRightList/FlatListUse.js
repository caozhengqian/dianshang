import React,{useContext} from 'react';
import {
    FlatList,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import useFlatList from '../../../hooks/detailsCom/useFlatList'
import {TodosDispatch} from '../Item'
function FlatListuse(scrollIndex) {
    const FlatList1 = useFlatList(scrollIndex);
    console.info('scrollIndex')
    console.info(scrollIndex)
    return (
        <View>
            <FlatList
                style={styles.abc}
                ListEmptyComponent={<CreateEmptyView/>}
                //底部显示
                ListFooterComponent={<FootCom/>}
                //下拉到哪里开始刷新
                onEndReachedThreshold={0.1}
                //等待加载数据时，是否显示加载符号
                refreshing={true}
                {...FlatList1}
            />
        </View>

    )
}


//创建尾部
function FootCom(){
    return (

        <View>
        </View>
    )
}
//数据为空的时候显示
function CreateEmptyView() {
    return (
        <View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 16}}>
                暂无列表数据，下啦刷新
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    abc:{
        backgroundColor:'white',
        height:500,
    }
});
export default FlatListuse;