import React from 'react';
import DocPage from '../../../components/DocPage';

const Overview: React.FC = () => {
  return (
    <DocPage
      title="Overview"
      description="K8sGPT gives Kubernetes SRE superpowers to everyone. Learn about its key features and capabilities."
    >
      <section>
        <h2>What is K8sGPT?</h2>
        <p>
          K8sGPT is an innovative tool that combines the power of artificial intelligence with
          Kubernetes expertise to help you manage and troubleshoot your clusters more effectively.
          It acts as your personal Kubernetes SRE, providing intelligent insights and automated
          remediation capabilities.
        </p>
      </section>

      <section className="mt-12">
        <h2>Key Features</h2>
        <ul className="mt-6 space-y-6">
          <li>
            <h3 className="font-semibold">AI-Powered Analysis</h3>
            <p>
              Leverage advanced AI models to analyze your cluster state and receive intelligent
              insights for troubleshooting issues.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Auto Remediation</h3>
            <p>
              Automatically fix common Kubernetes issues with AI-guided remediation actions,
              reducing manual intervention and downtime.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Multiple AI Providers</h3>
            <p>
              Choose from 15+ AI providers including OpenAI, Azure, Google (Vertex AI & GenAI),
              Amazon (Bedrock & SageMaker), Groq, Cohere, and more. Support for local models 
              (Ollama, LocalAI) ensures complete data privacy.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <a href="/docs/reference/providers" className="text-purple-600 hover:underline">
                See all supported providers →
              </a>
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Security First</h3>
            <p>
              Built with enterprise security in mind, featuring data anonymization and
              support for local AI models to keep sensitive information within your DMZ.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2>Getting Started</h2>
        <p>
          Ready to give your Kubernetes clusters AI superpowers? Follow our quick start guides:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            href="/docs/getting-started/installation"
            className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100"
          >
            <h3 className="font-semibold">Installation Guide</h3>
            <p className="mt-2 text-gray-600">
              Learn how to install K8sGPT on your system and connect it to your clusters.
            </p>
          </a>
          <a
            href="/docs/getting-started/in-cluster-operator"
            className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100"
          >
            <h3 className="font-semibold">In-Cluster Operator</h3>
            <p className="mt-2 text-gray-600">
              Deploy K8sGPT as an operator in your Kubernetes cluster for automated analysis.
            </p>
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2>Next Steps</h2>
        <p>
          After getting familiar with K8sGPT, explore our tutorials and guides to make the most
          of its features:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>
            <a href="/docs/tutorials/ollama" className="text-indigo-600 hover:text-indigo-500">
              Use Ollama for Local LLMs
            </a>
          </li>
          <li>
            <a href="/docs/tutorials/playground" className="text-indigo-600 hover:text-indigo-500">
              Try the K8sGPT Playground
            </a>
          </li>
          <li>
            <a href="/docs/tutorials/custom-analyzers" className="text-indigo-600 hover:text-indigo-500">
              Create Custom Analyzers
            </a>
          </li>
          <li>
            <a href="/docs/tutorials/slack-integration" className="text-indigo-600 hover:text-indigo-500">
              Set up Slack Integration
            </a>
          </li>
          <li>
            <a href="/docs/reference/cli" className="text-indigo-600 hover:text-indigo-500">
              Explore CLI Reference
            </a>
          </li>
        </ul>
      </section>
    </DocPage>
  );
};

export default Overview; 