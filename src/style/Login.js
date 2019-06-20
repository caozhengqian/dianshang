
import React from 'react';
import {  Button,View, Text } from "react-native";


export default class Login extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle:<Text style={{color:'#fff3eb',fontSize:20}}>登陆</Text>,
            headerRight: (
                <Button
                    onPress={navigation.getParam('increaseCount')}
                    title={''+ navigation.getParam('title')}
                    color="#fff"
                />
            ),
        };
    };

    componentDidMount() {
        //  初始化导航交互数据
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
        this.props.navigation.setParams({ title: 0 });
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        console.info('执行了increaseCount')
        this.setState({ count: this.state.count + 1 },function () {

            this.props.navigation.setParams({ title: this.state.count });
        });
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
            </View>
        );
    }
}