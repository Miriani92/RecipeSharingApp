import React, {useState} from 'react';
import {WhatsImportant as WhatsImportantScreen} from '../../screens/onboarding/WhatsImportant';
import {useNavigation} from '@react-navigation/native';

export const WhatsImportant = () => {
  const [options, setOptions] = useState<any>([]);
  const navigation = useNavigation<any>();

  const navigateNextScreen = () => {
    navigation.navigate('ChooseRecipe');
  };

  const handleCheckActiveOptions = (currentTItle: string) => {
    let isRecipe = options.includes(currentTItle);
    return isRecipe;
  };
  const handleSetOptions = (currentOption: any) => {
    let checkedIdx = options.findIndex(
      (option: any) => currentOption === option,
    );
    if (checkedIdx !== -1) {
      return setOptions((r: any) => {
        let updatedRecipes = [...r];
        updatedRecipes.splice(checkedIdx, 1);
        return updatedRecipes;
      });
    }
    setOptions((r: any) => [...r, currentOption]);
  };

  return (
    <WhatsImportantScreen
      setOptions={handleSetOptions}
      handleCheckActiveOptions={handleCheckActiveOptions}
      navigate={navigateNextScreen}
      isOptionChosen={options.length === 2}
    />
  );
};
