import type {StoryObj} from '@storybook/react';
import {getMeta} from '../../utils/getMeta';
import {Checkbox as CheckboxComponent} from '../../../atoms/Checkbox';
import {getCenterDecorator} from '../../decorators/CenterDecorator';

const Meta = getMeta(CheckboxComponent, {
  args: {text: 'Get Started'},
  decorators: [getCenterDecorator()],
});

export default Meta;
export const Checkbox: StoryObj<typeof CheckboxComponent> = {};
