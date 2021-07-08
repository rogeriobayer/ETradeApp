import React from 'react';
import { View, ActivityIndicator, Text, Image } from 'react-native';

import appStyles from '../../Themes/appStyles';
import appColors from '../../Themes/appColors';
import styles from './SplashScreenStyles';
import { Center, NativeBaseProvider, Spinner } from 'native-base';
import appImages from '../../Themes/appImages';

export interface Props {}

export interface State {}

class SplashScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <NativeBaseProvider>
                <Center flex={1}>
                    <Image source={appImages.ecomp} style={[styles.image]} />
                    <Spinner accessibilityLabel="Loading" />
                </Center>
            </NativeBaseProvider>
        );
    }
}

export default SplashScreen;
