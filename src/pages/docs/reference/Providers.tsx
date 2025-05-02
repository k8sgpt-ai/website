import DocPage from '../../../components/DocPage';

const Providers: React.FC = () => {
  return (
    <DocPage
      title="Providers"
      description="Learn about the different AI providers supported by K8sGPT"
      prev={{ title: "CLI Reference", href: "/docs/reference/cli" }}
      next={{ title: "Operator Guide", href: "/docs/reference/operator" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            K8sGPT supports multiple AI providers for analyzing your Kubernetes cluster. Each provider has its own strengths and requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Supported Providers</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-mono text-lg mb-2">OpenAI</h3>
              <p className="text-gray-600">Default provider using GPT models from OpenAI.</p>
              <pre className="mt-2 text-sm">
                <code>k8sgpt auth add --backend openai</code>
              </pre>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-mono text-lg mb-2">Amazon Bedrock</h3>
              <p className="text-gray-600">Use AWS Bedrock for AI analysis.</p>
              <pre className="mt-2 text-sm">
                <code>k8sgpt auth add --backend amazonbedrock</code>
              </pre>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-mono text-lg mb-2">Azure OpenAI</h3>
              <p className="text-gray-600">Use Azure's OpenAI service for analysis.</p>
              <pre className="mt-2 text-sm">
                <code>k8sgpt auth add --backend azureopenai</code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Configuration</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-mono text-lg mb-2">List Providers</h3>
              <p className="text-gray-600">View all configured providers.</p>
              <pre className="mt-2 text-sm">
                <code>k8sgpt auth list</code>
              </pre>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-mono text-lg mb-2">Remove Provider</h3>
              <p className="text-gray-600">Remove a configured provider.</p>
              <pre className="mt-2 text-sm">
                <code>k8sgpt auth remove --backend $PROVIDER</code>
              </pre>
            </div>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default Providers; 