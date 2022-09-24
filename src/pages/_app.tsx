import type { AppType } from 'next/dist/shared/lib/utils';
import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/globalstyles';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { useState } from 'react';

const lightTheme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [theme, setTheme] = useState('lightTheme');
  const isDarkTheme = theme === 'dark';

  const changeTheme = () => {
    setTheme(isDarkTheme ? 'lightTheme' : 'darkTheme');
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
          <GlobalStyle />
        </SessionProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
