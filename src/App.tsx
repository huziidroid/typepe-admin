import React from 'react';
import {RouterProvider} from 'react-router-dom';

import './App.css';
import {AUTHENTICATED_ROUTER, UNAUTHENTICATED_ROUTER} from './routes';

function App() {
  const isLoggedIn = false;
  const router = isLoggedIn ? AUTHENTICATED_ROUTER : UNAUTHENTICATED_ROUTER;

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
