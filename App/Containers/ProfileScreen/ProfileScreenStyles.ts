import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import appColors from '../../Themes/appColors';

export default {
    greetingText: {
        color: appColors.darkgrey,
        fontWeight: 'bold',
        fontSize: hp('5%'),
    } as TextStyle,

    optionContainer: {
        marginTop: hp('5%'),
    } as ViewStyle,

    headerOfCoins: {
        marginBottom: wp('3%'),
        marginHorizontal: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    } as ViewStyle,

    coinOfHeader: {
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,

    boxOfCoin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    } as ViewStyle,

    headerContainer: {
        marginVertical: hp('1%'),
        flexDirection: 'row',
    } as ViewStyle,

    listContainer: {
        height: hp('93%'),
        // marginVertical: hp('1%'),
    } as ViewStyle,

    tradeHeading: {
        marginLeft: hp('1%'),
        alignItems: 'center',
        flexDirection: 'row',
    } as ViewStyle,

    coinTitle: {
        flexDirection: 'row',
        maxWidth: wp('60%'),
        justifyContent: 'flex-start',
        alignItems: 'center',
    } as ViewStyle,

    coinRank: {
        justifyContent: 'center',
        marginLeft: 5,
        alignItems: 'center',
    } as ViewStyle,

    coinVariation: {
        marginRight: 5,

        alignSelf: 'flex-end',
    } as ViewStyle,

    image: {
        width: wp('8%'),
        height: hp('8%'),
        marginLeft: wp('3.5%'),
        resizeMode: 'contain',
        tintColor: '#000000',
    } as ImageStyle,

    imageBackground: {
        width: wp('100%'),
        height: hp('20%'),
        // padding: hp('5%'),
        // marginVertical: hp('8.5%'),
        transform: [{ rotate: '240deg' }],
        position: 'absolute',
    } as ImageStyle,

    viewBackground: {
        width: wp('100%'),
        height: hp('20%'),
        marginLeft: wp('52%'),
        position: 'absolute',
    } as ViewStyle,
};
