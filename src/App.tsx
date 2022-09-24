/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import Header from 'pages/Header';
import Repo from 'pages/Repo';
import Option from 'pages/Option';
import LabelButtons from 'pages/LabelButtons';
import BoxHeader from 'pages/BoxHeader';
import Footer from 'pages/Footer';
import firebaseConfig from './config/firebase-config';
// import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import AuthRoute from './components/AuthRoute';

initializeApp(firebaseConfig);

export interface IApplicationProps {}

const App: FunctionComponent<IApplicationProps> = (props: any) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoute>
            <Header />
            <Repo />
            <Option />
            <LabelButtons />
            <BoxHeader />
            <Footer />
          </AuthRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
