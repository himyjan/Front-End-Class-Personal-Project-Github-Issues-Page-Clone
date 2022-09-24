import {
  useSession,
  signIn,
  signOut,
  getSession,
  GetSessionParams,
} from 'next-auth/react';

const Account = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <>
        <div>Welcome, {session.user?.name}</div>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export const getServerSideProps = async (context: GetSessionParams) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }
  return {
    props: { session },
  };
};

export default Account;
