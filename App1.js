
import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {  Button,View, Text } from "react-native";


function LogoTitle(props){
        return (
            <Text>自定义组件标题</Text>
        );

}

function HomeScreen(props){

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        props.navigation.navigate('Details', {
                            itemId: 99,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
            </View>
        );

}
//界面顶部标题
HomeScreen.navigationOptions = {
    //自定义标题组件
    headerTitle: <LogoTitle />,
    /**放开是文字标题加样式
    // title: 'Home',
    // headerStyle: {
    //     backgroundColor: '#f4511e',
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //     fontWeight: 'bold',
    // },
     */
};
function DetailsScreen(props){
        const { navigation } = props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        props.navigation.push('Details', {
                            itemId: Math.floor(Math.random() * 100),
                        })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => props.navigation.goBack()}
                />
                <Button
                    title="Update the title"
                    //改变了传过来的值，界面和标题都被改了
                    onPress={() => props.navigation.setParams({otherParam: 'Updated!'})}
                />
            </View>
        );

}
//界面顶部标题
DetailsScreen.navigationOptions = ({ navigation }) => {
    return {
        //动态获取传过来的参数作为标题，第二个参数是默认值
        title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
};
const AppNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Details:{screen: DetailsScreen}
},{
    initialRouteName: 'Home',
    //标题默认样式
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});

export default createAppContainer(AppNavigator);





