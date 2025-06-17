import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AutoRemediation from './pages/AutoRemediation';
import Documentation from './pages/Documentation';
import ErrorBoundary from './components/ErrorBoundary';

// Getting Started Pages
import Installation from './pages/docs/getting-started/Installation';
import Overview from './pages/docs/getting-started/Overview';
import InClusterOperator from './pages/docs/getting-started/InClusterOperator';
import OperatorConfiguration from './pages/docs/getting-started/OperatorConfiguration';
import CLIConfiguration from './pages/docs/getting-started/CLIConfiguration';

// Tutorial Pages
import Playground from './pages/docs/tutorials/Playground';
import CustomAnalyzers from './pages/docs/tutorials/CustomAnalyzers';
import SlackIntegration from './pages/docs/tutorials/SlackIntegration';
import Observability from './pages/docs/tutorials/Observability';
import CustomRestBackend from './pages/docs/tutorials/CustomRestBackend';

// Reference Pages
import CLIReference from './pages/docs/reference/CLIReference';
import OperatorReference from './pages/docs/reference/OperatorReference';
import Providers from './pages/docs/reference/Providers';
import MCPServer from './pages/docs/reference/MCPServer';

// Explanation Pages
import Integration from './pages/docs/explanation/Integration';
import Caching from './pages/docs/explanation/Caching';

// Other Pages
import Roadmap from './pages/Roadmap';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary><div>An error occurred</div></ErrorBoundary>,
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
        path: 'roadmap',
        element: <Roadmap />,
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
      {
        path: 'docs/getting-started/operator-configuration',
        element: <OperatorConfiguration />,
      },
      {
        path: 'docs/getting-started/cli-configuration',
        element: <CLIConfiguration />,
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
      {
        path: 'docs/tutorials/custom-rest-backend',
        element: <CustomRestBackend />,
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
      {
        path: 'docs/reference/mcp',
        element: <MCPServer />,
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