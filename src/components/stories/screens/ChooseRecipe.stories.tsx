import React from 'react';
import type {StoryObj} from '@storybook/react';
import {getMeta} from '../utils/getMeta';
import {ChooseRecipe as ChooseRecipeScreen} from '../../../screens/onboarding/ChooseRecipe';

const Meta = getMeta(ChooseRecipeScreen, {
  decorator: [(Story: any) => <Story />],
});

export default Meta;

export const ChooseRecipe: StoryObj<typeof ChooseRecipeScreen> = {};
