import { themes } from '@storybook/theming';

import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import 'tailwindcss/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  docs: {
    theme: themes.light,
  },
  backgrounds: {
    default: 'github-light',
    values: [
      {
        name: 'github-light',
        value: '#ffffff',
      },
      {
        name: 'github-dark',
        value: '#0f1217',
      },
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
  },
  themes: {
    default: 'twitter',
    list: [
      { name: 'twitter', class: 'theme-twt', color: '#00aced' },
      { name: 'facebook', class: 'theme-fb', color: '#3b5998' },
    ],
  },
};
