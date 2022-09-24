import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  name: 'default',
  gap: {
    default: '0mm',
    small: '1mm',
    medium: '2mm',
    large: '4mm',
  },
  padding: {
    default: '0mm',
    small: '1mm',
    medium: '2mm',
    large: '4mm',
  },
  bg: {
    default: 'unset',
    primary: 'hsl(0, 0%, 100%)',
    secondary: 'hsl(0, 0%, 90%)',
    tertiary: 'hsl(0, 0%, 80%)',
    accent: 'hsl(199, 55%, 45%)',
    complementary: 'hsl(0, 0%, 6%)',
    'accent-contrast': 'hsl(0, 0%, 100%)',
  },
  fg: {
    default: 'unset',
    primary: 'hsl(0, 0%, 6%)',
    secondary: 'hsl(0, 0%, 20%)',
    tertiary: 'hsl(0, 0%, 40%)',
    accent: 'hsl(199, 55%, 45%)',
    'accent-contrast': 'hsl(0, 0%, 100%)',
    complementary: 'hsl(0, 0%, 100%)',
  },
  fontSize: {
    default: 'inherit',
    small: '10pt',
    medium: '12pt',
    large: '16pt',
  },
  fontWeight: {
    default: 200,
    light: 100,
    regular: 200,
    bold: 700,
  },
  lineHeight: {
    normal: 1.5,
  },
  borderRadius: {
    default: '0mm',
    small: '1mm',
    medium: '2mm',
    large: '4mm',
  },
  colors: {
    black: {
      foreground: 'hsl(0, 0%, 0%)',
      background: 'hsl(0, 0%, 0%)',
      faded: 'hsl(0, 0%, 0%)',
      text: 'hsl(0, 0%, 100%)',
    },
    white: {
      foreground: 'hsl(0, 0%, 100%)',
      background: 'hsl(0, 0%, 100%)',
      faded: 'hsl(0, 0%, 100%)',
      text: 'hsl(0, 0%, 6%)',
    },
    gray: {
      foreground: 'hsl(0, 0%, 65%)',
      background: 'hsl(0, 0%, 80%)',
      faded: 'hsl(0, 0%, 80%)',
      text: 'hsl(0, 0%, 20%)',
    },
    'gray-light': {
      foreground: 'hsl(0, 0%, 80%)',
      background: 'hsl(0, 0%, 95%)',
      faded: 'hsl(0, 0%, 90%)',
      text: 'hsl(0, 0%, 20%)',
    },
    blue: {
      foreground: 'hsl(199, 55%, 45%)',
      background: 'hsl(199, 55%, 55%)',
      faded: 'hsl(199, 55%, 65%)',
      text: 'hsl(0, 0%, 100%)',
    },
    red: {
      foreground: 'hsl(0, 55%, 45%)',
      background: 'hsl(0, 55%, 55%)',
      faded: 'hsl(0, 55%, 65%)',
      text: 'hsl(0, 0%, 100%)',
    },
    green: {
      foreground: 'hsl(120, 55%, 45%)',
      background: 'hsl(120, 55%, 55%)',
      faded: 'hsl(120, 55%, 65%)',
      text: 'hsl(0, 0%, 100%)',
    },
    yellow: {
      foreground: 'hsl(60, 55%, 45%)',
      background: 'hsl(60, 55%, 55%)',
      faded: 'hsl(60, 55%, 65%)',
      text: 'hsl(0, 0%, 100%)',
    },
    orange: {
      foreground: 'hsl(30, 55%, 45%)',
      background: 'hsl(30, 55%, 55%)',
      faded: 'hsl(30, 55%, 65%)',
      text: 'hsl(0, 0%, 100%)',
    },
    purple: {
      foreground: 'hsl(240, 55%, 45%)',
      background: 'hsl(240, 55%, 55%)',
      faded: 'hsl(240, 55%, 65%)',
      text: 'hsl(0, 0%, 100%)',
    },
    pink: {
      foreground: 'hsl(299, 55%, 70%)',
      background: 'hsl(300, 55%, 90%)',
      faded: 'hsl(300, 55%, 65%)',
      text: 'hsl(0, 0%, 5%)',
    },
  },
};
