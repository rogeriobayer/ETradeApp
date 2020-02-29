import { TextStyle } from 'react-native';
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
};
