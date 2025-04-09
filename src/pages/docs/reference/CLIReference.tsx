import DocPage from '../../../components/DocPage';

const CLIReference = () => {
  return (
    <DocPage
      title="CLI Reference"
      description="Comprehensive reference for K8sGPT's command-line interface"
      prev={{ title: 'Observability', href: '/docs/tutorials/observability' }}
      next={{ title: 'Operator Reference', href: '/docs/reference/operator-reference' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            The K8sGPT CLI is the primary interface for interacting with K8sGPT. It provides commands for
            analyzing your Kubernetes cluster, configuring settings, and managing integrations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Installation</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Install K8sGPT CLI using one of the following methods:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# Using Homebrew (macOS)
brew install k8sgpt

# Using curl
curl -sSfL https://raw.githubusercontent.com/k8sgpt-ai/k8sgpt/main/install.sh | sh

# Using wget
wget -q -O - https://raw.githubusercontent.com/k8sgpt-ai/k8sgpt/main/install.sh | sh`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Commands</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Analyze</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`k8sgpt analyze [flags]

Flags:
  -a, --analyzer string[]   Analyzer to use
  -f, --format string      Output format (text, json, yaml)
  -n, --namespace string   Namespace to analyze
  -o, --output string      Output file
  -s, --silent            Run in silent mode`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Configure</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`k8sgpt config [command]

Available Commands:
  add         Add a new configuration
  delete      Delete a configuration
  list        List all configurations
  set         Set a configuration value`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Version</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`k8sgpt version

Display the version of K8sGPT`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Advanced Commands</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Generate</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`k8sgpt generate [command]

Available Commands:
  analyzer    Generate a new analyzer
  integration Generate an integration configuration`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Serve</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`k8sgpt serve [flags]

Flags:
  -p, --port int         Port to listen on (default 8080)
  -h, --host string      Host to listen on (default "0.0.0.0")`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Configuration</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              K8sGPT can be configured using a YAML file or environment variables:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# config.yaml
ai:
  provider: openai
  model: gpt-3.5-turbo
  temperature: 0.7
  max_tokens: 150

filters:
  namespace: default
  severity: warning

output:
  format: text
  file: analysis.txt`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Environment Variables</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><code className="bg-gray-100 px-2 py-1 rounded">K8SGPT_AI_PROVIDER</code> - AI provider to use</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">K8SGPT_AI_MODEL</code> - AI model to use</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">K8SGPT_OPENAI_API_KEY</code> - OpenAI API key</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">K8SGPT_ANALYZERS</code> - Comma-separated list of analyzers</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">K8SGPT_NAMESPACE</code> - Default namespace</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Examples</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Basic Analysis</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# Analyze all resources in the default namespace
k8sgpt analyze

# Analyze specific namespace
k8sgpt analyze -n kube-system

# Analyze with specific analyzers
k8sgpt analyze -a pod -a deployment

# Output in JSON format
k8sgpt analyze -f json`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Configuration</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# List current configuration
k8sgpt config list

# Add OpenAI configuration
k8sgpt config add openai --api-key=sk-...

# Set default namespace
k8sgpt config set namespace default`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Common issues and solutions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Check Kubernetes context and permissions</li>
              <li>Verify AI provider configuration</li>
              <li>Ensure analyzers are properly installed</li>
              <li>Check network connectivity</li>
              <li>Review logs for detailed error messages</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default CLIReference; 