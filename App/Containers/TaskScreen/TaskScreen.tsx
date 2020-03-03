import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import AppCard from '../../Components/AppCard/AppCard';

import appStyles from '../../Themes/appStyles';
import appImages from '../../Themes/appImages';
import styles from './TaskScreenStyles';

export interface Props {}

export interface State {
    createTask: boolean;
}

class TaskScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { createTask: false }
    }

    newTask = () => {
        this.setState({
            createTask: true
        })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={[styles.scrollContent]}>
                <View style={[appStyles.centerView, styles.topContainer]}>
                    <View style={[styles.textView]}>
                        <Text style={[appStyles.centerText, styles.textStyle]}>
                            Undone tasks
                        </Text>
                    </View>

                    <View style={[styles.textView]}>
                        <Text style={[appStyles.centerText, styles.textStyle]}>
                            Done tasks
                        </Text>
                    </View>
                </View>

                <View style={[appStyles.centerImage, styles.bottomConatiner]}>
                    <TouchableOpacity
                        onPress={() => this.newTask()}
                    >
                        <Image
                            style={[styles.image]}
                            source={appImages.plusButton}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

export default TaskScreen;
