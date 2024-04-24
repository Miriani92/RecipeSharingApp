import {StyleSheet} from 'react-native';
import {sizes} from '../../constants/styles/sizes';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    gap: sizes.sm,
  },
  progressWrapper: {
    position: 'relative',
    flex: 1,
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
});
