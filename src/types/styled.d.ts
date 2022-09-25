import 'styled-components';

declare module 'styled-components' {
  export type DefaultTheme = {
    name?: string;
    backgroundColor: string;
    textColor: string;
  };
}
