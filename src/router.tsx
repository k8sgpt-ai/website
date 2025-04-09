import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AutoRemediation from './pages/AutoRemediation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/auto-remediation',
    element: <AutoRemediation />,
  },
]); 