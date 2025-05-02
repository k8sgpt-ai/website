import React from 'react';
import DocPage from '../../../components/DocPage';

const CustomRestBackend: React.FC = () => {
  return (
    <DocPage
      title="Custom Rest Backend"
      description="Learn how to integrate a custom backend with K8sGPT using RESTful API"
      prev={{ title: "Slack Integration", href: "/docs/tutorials/slack-integration" }}
      next={{ title: "Observability", href: "/docs/tutorials/observability" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            K8sGPT allows you to integrate custom backends using RESTful API, enabling you to use your own AI models or services. This tutorial will guide you through the process of creating and integrating a custom REST backend with K8sGPT.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>K8sGPT CLI installed</li>
            <li>Basic understanding of RESTful APIs</li>
            <li>Access to your custom AI model or service</li>
            <li>Development environment with your preferred programming language</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">API Specification</h2>
          <p className="text-gray-600 mb-4">
            Your custom backend must implement the following REST endpoints:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm">
              <code>
{`POST /v1/analyze
Content-Type: application/json

{
  "cluster": {
    "resources": [...],
    "state": "..."
  },
  "config": {
    "filters": [...],
    "options": {...}
  }
}`}
              </code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Implementation Steps</h2>
          <ol className="list-decimal pl-6 space-y-4 text-gray-600">
            <li>
              <strong>Set up your REST server:</strong> Create a new server that implements the required endpoints.
            </li>
            <li>
              <strong>Implement the analysis logic:</strong> Process the incoming cluster data and return appropriate analysis results.
            </li>
            <li>
              <strong>Configure K8sGPT:</strong> Update your K8sGPT configuration to use your custom backend.
            </li>
            <li>
              <strong>Test the integration:</strong> Run K8sGPT with your custom backend to ensure everything works as expected.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Example Configuration</h2>
          <p className="text-gray-600 mb-4">
            Add the following to your K8sGPT configuration file:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm">
              <code>
{`backend: custom
custom:
  url: "http://your-backend-url/v1/analyze"
  headers:
    Authorization: "Bearer your-api-key"`}
              </code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Implement error handling and retry logic</li>
            <li>Add authentication and security measures</li>
            <li>Optimize performance and response times</li>
            <li>Consider implementing caching for frequently accessed data</li>
          </ul>
        </section>
      </div>
    </DocPage>
  );
};

export default CustomRestBackend; 