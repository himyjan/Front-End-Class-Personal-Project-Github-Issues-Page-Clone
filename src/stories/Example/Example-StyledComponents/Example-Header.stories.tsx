/* eslint-disable @typescript-eslint/dot-notation */
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Example-Header';

export default {
  title: 'Example-StyledComponents/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn['args'] = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut['args'] = {};