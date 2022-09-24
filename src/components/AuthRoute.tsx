/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

export interface IAuthRouteProps {}

const AuthRoute: FunctionComponent<IAuthRouteProps> = (props: any) => {
  const { children } = props;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cookies = parseCookies();
    if (cookies?.logged_in === 'yes') {
      // console.log(cookies?.logged_in);
    } else {
      const auth = getAuth();
      const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoading(false);
        } else {
          setCookie(null, 'logged_in', 'no', {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          });
          console.log('unauthorized');
          navigate('/login');
        }
      });

      return () => AuthCheck();
    }
  }, []);

  if (loading) return <p>loading ...</p>;

  return <>{children}</>;
};

export default AuthRoute;
