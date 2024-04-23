import {StyleSheet} from 'react-native';
import {sizes} from '../../constants/styles/sizes';
// import {colors} from '../../constants/styles/colors';
// import {sizes} from '../../constants/styles/sizes';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    gap: sizes.sm,
  },
  progressWrapper: {
    flex: 1,
    alignSelf: 'center',
    height: sizes.sm,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: sizes.sm,
  },
  bar: {
    height: sizes.sm,
    flex: 1,
    // alignSelf: 'flex-end',
  },
});
