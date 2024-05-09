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
    paddingBottom: sizes.lg,
  },
  upper: {
    flex: 1.5,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  form: {
    width: '90%',
    alignSelf: 'center',
    flex: 2,
  },
  header: {
    color: 'white',
    fontWeight: '700',
    fontSize: sizes.lg,
    marginBottom: sizes.bs,
  },
  inputWrapper: {
    flex: 1,
    gap: sizes.bs,
  },
  text: {
    width: '100%',
    color: 'white',
    fontSize: sizes.bs,
  },
  textInputWrapper: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.while_level_1,
    alignSelf: 'center',
    height: sizes.xxxlg + 6,
    flexDirection: 'row',
    borderRadius: sizes.xsm,
    paddingHorizontal: sizes.md,
    alignItems: 'center',
  },
  textInput: {
    color: 'white',

    flex: 1,
  },
  input: {
    gap: sizes.sm,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  closeIcon: {
    width: 18,
    height: 18,
    resizeMode: 'cover',
  },
});
