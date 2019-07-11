import {useState,useEffect,useContext} from 'react';
import {
    StyleSheet,
} from 'react-native';
import {TodosDispatch} from './Item'

export default function useFormInput(initialValue) {
    const dispatchItem = useContext(TodosDispatch);
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
        console.info('input框change');
        setValue(e)
    }
    useEffect(()=>{

        console.info('input加载次数')
    })

    return {
        value,
        onChange:handleChange,
        style: styles.abc,
    }
}