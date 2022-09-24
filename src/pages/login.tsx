import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/future/image';

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div>Welcome, {session.user?.name}</div>
        <Image
          src={session.user?.image as string}
          alt="github user image"
          width={100}
          height={100}
        />
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

export default Login;
