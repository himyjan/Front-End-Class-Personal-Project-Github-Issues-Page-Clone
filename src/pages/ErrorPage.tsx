import { useRouteError } from 'react-router-dom';
import React from 'react';

export default function ErrorPage() {
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error instanceof Error ? (
        <p>
          <i>{error.message}</i>
        </p>
      ) : null}
    </div>
  );
}
