import {StyleSheet} from 'react-native';
import {colors} from '../../constants/styles/colors';
import {sizes} from '../../constants/styles/sizes';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.background_onboarding,
    alignItems: 'center',
    gap: sizes.md,
    paddingVertical: sizes.lg,
  },
  recipeWrapper: {
    width: '90%',
    flex: 1,
    flexDirection: 'row',
    gap: sizes.md,
  },
  header: {
    fontSize: sizes.lg,
    color: 'white',
    fontWeight: '700',
  },
  subHeader: {
    color: 'white',
    marginTop: sizes.sm,
  },
});
