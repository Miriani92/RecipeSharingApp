import {StyleSheet} from 'react-native';
import {colors} from '../../constants/styles/colors';
import {sizes} from '../../constants/styles/sizes';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: sizes.lg,
    left: '5%',
    width: 40,
    height: 40,
    padding: sizes.xsm,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background_onboarding,
    zIndex: 111,
  },
  image: {
    resizeMode: 'cover',
    width: 25,
    height: 25,
  },
});
