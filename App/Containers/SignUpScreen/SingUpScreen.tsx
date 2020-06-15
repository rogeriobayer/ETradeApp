import React from 'react';
import { View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import AppInput from '../../Components/AppInput/AppInput';
import AppButton from '../../Components/AppButton/AppButton';

import appStyles from '../../Themes/appStyles';
import styles from './SignUpScreenStyles';

export interface props {
    navigation: NavigationProp<any>;
}

export interface states {}

class SignUpScreen extends React.Component<props, states> {
    constructor(props: props) {
        super(props);
    }

    render() {
        return (
            <View style={appStyles.centerView}>
                <View style={styles.optionContainer}>
                    <AppInput placeholder={'Nome'} onChangeText={() => {}} />
                </View>

                <View style={styles.optionContainer}>
                    <AppInput placeholder={'Email'} onChangeText={() => {}} />
                </View>

                <View style={styles.optionContainer}>
                    <AppInput placeholder={'Senha'} onChangeText={() => {}} />
                </View>

                <View style={styles.optionContainer}>
                    <AppButton text={'Registrar'} onPress={() => {}} />
                </View>
            </View>
        );
    }
}

export default SignUpScreen;
