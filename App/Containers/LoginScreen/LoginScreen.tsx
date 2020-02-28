import React from 'react';
import {View} from 'react-native';

import AppButton from '../../Components/AppButton/AppButton';
import AppInput from '../../Components/AppInput/AppInput';

import appStyles from '../../Themes/appStyles';
import styles from './LoginScreenStyles';

export interface Props {}

export interface State {
    email: string;
    password: string;
}

class LoginScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    }
  }

  onChangeEmail = (text: string) => {
    this.setState({
        email: text
    })
  }

  onChangePassword = (text: string) => {
    this.setState({
        password: text
    })
  }

  onLoginPress = () => {
    console.log("Pressed LogIn Button")
  }

  render() {
    const { email, password } = this.state;
    return (
      <View style={[appStyles.centerView]}>
            <View style={[styles.optionContainer]}>
                <AppInput
                    placeholder={'Email'}
                    autoCapitalize={'none'}
                    value={email}
                    onChangeText={(text) => this.onChangeEmail(text)}
                />
            </View>

            <View style={[styles.optionContainer]}>
                <AppInput
                    placeholder={'Password'}
                    isPassword={true}
                    autoCapitalize={'none'}
                    value={password}
                    onChangeText={(text) => this.onChangePassword(text)}
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