import React from 'react';
import DocPage from '../../../components/DocPage';

const Playground = () => {
  return (
    <DocPage
      title="K8sGPT Playground"
      description="Interactive playground for testing and exploring K8sGPT capabilities"
      prev={{ title: 'In-Cluster Operator', href: '/docs/getting-started/in-cluster-operator' }}
      next={{ title: 'Custom Analyzers', href: '/docs/tutorials/custom-analyzers' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            The K8sGPT Playground provides an interactive environment for testing and exploring K8sGPT's capabilities
            without affecting your production cluster. It's a great way to learn about K8sGPT's features and test
            different configurations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Accessing the Playground</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              The playground is available at <code className="bg-gray-100 px-2 py-1 rounded">https://playground.k8sgpt.ai</code>.
              You can access it with any modern web browser.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Interactive analysis of sample Kubernetes resources</li>
            <li>Test different AI providers and models</li>
            <li>Experiment with custom analyzers</li>
            <li>Learn about K8sGPT's capabilities</li>
            <li>No setup or configuration required</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Using the Playground</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              The playground provides a simple interface to:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Select a sample Kubernetes resource to analyze</li>
              <li>Choose an AI provider and model</li>
              <li>Run the analysis and view results</li>
              <li>Experiment with different configurations</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Sample Resources</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              The playground includes various sample Kubernetes resources to test with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Deployments with common issues</li>
              <li>Services with misconfigurations</li>
              <li>Pods with resource constraints</li>
              <li>Ingress configurations</li>
              <li>Storage and volume issues</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Limitations</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Please note that the playground has some limitations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Uses pre-defined sample resources only</li>
              <li>Limited to basic analysis features</li>
              <li>No persistent storage or configuration</li>
              <li>Rate limits may apply</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              After exploring the playground, you can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Install K8sGPT in your cluster</li>
              <li>Configure custom analyzers</li>
              <li>Set up integrations with your tools</li>
              <li>Explore the CLI reference</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default Playground; 