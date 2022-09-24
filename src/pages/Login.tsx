/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent, useEffect } from 'react';
import {
  getAuth,
  getRedirectResult,
  GithubAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import store from '../store/store';
import { LoginUser } from '../types/loginUserType';

export interface ILoginPageProps {}

const LoginPage: FunctionComponent<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result!);
        if (credential) {
          // // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const token = credential.accessToken;
          // console.log(result);
          // console.log(`Access token: ${token}`);
          // ...
          const state = store.getState();
          store.setState({
            ...state,
            loginUser: result! as unknown as LoginUser,
          });
          setCookie(null, 'logged_in', 'yes', {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          });
          setCookie(null, 'user_oauth_token', token!, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          });
          setCookie(null, 'preferred_color_mode', 'light', {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          });
          navigate('/');
        }

        // The signed-in user info.
        // const user = result!.user;
      })
      .catch((error) => {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  }, []);

  const signInWithGithub = () => {
    // Sign in using a redirect.
    const provider = new GithubAuthProvider();

    // Start a sign in process for an unauthenticated user.
    // provider.addScope('repo');
    signInWithRedirect(auth, provider);
    // This will trigger a full page redirect away from your app
  };

  return (
    <div>
      <p>Login Page</p>
      <button type="button" onClick={() => signInWithGithub()}>
        Sign in with Github
      </button>
    </div>
  );
};

export default LoginPage;
