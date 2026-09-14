// Homepage content. Facts are sourced from the docs so the marketing copy stays accurate.

export const links = {
  github: 'https://github.com/k8sgpt-ai/k8sgpt',
  operator: 'https://github.com/k8sgpt-ai/k8sgpt-operator',
  slack: 'https://join.slack.com/t/k8sgpt/shared_invite/zt-2ablh72q8-80lw46~ETCWl5dZQdDnfsg',
  community: 'https://github.com/k8sgpt-ai/community',
  membership: 'https://github.com/k8sgpt-ai/community/blob/main/community-membership.md',
  lfPolicies: 'https://lfprojects.org/policies/',
  install: '/docs/getting-started/installation',
  operatorDocs: '/docs/getting-started/in-cluster-operator',
  mcpDocs: '/docs/reference/mcp',
  providersDocs: '/docs/reference/providers',
  customAnalyzers: '/docs/tutorials/custom-analyzers',
  autoRemediation: '/auto-remediation',
  docs: '/docs',
};

export const defaultAnalyzers = [
  'Pod', 'PersistentVolumeClaim', 'ReplicaSet', 'Service', 'Event', 'Ingress', 'StatefulSet',
  'Deployment', 'Job', 'CronJob', 'Node', 'MutatingWebhookConfiguration', 'ValidatingWebhookConfiguration',
];

export const optionalAnalyzers = [
  'HorizontalPodAutoscaler', 'PodDisruptionBudget', 'NetworkPolicy', 'Log', 'GatewayClass',
  'Gateway', 'HTTPRoute', 'Storage', 'Security', 'ConfigMap',
];

export const providers = {
  cloud: [
    'OpenAI', 'Azure OpenAI', 'Amazon Bedrock', 'Amazon SageMaker', 'Google Vertex AI',
    'Google Gemini', 'Groq', 'Cohere', 'OCI Generative AI', 'IBM watsonx', 'Hugging Face',
  ],
  local: ['Ollama', 'LocalAI', 'Custom REST backend'],
};

export const integrations = ['Trivy', 'Prometheus', 'Kyverno', 'KEDA', 'AWS'];

export const videos = [
  { id: 'EXtCejkOJB0', title: 'KubeCon 2025 talk' },
  { id: '3Mmw2PyY9j0', title: 'Your Kubernetes SRE superpowers on autopilot · KubeCon EU 2023' },
  { id: 'SX_2YHC15cM', title: 'Kubernetes superpowers with AI' },
  { id: 'tfZWVutKgFY', title: 'K8sGPT integration in Testkube' },
  { id: '6HUFn0sSzA0', title: 'AI assistant for Kubernetes troubleshooting · Kubernetes Bytes' },
  { id: '7WA8XVrod2Y', title: 'K8sGPT tutorial' },
];

export const adopters = ['Spectro Cloud', 'Nethopper', 'Upstage AI'];

export const commands = {
  brew: 'brew install k8sgpt',
  auth: 'k8sgpt auth add --backend openai',
  analyze: 'k8sgpt analyze --explain',
  helm: [
    'helm repo add k8sgpt https://charts.k8sgpt.ai',
    'helm install release k8sgpt/k8sgpt-operator \\',
    '  -n k8sgpt-operator-system --create-namespace',
  ].join('\n'),
  mcp: 'k8sgpt serve --mcp',
  mcpHttp: 'k8sgpt serve --mcp --mcp-http --mcp-port 8089',
};

export const operatorYaml = `apiVersion: core.k8sgpt.ai/v1alpha1
kind: K8sGPT
metadata:
  name: k8sgpt
  namespace: k8sgpt-operator-system
spec:
  ai:
    enabled: true
    backend: openai
    model: gpt-4o-mini
    anonymized: true
    secret:
      name: k8sgpt-secret
      key: openai-api-key
    autoRemediation:
      enabled: true
      riskThreshold: 90
  sink:
    type: slack
    webhook: https://hooks.slack.com/...`;

export const mcpClaudeConfig = `{
  "mcpServers": {
    "k8sgpt": {
      "command": "k8sgpt",
      "args": ["serve", "--mcp"]
    }
  }
}`;

// A single, realistic incident reused across the options.
export const incident = {
  pod: 'default/checkout-api-7d9f8',
  owner: 'Deployment/checkout-api',
  error: 'Back-off pulling image "registry.local/checkout-api:v2.1"',
  explanation: 'The image tag v2.1 does not exist in registry.local/checkout-api, so the kubelet cannot pull it and the pod never starts.',
  solution: [
    'List available tags for registry.local/checkout-api',
    'Point Deployment/checkout-api at a published tag (e.g. v2.0.3)',
    'Watch the rollout: kubectl rollout status deploy/checkout-api',
  ],
};

export const cliTranscript = [
  { t: 'cmd', text: 'k8sgpt analyze --explain --anonymize' },
  { t: 'dim', text: ' 100% |████████████████████████| (3/3, 12 it/s)' },
  { t: 'blank', text: '' },
  { t: 'head', text: '0: Pod default/checkout-api-7d9f8(Deployment/checkout-api)' },
  { t: 'err', text: '- Error: Back-off pulling image "registry.local/checkout-api:v2.1"' },
  { t: 'ai', text: 'Error: Tag v2.1 does not exist in the registry, so the pod cannot start.' },
  { t: 'ai', text: 'Solution: 1. List tags  2. Pin a published tag  3. Watch the rollout' },
  { t: 'blank', text: '' },
  { t: 'head', text: '1: Service default/payments()' },
  { t: 'err', text: '- Error: Service has no endpoints, expected label app=payments' },
  { t: 'ai', text: 'Error: No pods match the selector app=payments.' },
  { t: 'ai', text: 'Solution: Align the Service selector with the Deployment pod labels.' },
  { t: 'blank', text: '' },
  { t: 'head', text: '2: PersistentVolumeClaim data/postgres-0()' },
  { t: 'err', text: '- Error: storageclass.storage.k8s.io "fast-ssd" not found' },
  { t: 'ai', text: 'Solution: Create the StorageClass or use an existing one (kubectl get sc).' },
] as const;
