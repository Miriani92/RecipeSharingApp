import type {Meta} from '@storybook/react';

export const getMeta = (Component: any, obj?: any) => {
  const metaObj: Meta<typeof Component> = {
    component: Component,
    ...obj,
  };
  return metaObj;
};
