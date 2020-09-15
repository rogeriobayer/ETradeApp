import React from 'react';
import { View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppButton from '../../Components/AppButton/AppButton';
import AppInput from '../../Components/AppInput/AppInput';
import AppChecked from '../../Components/AppChecked/AppChecked';

import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { Login } from '../../Models/Login';
import { RootState } from '../../Redux';
import appStyles from '../../Themes/appStyles';
import styles from './LoginScreenStyles';
import { RequestStatus } from '../../Models/RequestStatus';

export interface Props {
    navigation: NavigationProp<any>;
    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;
}

export interface State {
    email: string;
    password: string;
    remember: boolean;
}

class LoginScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            remember: false,
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
        const { authenticationActions } = this.props;
        const { email, password, remember } = this.state;
        const auth: Login = {
            email,
            password,
            remember,
        };
        authenticationActions.loginRequest(auth);
    };

    onSignUpPress = () => {
        this.props.navigation.navigate('Auth', { screen: 'SignUpScreen' });
    };

    onCheckedPress = (checked: boolean) => {
        this.setState({
            remember: checked,
        });
    };

    render() {
        const { email, password, remember } = this.state;
        const { authenticationState } = this.props;
        const loading = authenticationState.status == RequestStatus.WIP;
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

                {loading ? (
                    <View style={[styles.optionContainer]}>
                        <AppButton text={'Loading...'} onPress={() => {}} />
                    </View>
                ) : (
                    [
                        <View key={'login'} style={[styles.optionContainer]}>
                            <AppButton
                                text={'LogIn'}
                                onPress={() => this.onLoginPress()}
                            />
                        </View>,
                        <View key={'signup'} style={[styles.optionContainer]}>
                            <AppButton
                                text={'SignUp'}
                                onPress={() => this.onSignUpPress()}
                            />
                        </View>,
                    ]
                )}

                <View style={[styles.optionContainer]}>
                    <AppChecked
                        label={'Remember me!'}
                        checked={remember}
                        onPress={checked => this.onCheckedPress(checked)}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    authenticationState: state.authentication,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        authenticationActions: bindActionCreators(
            AuthenticationActions,
            dispatch,
        ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginScreen);
