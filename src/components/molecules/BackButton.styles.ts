import {StyleSheet} from 'react-native';
import {colors} from '../../constants/styles/colors';
import {sizes} from '../../constants/styles/sizes';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: sizes.lg,
    left: '5%',
    width: 32,
    height: 32,
    padding: sizes.xsm,
    borderRadius: 32 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background_onboarding,
    zIndex: 111,
  },
  image: {
    resizeMode: 'cover',
    width: 20,
    height: 20,
  },
});
