import {StyleSheet} from 'react-native';
import {colors} from '../../constants/styles/colors';
import {sizes} from '../../constants/styles/sizes';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background_recipedescription,
    borderRadius: sizes.sm,
    flexDirection: 'row',
    gap: sizes.md,
    padding: sizes.md,
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: sizes.lg,
    fontWeight: '700',
  },
  chosen: {
    backgroundColor: colors.background_progress,
  },
});
