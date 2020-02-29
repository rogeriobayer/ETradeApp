import React from 'react';
import { View, Text } from 'react-native';

import appStyles from '../../Themes/appStyles';
import styles from './ProfileScreenStyles';

export interface Props {}

export interface State {}

class ProfileScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={[appStyles.centerView]}>
                <Text style={[appStyles.centerText, styles.greetingText]}>
                    Hello User!
                </Text>
            </View>
        );
    }
}

export default ProfileScreen;
