import { ViewStyle, ImageStyle } from 'react-native';
import appColors from '../../Themes/appColors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    optionContainer: {
        marginBottom: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,

    entryButton: {
        // backgroundColor: appColors.buttonBlue,
        marginLeft: wp('20%'),
        marginRight: wp('20%'),
        borderRadius: wp('4%'),
    } as ViewStyle,
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },

    image: {
        width: wp('20%'),
        height: hp('20%'),
        marginLeft: wp('2.5%'),
        marginTop: hp('-0.8%'),
        resizeMode: 'contain',
    } as ImageStyle,
};
