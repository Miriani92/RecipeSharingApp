import React, {useState} from 'react';
import {ChooseRecipe as ChooseRecipeScreen} from '../../screens/onboarding/ChooseRecipe';

export const ChooseRecipe = () => {
  const [recipes, setRecipes] = useState<any>([]);

  const handleCheckActiveRecipes = (currentTItle: string) => {
    let isRecipe = recipes.includes(currentTItle);
    return isRecipe;
  };
  const handleSetRecipes = (currentTitle: any) => {
    let checkedIdx = recipes.findIndex((title: any) => currentTitle === title);
    if (checkedIdx !== -1) {
      return setRecipes((r: any) => {
        let updatedRecipes = [...r];
        updatedRecipes.splice(checkedIdx, 1);
        return updatedRecipes;
      });
    }
    setRecipes((r: any) => [...r, currentTitle]);
  };

  return (
    <ChooseRecipeScreen
      setRecipes={handleSetRecipes}
      recipes={recipes}
      handleCheckActiveRecipes={handleCheckActiveRecipes}
      isGoNext={recipes.length > 1}
    />
  );
};
