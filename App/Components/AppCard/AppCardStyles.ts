import { TextStyle } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    cardContainer: {
        borderColor: appColors.black,
        borderWidth: hp('0.3%'),
        borderRadius: wp('10%'),
        padding: wp('4%'),
        margin: wp('2%')
    } as TextStyle,

    textButton: {
        fontWeight: 'bold',
        fontSize: hp('3%'),
    } as TextStyle,
};
