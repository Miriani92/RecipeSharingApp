import React from 'react';
import type {StoryObj} from '@storybook/react';
import {getMeta} from '../utils/getMeta';
import {Home as HomeScreen} from '../../../containers/onboarding/Home';

const Meta = getMeta(HomeScreen, {
  decorator: [(Story: any) => <Story />],
});

export default Meta;

export const Home: StoryObj<typeof HomeScreen> = {};
