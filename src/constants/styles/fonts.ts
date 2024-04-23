import {isIOS} from '../../utils/getPlatform';
export const fontFamilies = {
  DancingScript: {
    normal: isIOS() ? 'DancingScript-Regular' : 'DancingScriptRegular',
    bold: isIOS() ? 'DancingScript-Bold' : 'DancingScriptBold',
  },
  //   RUBIK: {
  //     normal: isIOS() ? 'Rubik-Regular' : 'RubikRegular',
  //     medium: isIOS() ? 'Rubik-Medium' : 'RubikMedium',
  //     bold: isIOS() ? 'Rubik-Bold' : 'RubikBold',
  //   },
  // Adjust the above code to fit your chosen fonts' names
};
