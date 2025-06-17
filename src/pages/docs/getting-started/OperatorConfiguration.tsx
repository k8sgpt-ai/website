import React from 'react';
import DocPage from '../../../components/DocPage';

const OperatorConfiguration: React.FC = () => {
  return (
    <DocPage
      title="Operator Configuration"
      description="Learn how to configure the K8sGPT Operator for your Kubernetes cluster"
      prev={{ title: "Installation", href: "/docs/getting-started/installation" }}
      next={{ title: "In-Cluster Operator", href: "/docs/getting-started/in-cluster-operator" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Configuration File</h2>
          <p className="text-gray-600 mb-4">
            K8sGPT uses a YAML configuration file to manage its settings. By default, it looks for a file named <code className="bg-gray-100 px-1 py-0.5 rounded">k8sgpt.yaml</code> in your home directory, but you can specify a different location using the <code className="bg-gray-100 px-1 py-0.5 rounded">--config</code> flag.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Configuration</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">Backend</h3>
              <p className="text-gray-600">Specify the AI backend to use (e.g., OpenAI, Anthropic, etc.)</p>
            </li>
            <li>
              <h3 className="font-semibold">Model</h3>
              <p className="text-gray-600">The specific model to use with the selected backend</p>
            </li>
            <li>
              <h3 className="font-semibold">API Key</h3>
              <p className="text-gray-600">Your API key for the selected backend</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Advanced Configuration</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">Filters</h3>
              <p className="text-gray-600">Configure which resources to analyze and which to ignore</p>
            </li>
            <li>
              <h3 className="font-semibold">Output Format</h3>
              <p className="text-gray-600">Customize the output format (JSON, YAML, etc.)</p>
            </li>
            <li>
              <h3 className="font-semibold">Cache Settings</h3>
              <p className="text-gray-600">Configure caching behavior for analysis results</p>
            </li>
            <li>
              <h3 className="font-semibold">Analysis Interval</h3>
              <p className="text-gray-600">Configure how frequently K8sGPT performs analysis of your cluster. The interval should be specified in a format that can be parsed by Go's time.ParseDuration function (e.g., "30s", "1m", "2h"). If not specified, the default interval is 30 seconds.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Complete Configuration Example</h2>
          <p className="text-gray-600 mb-4">
            Here's a complete example of all available configuration options in the K8sGPT CRD:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>
                {`apiVersion: k8sgpt.ai/v1alpha1  # API version
kind: K8sGPT                   # Resource kind
metadata:
  name: <k8sgpt-instance-name> # Name of your K8sGPT instance
  namespace: <namespace>        # Namespace where the instance is created
spec:
  version: <k8sgpt-version>     # Version of K8sGPT (optional)
  repository: <image-repository> # Image repository for K8sGPT (optional, default: ghcr.io/k8sgpt-ai/k8sgpt)
  imagePullPolicy: <image-pull-policy> # Image Pull Policy for K8SGPT container (optional, default: Always)
  imagePullSecrets:             # Secrets for pulling images (optional)
    - name: <secret-name>
  resources:                   # Resource requests and limits for the K8sGPT deployment (optional)
    requests:
      cpu: <cpu-request>
      memory: <memory-request>
    limits:
      cpu: <cpu-limit>
      memory: <memory-limit>
  analysisConfig:
    interval: <interval>       # Interval between analysis runs (e.g. "30s","5m", "1h")
  noCache: <boolean>            # Disable caching (optional)
  customAnalyzers:             # Define custom analyzers (optional)
    - name: <analyzer-name>
      connection:
        url: <analyzer-url>
        port: <analyzer-port>
  filters:                     # Filters for analysis (optional)
    - <filter-expression>
  extraOptions:                 # Extra options (optional)
    backstage:
      enabled: <boolean>
    serviceAccountIRSA: <arn>
  sink:                        # Webhook for notifications (optional)
    type: <webhook-type>        # (e.g., slack, mattermost)
    endpoint: <webhook-endpoint>
    channel: <channel-name>
    username: <username>
    icon_url: <icon-url>
    secret:
      name: <secret-name>
      key: <secret-key>
  analysis:                    # Analysis configuration (optional)
    interval: <interval>        # Interval between analysis runs (e.g. "5m", "1h")
    namespace: <namespace>      # Namespace to run analysis in (optional, default: k8sgpt)
  ai:                          # AI configuration (required)
    autoRemediation:           # Automatic remediation settings
      enabled: <boolean>        # Enable/disable auto-remediation
      riskThreshold: <percentage> # Risk threshold (e.g., "90")
      resources:                # Resource types for auto-remediation
        - Pod
        - Service
        - Deployment
        - Ingress  # Example
    backend: <ai-backend>       # AI backend (e.g., openai, azureopenai, localai, etc.)
    backOff:                   # Retry backoff settings (optional)
      enabled: <boolean>
      maxRetries: <integer>
    baseUrl: <base-url>         # Base URL for the AI API (optional)
    region: <region>            # Region for the AI service (optional)
    model: <ai-model>          # AI model to use (e.g., gpt-3.5-turbo)
    engine: <ai-engine>        # AI engine to use (optional)
    secret:                    # Secret containing API keys (required)
      name: <secret-name>
      key: <secret-key>
    enabled: <boolean>          # Enable/disable AI analysis (optional, default true)
    anonymized: <boolean>       # Anonymize data sent to AI (optional, default true)
    language: <language-code>     # Language for analysis (optional, default english)
    proxyEndpoint: <proxy-url>  # Proxy endpoint for AI API (optional)
    providerId: <provider-id>   # Provider ID for AI API (optional)
    maxTokens: <integer>        # Maximum number of tokens for AI responses (optional, default 2048)
    topk: <integer>             # Top K value for AI responses (optional, default 50)
  remoteCache:                 # Remote cache configuration (optional)
    credentials:
      name: <secret-name>
    gcs:                   # Google Cloud Storage backend
      bucketName: <bucket-name>
      region: <region>
      projectId: <project-id>
    s3:                    # AWS S3 backend
      bucketName: <bucket-name>
      region: <region>
    azure:                 # Azure Blob Storage backend
      storageAccount: <storage-account>
      containerName: <container-name>
    interplex:             # Interplex backend
      endpoint: <endpoint>
  integrations:                # Integrations with other tools (optional)
    trivy:                     # Trivy vulnerability scanning integration
      enabled: <boolean>
      skipInstall: <boolean>
      namespace: <namespace>
  nodeSelector:                # Node selector for the K8sGPT pod (optional)
    <label-key>: <label-value>
  targetNamespace: <namespace>   # Target namespace for analysis (optional)
  kubeconfig:                  # Kubeconfig secret for accessing the cluster (optional)
    name: <secret-name>
    key: <secret-key>
status:                        # Observed status of the K8sGPT operator (read-only)
#... (status information)`}
              </code>
            </pre>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default OperatorConfiguration; 