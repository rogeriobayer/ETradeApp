import React from 'react';
import { View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppButton from '../../Components/AppButton/AppButton';
import AppInput from '../../Components/AppInput/AppInput';

import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { RequestStatus } from '../../Models/RequestStatus';
import { Login } from '../../Models/Login';
import { RootState } from '../../Redux';
import appStyles from '../../Themes/appStyles';
import styles from './LoginScreenStyles';

export interface Props {
    navigation: NavigationProp<any>;
    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;
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

    componentDidUpdate() {
        const { navigation, authenticationState } = this.props;
        if (authenticationState.status == RequestStatus.SUCCESS) {
            navigation.replace('ProfileScreen');
        }
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
        const { email, password } = this.state;
        const auth: Login = {
            email,
            password,
        };
        authenticationActions.loginRequest(auth);
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
