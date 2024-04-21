import {fontFamilies} from '../constants/styles/fonts';

// add only one font-family for now

export const getFontFamily = (weight: 'normal' | 'bold') => {
  const selectedFontFamily = fontFamilies.DancingScript;
  console.log(selectedFontFamily);
  return selectedFontFamily[weight];
};
