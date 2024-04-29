import {StyleSheet} from 'react-native';
import {sizes} from '../../constants/styles/sizes';
import {colors} from '../../constants/styles/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    gap: sizes.sm,
    paddingHorizontal: '5%',
    paddingTop: '2.5%',
    backgroundColor: colors.background_onboarding,
  },
  progressWrapper: {
    flex: 1,
    position: 'relative',
    alignSelf: 'center',
    height: sizes.sm,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: sizes.sm,
  },
  bar: {
    height: sizes.sm,
  },
  text: {color: 'white', width: 50},
});
