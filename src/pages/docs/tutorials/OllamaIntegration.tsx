import DocPage from '../../../components/DocPage';

const OllamaIntegration: React.FC = () => {
  return (
    <DocPage
      title="Using Ollama for Local LLMs"
      description="Run K8sGPT with local LLMs using Ollama for complete data privacy and air-gapped environments"
      prev={{ title: "Slack Integration", href: "/docs/tutorials/slack-integration" }}
      next={{ title: "Custom Analyzers", href: "/docs/tutorials/custom-analyzers" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            Ollama enables you to run large language models locally on your machine. This tutorial shows you how to integrate 
            Ollama with K8sGPT for completely private, self-hosted Kubernetes cluster analysis.
          </p>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Benefits of Using Ollama</h3>
                <ul className="mt-2 text-sm text-green-700 list-disc list-inside space-y-1">
                  <li>100% data privacy - no data leaves your infrastructure</li>
                  <li>Works in air-gapped environments</li>
                  <li>No API costs or rate limits</li>
                  <li>Low latency (local inference)</li>
                  <li>Easy model switching and experimentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>K8sGPT installed (<code className="bg-gray-100 px-2 py-0.5 rounded">brew install k8sgpt</code> or see <a href="/docs/getting-started/installation" className="text-purple-600 hover:underline">installation docs</a>)</li>
            <li>A Kubernetes cluster to analyze</li>
            <li>Sufficient disk space for models (2-4GB per model)</li>
            <li>For larger models: 16GB+ RAM recommended</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Step 1: Install Ollama</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">macOS / Linux</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{`# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.ai/install.sh | sh

# Start Ollama service
ollama serve`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Windows</h3>
              <p className="text-gray-600 mb-2">Download the installer from <a href="https://ollama.ai/download" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">ollama.ai/download</a></p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Docker</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{`docker run -d -v ollama:/root/.ollama \\
  -p 11434:11434 --name ollama ollama/ollama`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            <strong>Note:</strong> Ollama runs on port 11434 by default. Make sure this port is available.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Step 2: Download a Model</h2>
          
          <p className="text-gray-600 mb-4">
            Choose a model based on your hardware and accuracy needs:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Model</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">RAM</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Best For</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">llama3.2</td>
                  <td className="px-4 py-3 text-sm">2GB</td>
                  <td className="px-4 py-3 text-sm">8GB</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Fast, good balance</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">mistral</td>
                  <td className="px-4 py-3 text-sm">4.1GB</td>
                  <td className="px-4 py-3 text-sm">8GB</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Great performance</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">llama3.1:8b</td>
                  <td className="px-4 py-3 text-sm">4.7GB</td>
                  <td className="px-4 py-3 text-sm">8GB</td>
                  <td className="px-4 py-3 text-sm text-gray-600">High quality</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">llama3.1:70b</td>
                  <td className="px-4 py-3 text-sm">40GB</td>
                  <td className="px-4 py-3 text-sm">64GB</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Best accuracy</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">codellama</td>
                  <td className="px-4 py-3 text-sm">3.8GB</td>
                  <td className="px-4 py-3 text-sm">8GB</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Code-focused</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Download and Run a Model</h3>
            <pre className="text-sm overflow-x-auto">
              <code>{`# Recommended: Llama 3.2 (fast, good quality)
ollama pull llama3.2

# Or try Mistral
ollama pull mistral

# Test the model
ollama run llama3.2 "Explain Kubernetes pods in one sentence"`}</code>
            </pre>
          </div>

          <div className="mt-3 text-sm text-gray-500">
            <strong>Tip:</strong> Browse all available models at <a href="https://ollama.ai/library" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">ollama.ai/library</a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Step 3: Configure K8sGPT</h2>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <pre className="text-sm overflow-x-auto">
              <code>{`k8sgpt auth add --backend ollama \\
  --model llama3.2 \\
  --baseurl http://localhost:11434`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-800">
                  <strong>Custom Ollama URL:</strong> If Ollama is running on a different host or in a container, update the <code className="bg-blue-100 px-1 rounded">baseurl</code> accordingly (e.g., <code className="bg-blue-100 px-1 rounded">http://ollama:11434</code>).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Step 4: Analyze Your Cluster</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Basic Analysis</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{`# Analyze all namespaces
k8sgpt analyze --explain

# Analyze specific namespace
k8sgpt analyze --namespace default --explain

# Filter by resource type
k8sgpt analyze --filter Pod --explain`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Example Output</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto text-gray-700">
                  <code>{`AI Provider: ollama

0 default/broken-pod(Pod)
- Error: Back-off restarting failed container
- AI Analysis: This pod is experiencing continuous restart loops. 
  Common causes:
  1. Application crash on startup
  2. Misconfigured liveness/readiness probes
  3. Resource limits too restrictive
  
  Recommended actions:
  - Check pod logs: kubectl logs broken-pod -n default
  - Review probe configuration
  - Verify resource requests/limits`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Advanced Configuration</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Using Different Models</h3>
              <p className="text-gray-600 mb-2">Switch models based on your needs:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{`# Use a larger model for better accuracy
k8sgpt auth remove --backend ollama
k8sgpt auth add --backend ollama \\
  --model llama3.1:70b \\
  --baseurl http://localhost:11434

# Use a code-specialized model
k8sgpt auth add --backend ollama \\
  --model codellama \\
  --baseurl http://localhost:11434`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Kubernetes Operator Configuration</h3>
              <p className="text-gray-600 mb-2">Use Ollama with the K8sGPT Operator:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{`apiVersion: core.k8sgpt.ai/v1alpha1
kind: K8sGPT
metadata:
  name: k8sgpt-ollama
spec:
  ai:
    enabled: true
    backend: ollama
    model: llama3.2
    baseUrl: http://ollama.ollama-system.svc.cluster.local:11434
  noCache: false
  version: v0.3.x`}</code>
                </pre>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                <strong>Note:</strong> Deploy Ollama in your cluster first, or point to an external Ollama instance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Running Ollama in Kubernetes</h3>
              <p className="text-gray-600 mb-2">Deploy Ollama alongside K8sGPT Operator:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: ollama
  namespace: ollama-system
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ollama
  template:
    metadata:
      labels:
        app: ollama
    spec:
      containers:
      - name: ollama
        image: ollama/ollama:latest
        ports:
        - containerPort: 11434
        volumeMounts:
        - name: ollama-data
          mountPath: /root/.ollama
        # Optional: GPU support
        # resources:
        #   limits:
        #     nvidia.com/gpu: 1
      volumes:
      - name: ollama-data
        persistentVolumeClaim:
          claimName: ollama-data
---
apiVersion: v1
kind: Service
metadata:
  name: ollama
  namespace: ollama-system
spec:
  selector:
    app: ollama
  ports:
  - port: 11434
    targetPort: 11434`}</code>
                </pre>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                After deploying, exec into the pod to pull your desired model: <code className="bg-gray-100 px-2 py-0.5 rounded">kubectl exec -it deployment/ollama -n ollama-system -- ollama pull llama3.2</code>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">❌ "Connection refused" error</h3>
              <p className="text-sm text-gray-600 mb-2">Ollama service isn't running or wrong URL.</p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <code># Check if Ollama is running<br/>
                curl http://localhost:11434<br/>
                <br/>
                # Start Ollama<br/>
                ollama serve</code>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">❌ "Model not found" error</h3>
              <p className="text-sm text-gray-600 mb-2">The specified model hasn't been downloaded.</p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <code># List downloaded models<br/>
                ollama list<br/>
                <br/>
                # Pull the model<br/>
                ollama pull llama3.2</code>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">⚠️ Slow inference</h3>
              <p className="text-sm text-gray-600 mb-2">Model too large for your hardware.</p>
              <p className="text-sm text-gray-600">Try a smaller model like <code className="bg-gray-100 px-1 rounded">llama3.2</code> or <code className="bg-gray-100 px-1 rounded">mistral</code>.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">⚠️ Out of memory errors</h3>
              <p className="text-sm text-gray-600 mb-2">Insufficient RAM for the model.</p>
              <p className="text-sm text-gray-600">Use a smaller model or add more RAM. Llama 3.2 works well on 8GB systems.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Performance Tips</h2>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">🚀</span>
              <div>
                <strong className="text-gray-900">GPU Acceleration:</strong>
                <p className="text-sm text-gray-600">Ollama automatically uses NVIDIA GPUs if available. Install CUDA drivers for 10-100x speedup.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">💾</span>
              <div>
                <strong className="text-gray-900">Keep Models Loaded:</strong>
                <p className="text-sm text-gray-600">Ollama keeps models in memory after first use. Subsequent analyses are much faster.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">⚖️</span>
              <div>
                <strong className="text-gray-900">Balance Size vs Quality:</strong>
                <p className="text-sm text-gray-600">7B models (llama3.2, mistral) offer 90% of the quality at 10% of the cost of 70B models.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">🔄</span>
              <div>
                <strong className="text-gray-900">Use Caching:</strong>
                <p className="text-sm text-gray-600">K8sGPT caches results by default. Disable with <code className="bg-gray-100 px-1 rounded">--no-cache</code> only when needed.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="bg-green-50 border-l-4 border-green-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">You're All Set! 🎉</h3>
              <p className="mt-2 text-sm text-green-700">
                You now have a fully private, self-hosted K8sGPT setup with Ollama. Your cluster analysis data never leaves your infrastructure.
              </p>
              <p className="mt-2 text-sm text-green-700">
                <strong>Next steps:</strong> Check out <a href="/docs/getting-started/operator-configuration" className="underline font-medium">Operator Configuration</a> to set up continuous monitoring, or explore <a href="/docs/reference/providers" className="underline font-medium">other providers</a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default OllamaIntegration;
