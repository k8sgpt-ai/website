import React from 'react';
import { Link } from 'react-router-dom';
import DocPage from '../../../components/DocPage';

const Configuration: React.FC = () => {
  return (
    <DocPage
      title="K8sGPT Configuration"
      description="Learn how to configure K8sGPT for your specific needs"
      prev={{ title: "Installation", href: "/docs/getting-started/installation" }}
      next={{ title: "In-Cluster Operator", href: "/docs/getting-started/in-cluster-operator" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Configuration Overview</h2>
          <p className="text-gray-600 mb-4">
            K8sGPT can be configured in two main ways depending on how you're using it:
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Link 
            to="/docs/getting-started/cli-configuration"
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">CLI Configuration</h3>
                <p className="text-gray-600">
                  Configure K8sGPT when using it as a command-line tool. Set up AI backends, models, analysis intervals, and more.
                </p>
                <p className="text-purple-600 mt-4 font-medium">
                  Learn about CLI configuration →
                </p>
              </div>
            </div>
          </Link>

          <Link 
            to="/docs/getting-started/operator-configuration"
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Operator Configuration</h3>
                <p className="text-gray-600">
                  Configure the K8sGPT Operator for in-cluster continuous monitoring. Manage CRDs, analysis settings, and integrations.
                </p>
                <p className="text-purple-600 mt-4 font-medium">
                  Learn about Operator configuration →
                </p>
              </div>
            </div>
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Quick Configuration Tips</h2>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-purple-800">
                  <strong>CLI vs Operator:</strong> Use the CLI for ad-hoc analysis and debugging. Use the Operator for continuous monitoring and automated analysis in production.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Common Configuration Options</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>AI Backend:</strong> Choose from OpenAI, Azure OpenAI, LocalAI, Anthropic, Cohere, or Ollama</li>
                <li><strong>Model Selection:</strong> Pick the AI model that best fits your needs and budget</li>
                <li><strong>Analysis Filters:</strong> Control which Kubernetes resources to analyze</li>
                <li><strong>Secret Management:</strong> Securely store API keys using Kubernetes secrets</li>
                <li><strong>Cache Settings:</strong> Configure caching to optimize performance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
              <p className="text-gray-600 mb-4">
                Choose the configuration guide that matches your use case:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/docs/getting-started/cli-configuration"
                  className="inline-flex items-center px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Configure CLI
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  to="/docs/getting-started/operator-configuration"
                  className="inline-flex items-center px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Configure Operator
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default Configuration;
