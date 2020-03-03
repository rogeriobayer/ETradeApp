import { TextStyle, ViewStyle, ImageStyle } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    textStyle: {
        color: appColors.darkgrey,
        fontWeight: 'bold',
        fontSize: hp('5%'),
    } as TextStyle,

    textView: {
        margin: hp('1%'),
    } as ViewStyle,

    image: {
        width: wp('16%'),
        height: hp('10%'),
    } as ImageStyle,

    topContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    } as ViewStyle,

    bottomConatiner: {
        flex: 1,
        justifyContent: 'flex-end',
    } as ViewStyle,

    scrollContent: {
        flexGrow: 1,
        justifyContent: 'space-between',
        flexDirection: 'column'
    } as ViewStyle
};
