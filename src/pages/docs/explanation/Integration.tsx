import React from 'react';
import DocPage from '../../../components/DocPage';

const Integration = () => {
  return (
    <DocPage
      title="Integration"
      description="Learn how to integrate K8sGPT with other tools and systems"
      prev={{ title: 'Providers', href: '/docs/reference/providers' }}
      next={{ title: 'Overview', href: '/docs/getting-started/overview' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            K8sGPT is designed to integrate seamlessly with your existing Kubernetes ecosystem and tools.
            This page covers various integration options to help you incorporate K8sGPT into your workflows.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-blue-700">
              <strong>CNCF Project:</strong> K8sGPT is an open source project hosted by the Cloud Native Computing Foundation (CNCF). 
              It was accepted to CNCF at the <strong>Sandbox</strong> maturity level on December 19, 2023. 
              Learn more at <a href="https://www.cncf.io/projects/k8sgpt/" target="_blank" rel="noopener noreferrer" className="underline">CNCF K8sGPT project page</a>.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">CI/CD Integration</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Integrate K8sGPT into your CI/CD pipelines to catch issues before they reach production:
            </p>
            <h3 className="text-xl font-semibold">GitHub Actions</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`name: K8sGPT Analysis
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install K8sGPT
        run: |
          curl -sSfL https://raw.githubusercontent.com/k8sgpt-ai/k8sgpt/main/install.sh | sh
      - name: Run Analysis
        run: |
          k8sgpt analyze --namespace=default
        env:
          K8SGPT_OPENAI_API_KEY: \${{ secrets.OPENAI_API_KEY }}
          KUBECONFIG: \${{ secrets.KUBECONFIG }}`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">GitLab CI</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`analyze:
  image: ubuntu:latest
  before_script:
    - apt-get update && apt-get install -y curl
    - curl -sSfL https://raw.githubusercontent.com/k8sgpt-ai/k8sgpt/main/install.sh | sh
  script:
    - k8sgpt analyze --namespace=default
  environment:
    name: production
  variables:
    K8SGPT_OPENAI_API_KEY: "$OPENAI_API_KEY"
    KUBECONFIG: "$KUBECONFIG"`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Monitoring Integration</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Connect K8sGPT with your monitoring stack:
            </p>
            <h3 className="text-xl font-semibold">Prometheus</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: k8sgpt
  labels:
    release: prometheus
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: k8sgpt
  endpoints:
  - port: metrics
    interval: 30s`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Grafana Dashboard</h3>
            <p className="text-gray-600">
              Import the K8sGPT dashboard into Grafana:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# Dashboard ID: 12345
# Available at: https://grafana.com/grafana/dashboards/12345`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Notification Systems</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Send K8sGPT analysis results to various notification systems:
            </p>
            <h3 className="text-xl font-semibold">Slack</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`apiVersion: v1
kind: Secret
metadata:
  name: k8sgpt-slack-secret
type: Opaque
stringData:
  SLACK_TOKEN: "xoxb-your-token"
  SLACK_CHANNEL: "#kubernetes-alerts"`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Email</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`apiVersion: v1
kind: ConfigMap
metadata:
  name: k8sgpt-email-config
data:
  SMTP_SERVER: "smtp.example.com"
  SMTP_PORT: "587"
  FROM_EMAIL: "k8sgpt@example.com"
  TO_EMAIL: "team@example.com"`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Webhooks</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`apiVersion: v1
kind: ConfigMap
metadata:
  name: k8sgpt-webhook-config
data:
  WEBHOOK_URL: "https://api.example.com/webhook"
  WEBHOOK_METHOD: "POST"
  WEBHOOK_HEADERS: '{"Content-Type": "application/json"}'`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Service Mesh Integration</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Integrate K8sGPT with service mesh solutions:
            </p>
            <h3 className="text-xl font-semibold">Istio</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: k8sgpt
spec:
  hosts:
  - k8sgpt
  http:
  - route:
    - destination:
        host: k8sgpt
        port:
          number: 8080`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Linkerd</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`apiVersion: linkerd.io/v1alpha2
kind: ServiceProfile
metadata:
  name: k8sgpt
  namespace: default
spec:
  routes:
  - name: k8sgpt-api
    condition:
      pathRegex: "/api/.*"
    isRetryable: true
    timeout: 5000ms`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Logging Integration</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Connect K8sGPT with your logging infrastructure:
            </p>
            <h3 className="text-xl font-semibold">Elasticsearch</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`apiVersion: v1
kind: ConfigMap
metadata:
  name: k8sgpt-elasticsearch-config
data:
  ELASTICSEARCH_URL: "http://elasticsearch:9200"
  ELASTICSEARCH_INDEX: "k8sgpt-analysis"`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Fluentd</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`<match k8sgpt.**>
  @type elasticsearch
  host elasticsearch
  port 9200
  logstash_format true
  logstash_prefix k8sgpt
  <buffer>
    @type memory
    flush_interval 5s
  </buffer>
</match>`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Custom Integrations</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Create custom integrations using K8sGPT's API:
            </p>
            <h3 className="text-xl font-semibold">REST API</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# Start the API server
k8sgpt serve --port=8080

# Example API call
curl -X POST http://localhost:8080/api/analyze \\
  -H "Content-Type: application/json" \\
  -d '{"namespace": "default", "analyzers": ["pod"]}'`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6">Webhook Integration</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`apiVersion: v1
kind: ConfigMap
metadata:
  name: k8sgpt-webhook-config
data:
  WEBHOOK_URL: "https://your-service.com/webhook"
  WEBHOOK_SECRET: "your-secret"
  WEBHOOK_EVENTS: "analysis.completed,issue.detected"`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Use appropriate authentication for all integrations</li>
              <li>Implement rate limiting to prevent overloading</li>
              <li>Set up proper error handling and retries</li>
              <li>Monitor integration performance</li>
              <li>Keep integration configurations in version control</li>
              <li>Regularly test integrations to ensure they work</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default Integration; 