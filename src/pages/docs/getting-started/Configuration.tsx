import React from 'react';
import { Link } from 'react-router-dom';
import DocPage from '../../../components/DocPage';

const Configuration: React.FC = () => {
  return (
    <DocPage
      title="Configuration"
      description="Learn how to configure K8sGPT for your specific needs"
      prev={{ title: "Installation", href: "/docs/getting-started/installation" }}
      next={{ title: "In-Cluster Operator", href: "/docs/getting-started/in-cluster-operator" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Configuration File</h2>
          <p className="text-gray-600 mb-4">
            K8sGPT uses a YAML configuration file to manage its settings. By default, it looks for a file named <code className="bg-gray-100 px-1 py-0.5 rounded">k8sgpt.yaml</code> in your home directory, but you can specify a different location using the <code className="bg-gray-100 px-1 py-0.5 rounded">--config</code> flag.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Configuration</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">Backend</h3>
              <p className="text-gray-600">Specify the AI backend to use (e.g., OpenAI, Anthropic, etc.)</p>
            </li>
            <li>
              <h3 className="font-semibold">Model</h3>
              <p className="text-gray-600">The specific model to use with the selected backend</p>
            </li>
            <li>
              <h3 className="font-semibold">API Key</h3>
              <p className="text-gray-600">Your API key for the selected backend</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Advanced Configuration</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">Filters</h3>
              <p className="text-gray-600">Configure which resources to analyze and which to ignore</p>
            </li>
            <li>
              <h3 className="font-semibold">Output Format</h3>
              <p className="text-gray-600">Customize the output format (JSON, YAML, etc.)</p>
            </li>
            <li>
              <h3 className="font-semibold">Cache Settings</h3>
              <p className="text-gray-600">Configure caching behavior for analysis results</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Example Configuration</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>
                {`backend: openai
model: gpt-4
apiKey: your-api-key-here
filters:
  - Pod
  - Deployment
  - Service
output:
  format: json
cache:
  enabled: true
  ttl: 3600`}
              </code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Environment Variables</h2>
          <p className="text-gray-600 mb-4">
            You can also configure K8sGPT using environment variables. These will override any settings in the configuration file.
          </p>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">K8SGPT_BACKEND</h3>
              <p className="text-gray-600">Specify the AI backend</p>
            </li>
            <li>
              <h3 className="font-semibold">K8SGPT_MODEL</h3>
              <p className="text-gray-600">Specify the model to use</p>
            </li>
            <li>
              <h3 className="font-semibold">K8SGPT_API_KEY</h3>
              <p className="text-gray-600">Your API key</p>
            </li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        <p className="text-gray-600">
          For more detailed information about configuration options, please refer to the{' '}
          <Link to="/docs/advanced/configuration" className="text-indigo-600 hover:text-indigo-500">
            Advanced Configuration
          </Link>{' '}
          guide.
        </p>
      </div>
    </DocPage>
  );
};

export default Configuration; 