import React, {useState,useEffect,useReducer } from 'react';



export default function useItem(initData) {

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
        ()=>{
            console.info('执行了useItem');
        }
    )



    //二、点击列表事件
   function onPress(e){
        console.log(" item onpress")
        console.log(e.key)
    }

    return {
        onPress:onPress,
    }
}