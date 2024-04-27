import {StyleSheet} from 'react-native';
import {colors} from '../../constants/styles/colors';
import {sizes} from '../../constants/styles/sizes';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.background_onboarding,
    gap: sizes.lg,
    paddingVertical: sizes.lg,
  },
  subHeader: {
    width: '90%',
    alignSelf: 'center',
    fontSize: sizes.bs,
    color: 'white',
    fontWeight: '600',
  },
  header: {
    width: '90%',
    alignSelf: 'center',
    fontSize: sizes.lg,
    color: 'white',
    fontWeight: '800',
  },
  option: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: '90%',
    padding: sizes.md,
    gap: sizes.bs,
    backgroundColor: colors.background_recipedescription,
    borderRadius: sizes.sm,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    flex: 2,
    color: 'white',
    fontSize: sizes.lg,
    fontWeight: '700',
  },
});
