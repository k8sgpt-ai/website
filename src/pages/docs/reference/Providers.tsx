import DocPage from '../../../components/DocPage';

const Providers: React.FC = () => {
  return (
    <DocPage
      title="AI Providers"
      description="Complete guide to AI providers supported by K8sGPT"
      prev={{ title: "CLI Reference", href: "/docs/reference/cli" }}
      next={{ title: "Operator Guide", href: "/docs/reference/operator" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            K8sGPT supports a wide range of AI providers, from cloud-based services to self-hosted solutions. 
            Choose the provider that best fits your needs, whether you prioritize privacy, cost, performance, or specific model capabilities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">☁️ Cloud Providers</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">OpenAI</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Default</span>
              </div>
              <p className="text-gray-600 mb-4">
                GPT-3.5, GPT-4, and other OpenAI models. Most widely tested provider.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  <code>{`k8sgpt auth add --backend openai --model gpt-4o
# Or use GPT-3.5 for lower cost
k8sgpt auth add --backend openai --model gpt-3.5-turbo`}</code>
                </pre>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>API Key:</strong> Get from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">platform.openai.com</a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Azure OpenAI</h3>
              <p className="text-gray-600 mb-4">
                OpenAI models hosted on Microsoft Azure. Ideal for enterprise deployments with Azure infrastructure.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  <code>{`k8sgpt auth add --backend azureopenai \\
  --baseurl https://YOUR-ENDPOINT.openai.azure.com \\
  --model YOUR-DEPLOYMENT-NAME`}</code>
                </pre>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>Note:</strong> Requires Azure OpenAI resource and deployment
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Amazon Bedrock</h3>
              <p className="text-gray-600 mb-4">
                Access foundation models from Amazon, Anthropic, Meta, and more through AWS Bedrock.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  <code>{`k8sgpt auth add --backend amazonbedrock \\
  --model anthropic.claude-v2`}</code>
                </pre>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>Authentication:</strong> Uses AWS credentials from environment or IAM role
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Amazon SageMaker</h3>
              <p className="text-gray-600 mb-4">
                Deploy and use custom models or AWS-provided models via SageMaker endpoints.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  <code>{`k8sgpt auth add --backend amazonsagemaker \\
  --model YOUR-ENDPOINT-NAME`}</code>
                </pre>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Google Vertex AI</h3>
              <p className="text-gray-600 mb-4">
                Enterprise AI platform with models like PaLM 2, Gemini, and more on Google Cloud.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  <code>{`k8sgpt auth add --backend googlevertexai \\
  --model gemini-pro`}</code>
                </pre>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Google Generative AI</h3>
              <p className="text-gray-600 mb-4">
                Direct access to Google's Gemini models via the Generative AI API.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  <code>{`k8sgpt auth add --backend googlegenai \\
  --model gemini-pro`}</code>
                </pre>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Groq</h3>
              <p className="text-gray-600 mb-4">
                Ultra-fast inference with Llama, Mixtral, and Gemma models on custom LPU hardware.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  <code>{`k8sgpt auth add --backend groq \\
  --model llama-3.1-70b-versatile`}</code>
                </pre>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>API Key:</strong> Get from <a href="https://console.groq.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">console.groq.com</a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Cohere</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-focused NLP with Command and Embed models.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  <code>{`k8sgpt auth add --backend cohere \\
  --model command`}</code>
                </pre>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">OCI Generative AI</h3>
              <p className="text-gray-600 mb-4">
                Oracle Cloud Infrastructure's generative AI service with various foundation models.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  <code>{`k8sgpt auth add --backend ocigenai \\
  --model cohere.command`}</code>
                </pre>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">IBM WatsonX AI</h3>
              <p className="text-gray-600 mb-4">
                IBM's enterprise AI platform with foundation models for business use cases.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  <code>{`k8sgpt auth add --backend watsonxai \\
  --model ibm/granite-13b-chat-v2`}</code>
                </pre>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Hugging Face</h3>
              <p className="text-gray-600 mb-4">
                Access thousands of open-source models via Hugging Face's Inference API.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  <code>{`k8sgpt auth add --backend huggingface \\
  --model meta-llama/Llama-2-70b-chat-hf`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">🏠 Self-Hosted / Local Providers</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-purple-800">
                  <strong>Privacy & Control:</strong> Self-hosted providers keep your data on your infrastructure and don't require external API calls.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-green-500 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">Ollama</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Local</span>
              </div>
              <p className="text-gray-600 mb-4">
                Run local LLMs (Llama, Mistral, Gemma, etc.) on your machine. Perfect for air-gapped environments and data privacy.
              </p>
              <div className="bg-gray-50 p-4 rounded mb-3">
                <pre className="text-sm overflow-x-auto">
                  <code>{`# Install Ollama from ollama.ai
ollama pull llama3.2

# Configure K8sGPT
k8sgpt auth add --backend ollama \\
  --model llama3.2 \\
  --baseurl http://localhost:11434`}</code>
                </pre>
              </div>
              <div className="text-sm text-gray-600">
                <strong>📖 Learn more:</strong> <a href="/docs/tutorials/ollama" className="text-purple-600 hover:underline">Ollama Local LLM Tutorial</a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-green-500 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">LocalAI</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Local</span>
              </div>
              <p className="text-gray-600 mb-4">
                OpenAI-compatible local AI server. Supports many models with GPU acceleration.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  <code>{`k8sgpt auth add --backend localai \\
  --model ggml-gpt4all-j \\
  --baseurl http://localhost:8080`}</code>
                </pre>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>Setup:</strong> See <a href="https://localai.io" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">localai.io</a> for installation
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-green-500 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">Custom REST Backend</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Custom</span>
              </div>
              <p className="text-gray-600 mb-4">
                Integrate any custom AI service that implements a simple REST API contract.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  <code>{`k8sgpt auth add --backend customrest \\
  --baseurl http://your-service:8080/analyze`}</code>
                </pre>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <strong>📖 Learn more:</strong> <a href="/docs/tutorials/custom-rest-backend" className="text-purple-600 hover:underline">Custom REST Backend Tutorial</a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">🛠️ Managing Providers</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">List Configured Providers</h3>
              <pre className="text-sm">
                <code>k8sgpt auth list</code>
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Remove a Provider</h3>
              <pre className="text-sm">
                <code>k8sgpt auth remove --backend openai</code>
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Update Provider Configuration</h3>
              <p className="text-sm text-gray-600 mb-2">Remove and re-add with new settings:</p>
              <pre className="text-sm">
                <code>{`k8sgpt auth remove --backend openai
k8sgpt auth add --backend openai --model gpt-4o`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">💡 Choosing a Provider</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Best for Production</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✅ OpenAI (most reliable, well-tested)</li>
                <li>✅ Azure OpenAI (enterprise SLA)</li>
                <li>✅ Google Vertex AI (GCP integration)</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Best for Cost</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>💰 Groq (free tier, fast inference)</li>
                <li>💰 Ollama (free, local)</li>
                <li>💰 LocalAI (free, self-hosted)</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Best for Privacy</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>🔒 Ollama (fully local)</li>
                <li>🔒 LocalAI (self-hosted)</li>
                <li>🔒 Custom REST (your infrastructure)</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Best for Speed</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>⚡ Groq (LPU hardware)</li>
                <li>⚡ GPT-3.5-turbo (fast responses)</li>
                <li>⚡ Ollama (local, no network latency)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800 mb-1">Need Help?</h3>
              <p className="text-sm text-blue-700">
                For detailed setup guides and troubleshooting, check the <a href="/docs/getting-started/cli-configuration" className="underline font-medium">CLI Configuration</a> page or join the community on <a href="https://discord.gg/k8sgpt" target="_blank" rel="noopener noreferrer" className="underline font-medium">Discord</a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default Providers;
