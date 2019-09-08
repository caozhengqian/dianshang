
import  {useState, useEffect,useReducer} from 'react';

import dataFetchReducer from '../reducer/dataFetchReducer'

export default function useDataApi(initRequestData, initResponseData) {
    const [requestData, setRequestData] = useState(initRequestData);
    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initResponseData,
    });
    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' });
            try {
                switch (requestData.method){
                    case 'POST':
                        await  fetch(requestData.url,{method: 'POST',headers: requestData.header,body:JSON.stringify(requestData.params),})
                        .then((response) => response.json()).then((responseJson) => {
                            if (!didCancel) {
                                dispatch({ type: 'FETCH_SUCCESS', payload: responseJson});
                            }
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                        return;
                    case 'GET':
                        await  fetch(requestData.url)
                            .then((response) => response.json()).then((responseJson) => {
                                if (!didCancel) {
                                    dispatch({ type: 'FETCH_SUCCESS', payload: responseJson});
                                }
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                        return;
                    default:return;
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: 'FETCH_FAILURE' });
                }
            }
        };

        fetchData().then();
        return () => {
            didCancel = true;
        };
    }, [requestData]);
    return [state, setRequestData];
}