import {fontFamilies} from '../constants/styles/fonts';

// added  only one font-family for now
export const getFontFamily = (weight: 'normal' | 'bold') => {
  const selectedFontFamily = fontFamilies.DancingScript;
  return selectedFontFamily[weight];
};
