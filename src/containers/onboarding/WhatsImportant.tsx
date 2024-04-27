import React, {useState} from 'react';
import {WhatsImportant as WhatsImportantScreen} from '../../screens/onboarding/WhatsImportant';

export const WhatsImportant = () => {
  const [options, setOptions] = useState<any>([]);

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
  console.log(options);
  return (
    <WhatsImportantScreen
      setOptions={handleSetOptions}
      handleCheckActiveOptions={handleCheckActiveOptions}
      isOptionChosen={options.length === 2}
    />
  );
};
