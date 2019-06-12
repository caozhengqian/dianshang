
import React from 'react';
import Greeting from './Greeting'
import { View, Text } from "react-native";
export default class Detail extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Greeting/>
            </View>
        );
    }
}





