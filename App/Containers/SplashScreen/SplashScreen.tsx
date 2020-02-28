import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';

import appStyles from '../../Themes/appStyles';
import appColors from '../../Themes/appColors';
import styles from './SplashScreenStyles';

export interface Props {}

export interface State {}

class SplashScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }


  render() {
    return (
      <View style={[appStyles.centerView]}>
          <ActivityIndicator size={100} color={appColors.blue}/>
          <View style={[styles.textView]}>
            <Text style={[appStyles.centerText, styles.loadingText]}>Loading...</Text>
          </View>
      </View>
    );
  }
}

export default SplashScreen;