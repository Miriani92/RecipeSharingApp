import type {StoryObj} from '@storybook/react';
import {getMeta} from '../../utils/getMeta';
import {SignInButton} from '../../../atoms/SignInButton';
import {getCenterDecorator} from '../../decorators/CenterDecorator';
import {colors} from '../../../../constants/styles/colors';

const PrimaryButtonMeta = getMeta(SignInButton, {
  args: {text: 'Get Started'},
  decorators: [getCenterDecorator()],
});

export default PrimaryButtonMeta;

export const Secondary: StoryObj<typeof SignInButton> = {
  args: {
    text: 'Sign in',
    color: colors.pink,
  },
};
