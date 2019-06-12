import React from 'react';

import {
    TextInput,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {useFormInput} from './use/useFormInput'
import { Button } from '@ant-design/react-native';
export default function Greeting(props) {
    const name = useFormInput();
    return (
        <View style={styles.abc}>
            <Text >驾乘报告</Text>
            <TextInput  {...name}/>
            <Button>abc</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center'
    },
    welcome: {
        marginTop: 10,
    },
    abc:{
        backgroundColor:'red',
        height:300,
    }
});