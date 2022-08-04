import {StyleSheet} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {colors} from '../../../assets/colors';
import {fontSizes} from '../../../assets/fontSize';
import {fonts} from '../../../assets/fontss';
import {hp, wp} from '../../../services/dimensions';
export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.colorwhite,
  },
  icon: {
    width: wp(78.8),
    height: hp(45),
  },
  header: {
    width: wp(375),
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: wp(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sliderimage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: wp(335),
    height: hp(619),
    marginLeft: 20,
  },
  swiperview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalmainView: {
    backgroundColor: 'black',
    width: 370,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 80,
    position: 'absolute',
    bottom: 0,
    marginLeft: 20,
  },
  innerModalView: {
    alignSelf: 'center',
    // flex: 1,
    position: 'absolute',
    bottom: 0,
    minHeight: hp(719),
    width: 370,
    backgroundColor: 'black',
    marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  titleAnnette: {
    color: colors.colorwhite,
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font6),
    marginLeft: wp(26),
    marginTop: hp(23),
  },
});
