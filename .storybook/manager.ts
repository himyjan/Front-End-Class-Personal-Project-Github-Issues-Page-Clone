import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
// import { create } from '@storybook/theming/create';

// const theme = create({
//   base: 'light',
//   brandTitle: 'My custom title',
// });

addons.setConfig({
  theme: themes.dark,
});
