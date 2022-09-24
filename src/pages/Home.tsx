/* eslint-disable @typescript-eslint/dot-notation */
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useSWR from 'swr';
import ky from 'ky';
import store from '../store/store';
import api from '../utils/api';

function Home() {
  const cookies = parseCookies();

  console.log(cookies.user_oauth_token);
  // console.log(store.useStore((state) => state.loginUser));
  // api.getUser();

  // const auth = getAuth();
  // setTimeout(() => console.log(auth['currentUser']), 1000);

  // console.log(api.getRepoAllIssueLabel('arackaf', 'customize-cra'));
  // api.getRepoAllIssueLabel('arackaf', 'customize-cra');

  const BASE_URL = 'https://api.github.com';

  const kyClient = ky.create({ prefixUrl: BASE_URL });

  const fetcher = (url) =>
    ky
      .get(url, {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `token ${cookies.user_oauth_token}`,
        },
      })
      .then((res) => res['data']);

  const { data, error } = useSWR([`https://api.github.com/user`], fetcher);
  if (error) console.log(error);
  if (data) console.log(data);

  return (
    <>
      <h1 className="text-[60px]">NextAuth.js Example</h1>
      <p>
        example site to demonstrate how to use&nbsp;
        <a href="https://next-auth.js.org">NextAuth.js</a>&nbsp;for
        authentication in Create React App.
      </p>
    </>
  );
}

export default Home;
