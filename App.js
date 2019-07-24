
import { createStackNavigator, createAppContainer } from "react-navigation";

// import Login from './src/style/Login'
import Details from './src/style/Details'


const AppNavigator = createStackNavigator({
    // Home: {screen: Login},
    Details:{screen: Details}
},{
    initialRouteName: 'Details',
    //标题默认样式
    defaultNavigationOptions: {
        headerStyle: {
            // backgroundColor: '#fff3eb',
            // backgroundColor: '#ffd8c2',
            // backgroundColor: '#ffbb99',
            // backgroundColor: '#ff9b70',
            // backgroundColor: '#ff7847',
            // backgroundColor: '#f4511e',
            // backgroundColor: '#cf350e',
            // backgroundColor: '#a81f03',
            // backgroundColor: '#821100',
            // backgroundColor: '#5c0900',aaa

            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerBackTitle:`后退`
    },
});
// const Tabs = createBottomTabNavigator({ AppNavigator });
export default createAppContainer(AppNavigator);





