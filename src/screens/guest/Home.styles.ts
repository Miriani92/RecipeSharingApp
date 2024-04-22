import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/getFontFamily';
import {sizes} from '../../constants/styles/sizes';

export const styles = StyleSheet.create({
  videWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {flex: 0.7, width: '100%'},
  text: {
    fontFamily: getFontFamily('bold'),
    fontSize: sizes.xlarger * 2,
    zIndex: 999,
  },
  textWrapper: {
    transform: [{translateY: -sizes.xlarger + -sizes.md}],
    letterSpacing: sizes.lg,
  },
  description: {
    marginTop: -sizes.xlarger,
    fontSize: sizes.lg,
  },
  buttonStyle: {
    marginTop: sizes.xxxlg,
  },
  singInWrapper: {
    marginTop: sizes.xxxlg,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
