import {StyleSheet} from 'react-native';
import {colors} from '../../constants/styles/colors';
import {sizes} from '../../constants/styles/sizes';

export const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    backgroundColor: colors.background_onboarding,
    flex: 1,
    borderBottomEndRadius: sizes.xsm,
  },
  image: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    borderTopRightRadius: sizes.xsm,
    borderTopLeftRadius: sizes.xsm,
  },
  title: {
    padding: sizes.bs,
    fontSize: sizes.md + 2,
    backgroundColor: colors.background_recipedescription,
    fontWeight: '700',
    color: 'white',
  },
});
