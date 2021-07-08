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

    stackOfPrice: {} as ViewStyle,

    headerContainer: {
        marginVertical: hp('1%'),
        flexDirection: 'row',
    } as ViewStyle,

    listContainer: {
        height: hp('86%'),
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
        marginLeft: wp('2.5%'),
        resizeMode: 'contain',
        tintColor: '#000000',
    } as ImageStyle,
};
