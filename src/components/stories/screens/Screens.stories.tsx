import React from 'react';
import type {StoryObj} from '@storybook/react';
import {getMeta} from '../utils/getMeta';
import {Home as HomeScreen} from '../../../containers/guest/Home';

const PrimaryButtonMeta = getMeta(HomeScreen, {
  title: 'Screens',
  decorator: [(Story: any) => <Story />],
});

export default PrimaryButtonMeta;

export const Home: StoryObj<typeof HomeScreen> = {};
