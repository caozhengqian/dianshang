import {useState,useContext} from 'react';
import {
    TextInput,
    View,
    Text,
    StyleSheet,
} from 'react-native';

export  function useFormInput(initialValue) {
    const styles = StyleSheet.create({
        abc:{
            paddingTop:3,
            width:300,
            paddingLeft:80,
            height:43,
            borderRadius:32,
            backgroundColor:'black',

            fontSize:25,
            color:'white',
        }
    });
    const [value,setValue] = useState(initialValue)
    function handleChange(e){
        console.info('change');
    }
    return {
        value,
        onChangeText:handleChange,
        style:styles.abc
    }
}