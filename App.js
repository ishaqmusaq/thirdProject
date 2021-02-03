import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import Feed from './sr/feed';
import Details from "./sr/screens/styles/Details";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Draawers screens
import CallScreen from './sr/screens/drawers/CallScreen';
import CameraScreen from './sr/screens/drawers/CameraScreen';
import ChartScreen from './sr/screens/drawers/ChartScreen';
import StatusScreen from './sr/screens/drawers/StatusScreen';
import HomeScreen from './sr/screens/drawers/HomeScreen';

//tabs screens
import CallsTabs from './sr/screens/tabs/CallsTab'
import cameraTabs from './sr/screens/tabs/cameraTab'
import ChartTabs from './sr/screens/tabs/ChartTab'
import StatusTabs from './sr/screens/tabs/StatusTab'


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

class App extends Component {

    Render() {
        
        CreateHomeStack = () =>
            <Stack.Navigator>
                <Stack.Screen name="feed" component={Feed} />
                <Stack.Screen name="details" component={Details} />
                <Stack.Screen name="Top tabs" component={createTopTabs} />
                <Stack.Screen name="Bottom tabs" component={createBottomTabs} />
            </Stack.Navigator>

        createTopTabs = () => {
            return <MaterialTopTabs.Navigator>
                <MaterialTopTabs.Screen name="CALL TAB" component={CallsTabs} options={{ title:"Calls" }} />
                <MaterialTopTabs.Screen name="CAMERA TAB" component={cameraTabs} options={{ title:"Camera" }} />
                <MaterialTopTabs.Screen name="CHART TAB" component={ChartTabs} options={{ title:"Chat" }} />
                <MaterialTopTabs.Screen name="STATUS TAB" component={StatusTabs} options={{ title:"Status" }} />
            </MaterialTopTabs.Navigator>

        }

        createBottomTabs = () => {
            return <MaterialBottomTabs.Navigator>
                <MaterialBottomTabs.Screen name="CALL TAB" component={CallTabs} options={{ title:"Calls" }} />
                <MaterialBottomTabs.Screen name="CAMERA TAB" component={cameraTabs} options={{ title:"Camera" }} />
                <MaterialBottomTabs.Screen name="CHART TAB" component={ChartTabs} options={{ title:"Chat" }} />
                <MaterialBottomTabs.Screen name="STATUS TAB" component={StatusTabs} options={{ title:"status" }} />
            </MaterialBottomTabs.Navigator>

        }


        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name='Home' children={CreateHomeStack} />
                    <Drawer.Screen name='ChAT' component={ChartScreen} />
                    <Drawer.Screen name='STATUS' component={StatusScreen} />
                    <Drawer.Screen name='CALLS' component={CallScreen} />
                    <Drawer.Screen name='Homepage' component={HomeScreen} />
                    <Drawer.Screen name='Camera' component={CameraScreen} />

                </Drawer.Navigator>
            </NavigationContainer>
        )
    }

}

//https://blog.logrocket.com/navigating-react-native-apps-using-react-navigation/

export default App;
