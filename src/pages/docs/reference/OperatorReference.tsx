import React from 'react';
import DocPage from '../../../components/DocPage';

const OperatorReference = () => {
  return (
    <DocPage
      title="Operator Reference"
      description="Comprehensive reference for K8sGPT's Kubernetes operator"
      prev={{ title: 'CLI Reference', href: '/docs/reference/cli-reference' }}
      next={{ title: 'Providers', href: '/docs/reference/providers' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            The K8sGPT operator is a Kubernetes controller that manages K8sGPT deployments in your cluster.
            It provides a declarative way to configure and run K8sGPT, making it easier to integrate with
            your Kubernetes workflows.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Installation</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Install the K8sGPT operator using Helm:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# Add the K8sGPT Helm repository
helm repo add k8sgpt https://charts.k8sgpt.ai
helm repo update

# Install the operator
helm install k8sgpt-operator k8sgpt/k8sgpt-operator --namespace k8sgpt --create-namespace`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Custom Resources</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">K8sGPT</h3>
            <p className="text-gray-600">
              The main custom resource that defines a K8sGPT deployment:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`apiVersion: k8sgpt.ai/v1alpha1
kind: K8sGPT
metadata:
  name: k8sgpt
  namespace: k8sgpt
spec:
  ai:
    provider: openai
    model: gpt-3.5-turbo
    temperature: 0.7
    maxTokens: 150
  filters:
    namespace: default
    severity: warning
  analyzers:
    - name: pod
    - name: deployment
  schedule: "*/5 * * * *"  # Run every 5 minutes
  secretRef:
    name: k8sgpt-secret`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Secret</h3>
            <p className="text-gray-600">
              Store sensitive information like API keys:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`apiVersion: v1
kind: Secret
metadata:
  name: k8sgpt-secret
  namespace: k8sgpt
type: Opaque
stringData:
  OPENAI_API_KEY: "sk-..."`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Configuration Options</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">AI Configuration</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><code className="bg-gray-100 px-2 py-1 rounded">provider</code> - AI provider (openai, azure, etc.)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">model</code> - Model to use</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">temperature</code> - Response creativity (0.0-1.0)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">maxTokens</code> - Maximum response length</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Filters</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><code className="bg-gray-100 px-2 py-1 rounded">namespace</code> - Target namespace</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">severity</code> - Minimum severity level</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">excludeNamespaces</code> - Namespaces to ignore</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Analyzers</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><code className="bg-gray-100 px-2 py-1 rounded">name</code> - Analyzer name</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">enabled</code> - Whether the analyzer is active</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">config</code> - Analyzer-specific configuration</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Scheduling</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              The operator supports cron-style scheduling for periodic analysis:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# Run every hour
schedule: "0 * * * *"

# Run every day at midnight
schedule: "0 0 * * *"

# Run every 15 minutes
schedule: "*/15 * * * *"`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Status and Events</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              The operator provides status information and events:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`kubectl describe k8sgpt k8sgpt -n k8sgpt

# View operator logs
kubectl logs -n k8sgpt -l app.kubernetes.io/name=k8sgpt-operator`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Integration with Other Tools</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              The operator can integrate with various tools:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Prometheus for metrics</li>
              <li>Grafana for dashboards</li>
              <li>Slack for notifications</li>
              <li>Custom webhooks</li>
              <li>Service mesh integration</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Common issues and solutions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Check operator logs for errors</li>
              <li>Verify secret configuration</li>
              <li>Ensure proper RBAC permissions</li>
              <li>Check network connectivity</li>
              <li>Verify cron schedule format</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default OperatorReference; 