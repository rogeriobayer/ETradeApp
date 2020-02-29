import React from 'react';
import { View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import AppButton from '../../Components/AppButton/AppButton';
import AppInput from '../../Components/AppInput/AppInput';

import appStyles from '../../Themes/appStyles';
import styles from './LoginScreenStyles';

export interface Props {
    navigation: NavigationProp<any>;
}

export interface State {
    email: string;
    password: string;
}

class LoginScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    onChangeEmail = (text: string) => {
        this.setState({
            email: text,
        });
    };

    onChangePassword = (text: string) => {
        this.setState({
            password: text,
        });
    };

    onLoginPress = () => {
        const { navigation } = this.props;
        navigation.replace("ProfileScreen");
    };

    render() {
        const { email, password } = this.state;
        return (
            <View style={[appStyles.centerView]}>
                <View style={[styles.optionContainer]}>
                    <AppInput
                        placeholder={'Email'}
                        autoCapitalize={'none'}
                        value={email}
                        onChangeText={text => this.onChangeEmail(text)}
                    />
                </View>

                <View style={[styles.optionContainer]}>
                    <AppInput
                        placeholder={'Password'}
                        isPassword={true}
                        autoCapitalize={'none'}
                        value={password}
                        onChangeText={text => this.onChangePassword(text)}
                    />
                </View>

                <View style={[styles.optionContainer]}>
                    <AppButton
                        text={'LogIn'}
                        onPress={() => this.onLoginPress()}
                    />
                </View>
            </View>
        );
    }
}

export default LoginScreen;
