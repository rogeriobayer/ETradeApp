import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    loadingText: {
        color: appColors.lime,
        fontSize: 20,
    } as TextStyle,

    textView: {
        margin: hp('15%'),
    } as ViewStyle,

    image: {
        width: wp('25%'),
        height: hp('25%'),
        marginLeft: wp('2.5%'),
        marginTop: hp('-0.8%'),
        resizeMode: 'contain',
    } as ImageStyle,
};
