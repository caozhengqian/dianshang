
import  {useState, useEffect,useReducer} from 'react';

export default function useItem(initdata) {
    // console.info('useItem的默认值');
    // console.info(initRequestData);
    const [requestData, setRequestData] = useState();
    console.info('requsedata')
    console.info(requestData)
    // let [state, dispatch] = useReducer(
    //     (state, action) => {
    //         switch (action.type) {
    //             case "ClickItem":
    //                 return {
    //                     ...state,
    //                     isClick:action.index,
    //                     clickValue:items[action.index],
    //                 };
    //             default:
    //                 return state;
    //         }
    //     },
    //     {
    //         isClick: 0,
    //         clickValue:'蔬菜',
    //         items:items
    //     }
    // );
    return {
         ItemLeftData:requestData,
         clickValue:setRequestData,
    };
}