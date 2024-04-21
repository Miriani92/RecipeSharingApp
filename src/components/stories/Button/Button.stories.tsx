import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {PrimaryButton} from '../../atoms/PrimaryButton';

const MyButtonMeta: Meta<typeof PrimaryButton> = {
  title: 'Button',
  component: PrimaryButton,
  args: {
    text: 'Get Started',
  },
  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;
export const Primary: StoryObj<typeof PrimaryButton> = {};
