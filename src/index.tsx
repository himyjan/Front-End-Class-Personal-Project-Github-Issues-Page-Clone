import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import GlobalStyle from './styledComponents/GlobalStyle.style';
import './styles/globals.css';

import { getTheme } from './styledComponents/themes/index';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={getTheme('light')}>
      <>
        <RouterProvider router={router} />
        <GlobalStyle />
      </>
    </ThemeProvider>
  </React.StrictMode>
);
