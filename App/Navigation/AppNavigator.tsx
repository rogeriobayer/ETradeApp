import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '../Containers/LoginScreen/LoginScreen';
import ProfileScreen from '../Containers/ProfileScreen/ProfileScreen';
import SignUpScreen from '../Containers/SignUpScreen/SignUpScreen';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator initialRouteName="LoginScreen">
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
        <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </AuthStack.Navigator>
);

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
    <AppDrawer.Navigator>
        <AppDrawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </AppDrawer.Navigator>
);

const RootStack = createStackNavigator();
export default function AppNavigator(loggedIn: boolean) {
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode={'none'}>
                {loggedIn ? (
                    <RootStack.Screen
                        name={'App'}
                        component={AppDrawerScreen}
                    />
                ) : (
                    <RootStack.Screen
                        name={'Auth'}
                        component={AuthStackScreen}
                    />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
