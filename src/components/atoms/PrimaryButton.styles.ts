import {StyleSheet} from 'react-native';
import {sizes} from '../../constants/styles/sizes';

export const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    height: 50,
    backgroundColor: 'red',
    borderRadius: sizes.xsm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: sizes.lg - 2,
    fontWeight: '700',
  },
});
