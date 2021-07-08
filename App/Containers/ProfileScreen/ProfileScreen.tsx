import React from 'react';
import { View, Image, FlatList } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppButton from '../../Components/AppButton/AppButton';

import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { RootState } from '../../Redux';
import appStyles from '../../Themes/appStyles';
import styles from './ProfileScreenStyles';
import appImages from '../../Themes/appImages';
import { Box, Center, Heading, Spinner, Stack, Text } from 'native-base';

import { CriptosState } from '../../Redux/criptos/state';
import { CriptosActions } from '../../Redux/criptos/actionCreators';
import { Criptos } from '../../Models/Criptos';
import { Cripto } from '../..//Models/Cripto';
import { RequestStatus } from '../../Models/RequestStatus';

export interface Props {
    navigation: NavigationProp<any>;
    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;
    criptosState: CriptosState;
    criptosActions: CriptosActions;
}

export interface State {}

class ProfileScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        try {
            this.props.criptosActions.criptosRequest();
        } catch (error) {
            console.warn(error);
        }
        console.log('PROFILE SCREEN', this.props.criptosState);
    }

    colorOf(component: string, variation: number | any) {
        if (component == 'card') {
            if (variation >= 0) {
                return '#2bfeba';
            } else {
                return 'red.500';
            }
        } else {
            if (variation >= 0) {
                return 'black';
            } else {
                return 'white';
            }
        }
    }

    onLoginPress = () => {
        const { authenticationActions } = this.props;
        authenticationActions.logoutRequest();
    };

    render() {
        const { criptosState } = this.props;
        const loading = criptosState.status == RequestStatus.WIP;
        return (
            <View>
                <View style={[styles.headerContainer]}>
                    <Image source={appImages.ecomp} style={[styles.image]} />
                    <View style={[styles.tradeHeading]}>
                        <Heading size="lg">TRADE </Heading>
                        <Text>LITE</Text>
                    </View>
                </View>

                <View style={[styles.listContainer]}>
                    <View style={[styles.headerOfCoins]}>
                        <View style={[styles.coinOfHeader]}>
                            <Text fontSize="md">MOEDAS</Text>
                        </View>
                        <View>
                            <Text fontSize="md">{'PREÇO (USD)'}</Text>
                            <Text
                                fontSize="xs"
                                style={[
                                    {
                                        marginRight: 3,
                                        alignSelf: 'flex-end',
                                    },
                                ]}>
                                {'Variação 24h'}
                            </Text>
                        </View>
                    </View>
                    {loading ? (
                        <Center flex={1}>
                            <Spinner accessibilityLabel="Loading" />
                        </Center>
                    ) : (
                        <FlatList
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            data={criptosState.criptos}
                            keyExtractor={(cripto: Cripto, index: number) =>
                                String(index)
                            }
                            renderItem={({ item }) => (
                                <Box shadow={0} my={0} rounded="lg" w={'100%'}>
                                    <View style={[styles.boxOfCoin]}>
                                        <Stack space={0} p={[4, 4, 8]}>
                                            <View style={[styles.coinTitle]}>
                                                <Heading
                                                    size={'md'}
                                                    isTruncated>
                                                    {item.name}
                                                </Heading>
                                                <Text
                                                    fontSize="xs"
                                                    style={[styles.coinRank]}>
                                                    {item.rank + 'º'}
                                                </Text>
                                            </View>

                                            <Text fontSize="sm">
                                                {'(' + item.symbol + ')'}
                                            </Text>
                                        </Stack>
                                        <Stack
                                            style={[styles.stackOfPrice]}
                                            p={[4, 4, 8]}>
                                            <Box
                                                bg={this.colorOf(
                                                    'card',
                                                    item.percent_change_24h,
                                                )}
                                                p={1}
                                                shadow={0}
                                                rounded="20px"
                                                _text={{
                                                    fontSize: 'sm',
                                                    fontWeight: 'bold',
                                                    color: this.colorOf(
                                                        'text',
                                                        item.percent_change_24h,
                                                    ),
                                                }}>
                                                {item.price_usd}
                                            </Box>
                                            <Text
                                                fontSize="sm"
                                                style={[styles.coinVariation]}>
                                                {item.percent_change_24h}
                                            </Text>
                                        </Stack>
                                    </View>
                                </Box>
                            )}
                        />
                    )}
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    authenticationState: state.authentication,
    criptosState: state.criptos,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        authenticationActions: bindActionCreators(
            AuthenticationActions,
            dispatch,
        ),
        criptosActions: bindActionCreators(CriptosActions, dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileScreen);
