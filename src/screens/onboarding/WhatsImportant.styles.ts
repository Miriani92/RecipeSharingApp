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
  header: {
    alignSelf: 'center',
    width: '90%',
    color: 'white',
    fontSize: sizes.lg,
    fontWeight: '700',
  },
  subHeader: {
    alignSelf: 'center',
    width: '90%',
    color: 'white',
    fontSize: sizes.bs,
    fontWeight: '300',
  },
  headerWrapper: {
    gap: sizes.sm,
  },
  optionsWrapper: {
    position: 'relative',
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    gap: sizes.bs,
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
});
