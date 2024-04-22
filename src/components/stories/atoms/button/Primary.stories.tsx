import type {StoryObj} from '@storybook/react';
import {getMeta} from '../../utils/getMeta';
import {PrimaryButton} from '../../../atoms/PrimaryButton';
import {getCenterDecorator} from '../../decorators/CenterDecorator';

const PrimaryButtonMeta = getMeta(PrimaryButton, {
  args: {text: 'Get Started'},
  decorators: [getCenterDecorator()],
});

export default PrimaryButtonMeta;
export const Primary: StoryObj<typeof PrimaryButton> = {};
