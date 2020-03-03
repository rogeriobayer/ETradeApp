import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import appStyles from '../../Themes/appStyles';
import styles from './AppCardStyles';

export interface Props {
    text: string;
    onPress: () => void;
}

export interface State {}

export default class AppCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { text, onPress } = this.props;
        return (
            <TouchableOpacity onPress={() => onPress()}>
                <View
                    style={[
                        styles.cardContainer,
                    ]}>
                    <Text style={[appStyles.centerText, styles.textButton]}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
