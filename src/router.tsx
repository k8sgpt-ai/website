import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AutoRemediation from './pages/AutoRemediation';
import Documentation from './pages/Documentation';

// Getting Started Pages
import Installation from './pages/docs/getting-started/Installation';
import Overview from './pages/docs/getting-started/Overview';
import InClusterOperator from './pages/docs/getting-started/InClusterOperator';

// Tutorial Pages
import Playground from './pages/docs/tutorials/Playground';
import CustomAnalyzers from './pages/docs/tutorials/CustomAnalyzers';
import SlackIntegration from './pages/docs/tutorials/SlackIntegration';
import Observability from './pages/docs/tutorials/Observability';

// Reference Pages
import CLIReference from './pages/docs/reference/CLIReference';
import OperatorReference from './pages/docs/reference/OperatorReference';
import Providers from './pages/docs/reference/Providers';

// Explanation Pages
import Integration from './pages/docs/explanation/Integration';
import Caching from './pages/docs/explanation/Caching';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: null, // This will render the home page content from App
      },
      {
        path: 'auto-remediation',
        element: <AutoRemediation />,
      },
      {
        path: 'docs',
        element: <Documentation />,
      },
      // Getting Started Routes
      {
        path: 'docs/getting-started/overview',
        element: <Overview />,
      },
      {
        path: 'docs/getting-started/installation',
        element: <Installation />,
      },
      {
        path: 'docs/getting-started/in-cluster-operator',
        element: <InClusterOperator />,
      },
      // Tutorial Routes
      {
        path: 'docs/tutorials/playground',
        element: <Playground />,
      },
      {
        path: 'docs/tutorials/custom-analyzers',
        element: <CustomAnalyzers />,
      },
      {
        path: 'docs/tutorials/slack-integration',
        element: <SlackIntegration />,
      },
      {
        path: 'docs/tutorials/observability',
        element: <Observability />,
      },
      // Reference Routes
      {
        path: 'docs/reference/cli',
        element: <CLIReference />,
      },
      {
        path: 'docs/reference/operator',
        element: <OperatorReference />,
      },
      {
        path: 'docs/reference/providers',
        element: <Providers />,
      },
      // Explanation Routes
      {
        path: 'docs/explanation/integration',
        element: <Integration />,
      },
      {
        path: 'docs/explanation/caching',
        element: <Caching />,
      },
    ],
  },
]); 