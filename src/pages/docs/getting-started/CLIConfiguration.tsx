import React from 'react';
import DocPage from '../../../components/DocPage';

const CLIConfiguration: React.FC = () => {
  return (
    <DocPage
      title="K8sGPT CLI Configuration"
      description="Learn how to configure K8sGPT CLI for your specific needs"
      prev={{ title: "Installation", href: "/docs/getting-started/installation" }}
      next={{ title: "Operator Configuration", href: "/docs/getting-started/operator-configuration" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Configuration File</h2>
          <p className="text-fl-mute mb-4">
            K8sGPT uses a YAML configuration file to manage its settings. By default, it looks for a file named <code className="bg-black/40 px-1 py-0.5 rounded">k8sgpt.yaml</code> in your home directory, but you can specify a different location using the <code className="bg-black/40 px-1 py-0.5 rounded">--config</code> flag.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Configuration</h2>
          <div className="space-y-4">
            <p className="text-fl-mute">
              Here's a basic configuration example:
            </p>
            <div className="bg-black/40 p-4 rounded-lg">
              <pre className="text-sm whitespace-pre">
{`apiVersion: v1
kind: K8sGPT
metadata:
  name: k8sgpt
spec:
  backend: openai
  model: gpt-3.5-turbo
  baseURL: https://api.openai.com/v1
  secretRef:
    name: k8sgpt-secret
  analysis:
    interval: 5m
    namespace: k8sgpt`}
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Configuration Options</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-fl-mute mb-2">Specify the AI backend to use. K8sGPT supports 15+ providers including:</p>
              <ul className="list-disc pl-6 mt-2 text-fl-mute">
                <li><strong>Cloud:</strong> openai, azureopenai, googlevertexai, amazonbedrock, groq, cohere, and more</li>
                <li><strong>Local/Self-hosted:</strong> ollama, localai, custom REST backends</li>
              </ul>
              <p className="mt-3 text-sm">
                <a href="/docs/reference/providers" className="text-fl-accent hover:underline font-medium">
                  See complete provider list and setup guides →
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Model</h3>
              <p className="text-fl-mute">The specific model to use with the selected backend. Examples:</p>
              <ul className="list-disc pl-6 mt-2 text-fl-mute">
                <li>gpt-3.5-turbo (OpenAI)</li>
                <li>gpt-4 (OpenAI)</li>
                <li>claude-2 (Anthropic)</li>
                <li>command (Cohere)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Analysis Settings</h3>
              <ul className="list-disc pl-6 text-fl-mute">
                <li><strong>interval:</strong> How frequently K8sGPT performs analysis (e.g., "30s", "5m", "1h")</li>
                <li><strong>namespace:</strong> The namespace where K8sGPT will run its analysis</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Secret Management</h3>
              <p className="text-fl-mute">Store your API keys securely using Kubernetes secrets:</p>
              <div className="bg-black/40 p-4 rounded-lg mt-2">
                <pre className="text-sm whitespace-pre">
{`kubectl create secret generic k8sgpt-secret \\
  --from-literal=api-key=your-api-key`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Advanced Configuration</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Filters</h3>
              <p className="text-fl-mute">Configure which resources to analyze and which to ignore:</p>
              <div className="bg-black/40 p-4 rounded-lg mt-2">
                <pre className="text-sm whitespace-pre">
{`spec:
  filters:
    - Pod
    - Service
    - Deployment
    - Ingress`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Output Format</h3>
              <p className="text-fl-mute">Customize the output format of analysis results:</p>
              <ul className="list-disc pl-6 text-fl-mute">
                <li>json</li>
                <li>yaml</li>
                <li>table (default)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Cache Settings</h3>
              <p className="text-fl-mute">Configure caching behavior for analysis results:</p>
              <div className="bg-black/40 p-4 rounded-lg mt-2">
                <pre className="text-sm whitespace-pre">
{`spec:
  noCache: false  # Enable/disable caching
  cache:
    ttl: 1h      # Cache time-to-live`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default CLIConfiguration; 