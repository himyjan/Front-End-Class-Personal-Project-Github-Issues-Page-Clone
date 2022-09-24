import Head from 'next/head';
import {} from '../components/sharedstyles';
import { AccessibilityInsetIcon } from '@primer/octicons-react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Issues · oven-sh/bun</title>
      </Head>
      <main>
        <div>
          <div className="position-relative js-header-wrapper">
            {process.env.NEXT_PUBLIC_NEXTAUTH_URL}
          </div>
        </div>
      </main>
    </div>
  );
}
