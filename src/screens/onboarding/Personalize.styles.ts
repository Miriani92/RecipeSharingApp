import {StyleSheet} from 'react-native';
import {colors} from '../../constants/styles/colors';
import {sizes} from '../../constants/styles/sizes';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    width: '100%',
    backgroundColor: colors.background_onboarding,
    gap: sizes.lg,
    paddingVertical: sizes.lg,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: colors.background_onboarding,
    paddingVertical: sizes.md,
    alignItems: 'center',
  },
  headerWrapper: {
    width: '90%',
    alignSelf: 'center',
    gap: sizes.md,
  },
  header: {
    width: '100%',
    color: 'white',
    fontSize: sizes.lg,
    fontWeight: '700',
  },
  subHeader: {
    width: '100%',
    color: 'white',
    fontSize: sizes.bs,
    fontWeight: '300',
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    transform: [{translateY: -50}],
    width: 300,
    height: 300,
  },
});
