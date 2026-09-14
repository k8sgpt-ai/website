import DocPage from '../../../components/DocPage';

const CLIReference = () => {
  return (
    <DocPage
      title="CLI Reference"
      description="Comprehensive reference for K8sGPT's command-line interface"
      prev={{ title: 'Integrations', href: '/docs/tutorials/integrations' }}
      toc={[
        { id: 'overview', title: 'Overview' },
        { id: 'installation', title: 'Installation' },
        { id: 'basic-commands', title: 'Basic commands' },
        { id: 'auth-filters', title: 'Auth, filters & integrations' },
        { id: 'advanced-commands', title: 'Advanced commands' },
        { id: 'configuration', title: 'Configuration' },
        { id: 'env', title: 'Environment variables' },
        { id: 'troubleshooting', title: 'Troubleshooting' },
      ]}
      next={{ title: 'Operator Reference', href: '/docs/reference/operator' }}
    >
      <div className="space-y-8">
        <section id="overview">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-fl-mute mb-4">
            The K8sGPT CLI is the primary interface for interacting with K8sGPT. It provides commands for
            analyzing your Kubernetes cluster, configuring settings, and managing integrations.
          </p>
        </section>

        <section id="installation">
          <h2 className="text-2xl font-bold mb-4">Installation</h2>
          <div className="space-y-4">
            <p className="text-fl-mute">
              Install K8sGPT CLI using one of the following methods:
            </p>
            <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto">
              <code>{`# Using Homebrew (macOS)
brew install k8sgpt

# Using curl
curl -sSfL https://raw.githubusercontent.com/k8sgpt-ai/k8sgpt/main/install.sh | sh

# Using wget
wget -q -O - https://raw.githubusercontent.com/k8sgpt-ai/k8sgpt/main/install.sh | sh`}</code>
            </pre>
          </div>
        </section>

        <section id="basic-commands">
          <h2 className="text-2xl font-bold mb-4">Basic Commands</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Analyze</h3>
            <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto">
              <code>{`k8sgpt analyze [flags]

Flags:
  -a, --analyzer string[]   Analyzer to use
  -f, --format string      Output format (text, json, yaml)
  -n, --namespace string   Namespace to analyze
  -o, --output string      Output file
  -s, --silent            Run in silent mode`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Configure</h3>
            <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto">
              <code>{`k8sgpt config [command]

Available Commands:
  add         Add a new configuration
  delete      Delete a configuration
  list        List all configurations
  set         Set a configuration value`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Version</h3>
            <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto">
              <code>{`k8sgpt version

Display the version of K8sGPT`}</code>
            </pre>
          </div>
        </section>

        <section id="auth-filters">
          <h2 className="text-2xl font-bold mb-4">Auth, Filters & Integrations</h2>
          <div className="space-y-4">
            <p className="text-fl-mute">
              Backends are managed with <code className="bg-black/40 px-2 py-1 rounded">auth</code>,
              analysis scope with <code className="bg-black/40 px-2 py-1 rounded">filters</code>,
              and external tools with <code className="bg-black/40 px-2 py-1 rounded">integrations</code>:
            </p>
            <pre className="bg-black/60 p-4 rounded-lg overflow-x-auto">
              <code>{`# Backends
k8sgpt auth list
k8sgpt auth add --backend openai --model gpt-4o-mini
k8sgpt auth update openai
k8sgpt auth remove -b openai

# Filters (which analyzers run by default)
k8sgpt filters add Service
k8sgpt filters add Ingress,Pod
k8sgpt filters remove Service

# Integrations (external finding sources)
k8sgpt integrations list
k8sgpt integrations activate prometheus
k8sgpt analyze --explain --filter=prometheus
k8sgpt integrations deactivate prometheus`}</code>
            </pre>
            <p className="text-fl-mute">
              See the <a href="/docs/tutorials/integrations" className="text-fl-accent hover:underline">Integrations tutorial</a> and
              the <a href="/docs/reference/providers" className="text-fl-accent hover:underline">AI providers reference</a> for
              the full workflow.
            </p>
          </div>
        </section>

        <section id="advanced-commands">
          <h2 className="text-2xl font-bold mb-4">Advanced Commands</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Generate</h3>
            <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto">
              <code>{`k8sgpt generate [command]

Available Commands:
  analyzer    Generate a new analyzer
  integration Generate an integration configuration`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Serve</h3>
            <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto">
              <code>{`k8sgpt serve [flags]

Flags:
  -p, --port int         Port to listen on (default 8080)
  -h, --host string      Host to listen on (default "0.0.0.0")`}</code>
            </pre>
          </div>
        </section>

        <section id="configuration">
          <h2 className="text-2xl font-bold mb-4">Configuration</h2>
          <div className="space-y-4">
            <p className="text-fl-mute">
              K8sGPT can be configured using a YAML file or environment variables:
            </p>
            <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto">
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

        <section id="env">
          <h2 className="text-2xl font-bold mb-4">Environment Variables</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-fl-mute">
              <li><code className="bg-black/40 px-2 py-1 rounded">K8SGPT_AI_PROVIDER</code> - AI provider to use</li>
              <li><code className="bg-black/40 px-2 py-1 rounded">K8SGPT_AI_MODEL</code> - AI model to use</li>
              <li><code className="bg-black/40 px-2 py-1 rounded">K8SGPT_OPENAI_API_KEY</code> - OpenAI API key</li>
              <li><code className="bg-black/40 px-2 py-1 rounded">K8SGPT_ANALYZERS</code> - Comma-separated list of analyzers</li>
              <li><code className="bg-black/40 px-2 py-1 rounded">K8SGPT_NAMESPACE</code> - Default namespace</li>
            </ul>
          </div>
        </section>

        <section id="troubleshooting">
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <p className="text-fl-mute">
              Common issues and solutions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-fl-mute">
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