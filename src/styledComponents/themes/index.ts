import { DefaultTheme } from 'styled-components';

import { lightTheme } from './light';
import { darkTheme } from './dark';

export type Theme = 'light' | 'dark';

export function getTheme(theme?: Theme): DefaultTheme {
  switch (theme) {
    case 'dark':
      return darkTheme;
    case 'light':
    default:
      return lightTheme;
  }
}

export const theme = {
  getAllThemes(): DefaultTheme[] {
    return [darkTheme, lightTheme];
  },
};
