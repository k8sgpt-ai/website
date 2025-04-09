import DocPage from '../../../components/DocPage';

const Providers = () => {
  return (
    <DocPage
      title="AI Providers"
      description="Information about AI providers supported by K8sGPT"
      prev={{ title: 'Operator Reference', href: '/docs/reference/operator-reference' }}
      next={{ title: 'Integration', href: '/docs/explanation/integration' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            K8sGPT supports multiple AI providers to analyze your Kubernetes cluster. Each provider offers
            different models and capabilities, allowing you to choose the one that best fits your needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">OpenAI</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              OpenAI is the default provider for K8sGPT, offering powerful language models for analysis.
            </p>
            <h3 className="text-xl font-semibold">Configuration</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# CLI
k8sgpt config add openai --api-key=sk-...

# Environment variable
export K8SGPT_OPENAI_API_KEY=sk-...

# Kubernetes secret
apiVersion: v1
kind: Secret
metadata:
  name: k8sgpt-secret
type: Opaque
stringData:
  OPENAI_API_KEY: "sk-..."`}</code>
            </pre>
            <h3 className="text-xl font-semibold mt-4">Available Models</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><code className="bg-gray-100 px-2 py-1 rounded">gpt-3.5-turbo</code> - Fast and efficient</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">gpt-4</code> - More powerful analysis</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">gpt-4-turbo</code> - Latest model with improved performance</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Azure OpenAI</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Azure OpenAI Service provides access to OpenAI models through Azure's infrastructure.
            </p>
            <h3 className="text-xl font-semibold">Configuration</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# CLI
k8sgpt config add azure --api-key=... --endpoint=https://...

# Environment variables
export K8SGPT_AZURE_API_KEY=...
export K8SGPT_AZURE_ENDPOINT=https://...

# Kubernetes secret
apiVersion: v1
kind: Secret
metadata:
  name: k8sgpt-secret
type: Opaque
stringData:
  AZURE_API_KEY: "..."
  AZURE_ENDPOINT: "https://..."`}</code>
            </pre>
            <h3 className="text-xl font-semibold mt-4">Available Models</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><code className="bg-gray-100 px-2 py-1 rounded">gpt-35-turbo</code> - Azure's version of GPT-3.5</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">gpt-4</code> - Azure's version of GPT-4</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Anthropic</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Anthropic provides Claude models, known for their detailed analysis and helpful responses.
            </p>
            <h3 className="text-xl font-semibold">Configuration</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# CLI
k8sgpt config add anthropic --api-key=sk-ant-...

# Environment variable
export K8SGPT_ANTHROPIC_API_KEY=sk-ant-...

# Kubernetes secret
apiVersion: v1
kind: Secret
metadata:
  name: k8sgpt-secret
type: Opaque
stringData:
  ANTHROPIC_API_KEY: "sk-ant-..."`}</code>
            </pre>
            <h3 className="text-xl font-semibold mt-4">Available Models</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><code className="bg-gray-100 px-2 py-1 rounded">claude-3-opus</code> - Most capable model</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">claude-3-sonnet</code> - Balanced performance</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">claude-3-haiku</code> - Fast and efficient</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Google AI</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Google AI provides access to Gemini models through Google Cloud.
            </p>
            <h3 className="text-xl font-semibold">Configuration</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# CLI
k8sgpt config add google --api-key=...

# Environment variable
export K8SGPT_GOOGLE_API_KEY=...

# Kubernetes secret
apiVersion: v1
kind: Secret
metadata:
  name: k8sgpt-secret
type: Opaque
stringData:
  GOOGLE_API_KEY: "..."`}</code>
            </pre>
            <h3 className="text-xl font-semibold mt-4">Available Models</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><code className="bg-gray-100 px-2 py-1 rounded">gemini-pro</code> - Text generation model</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">gemini-ultra</code> - Most capable model</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Local Models</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              K8sGPT can use locally deployed models for enhanced privacy and reduced latency.
            </p>
            <h3 className="text-xl font-semibold">Configuration</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# CLI
k8sgpt config add local --endpoint=http://localhost:8080

# Environment variable
export K8SGPT_LOCAL_ENDPOINT=http://localhost:8080

# Kubernetes configuration
apiVersion: v1
kind: ConfigMap
metadata:
  name: k8sgpt-config
data:
  LOCAL_ENDPOINT: "http://local-model-service:8080"`}</code>
            </pre>
            <h3 className="text-xl font-semibold mt-4">Supported Frameworks</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Hugging Face Transformers</li>
              <li>LlamaCpp</li>
              <li>Ollama</li>
              <li>vLLM</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Provider Selection</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Consider the following factors when choosing a provider:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Cost and pricing model</li>
              <li>Performance and response time</li>
              <li>Data privacy requirements</li>
              <li>Available models and capabilities</li>
              <li>Integration with existing infrastructure</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Common issues with AI providers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Invalid API keys or authentication</li>
              <li>Rate limiting and quotas</li>
              <li>Network connectivity issues</li>
              <li>Model availability and compatibility</li>
              <li>Response timeouts</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default Providers; 