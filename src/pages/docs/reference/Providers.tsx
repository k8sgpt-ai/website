import React from 'react';
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
            A Backend (also called Provider) is a service that provides access to the AI language model. 
            There are many different backends available for K8sGPT. Each backend has its own strengths and 
            weaknesses, so it is important to choose the one that is right for your needs.
          </p>
          <p className="text-gray-600 mb-4">
            Currently, we have a total of 11 backends available:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>OpenAI</li>
            <li>Cohere</li>
            <li>Amazon Bedrock</li>
            <li>Amazon SageMaker</li>
            <li>Azure OpenAI</li>
            <li>Google Gemini</li>
            <li>Google Vertex AI</li>
            <li>Hugging Face</li>
            <li>IBM watsonx.ai</li>
            <li>LocalAI</li>
            <li>Ollama</li>
            <li>FakeAI</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">OpenAI</h2>
          <p className="text-gray-600 mb-4">
            OpenAI is the default backend for K8sGPT. We recommend using OpenAI first if you are new to 
            K8sGPT and if you have an account on OpenAI. OpenAI comes with the access to powerful language 
            models such as GPT-4.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>
                {`# Generate OpenAI token
k8sgpt generate

# Set the token in K8sGPT
k8sgpt auth add

# Run analysis using OpenAI
k8sgpt analyze --explain`}
              </code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Cohere</h2>
          <p className="text-gray-600 mb-4">
            Cohere allows building conversational apps. It uses Retrieval Augmented Generation (RAG) toolkit 
            that improves LLM's answer accuracy.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>
                {`# Configure Cohere backend
k8sgpt auth add --backend cohere --model command-nightly

# Run analysis using Cohere
k8sgpt analyze --explain --backend cohere`}
              </code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Amazon Bedrock</h2>
          <p className="text-gray-600 mb-4">
            Amazon Bedrock allows building and scaling generative AI applications.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600">
              Prerequisites:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>AWS_ACCESS_KEY</li>
              <li>AWS_SECRET_ACCESS_KEY</li>
              <li>AWS_DEFAULT_REGION</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                <code>
                  {`# Configure Bedrock backend
k8sgpt auth add --backend amazonbedrock --model anthropic.claude-v2

# Run analysis using Bedrock
k8sgpt analyze --explain --backend amazonbedrock`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Azure OpenAI</h2>
          <p className="text-gray-600 mb-4">
            Azure OpenAI Provider provides REST API access to OpenAI's powerful language models. It gives 
            the users an advanced language AI with powerful models with the security and enterprise promise 
            of Azure.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>
                {`# Configure Azure OpenAI backend
k8sgpt auth add --backend azureopenai --baseurl https://<your Azure OpenAI endpoint> --engine <deployment_name> --model <model_name>

# Run analysis using Azure OpenAI
k8sgpt analyze --explain --backend azureopenai`}
              </code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Google Gemini</h2>
          <p className="text-gray-600 mb-4">
            Google Gemini allows generative AI capabilities with multimodal approach (it is capable to 
            understand not only text, but also code, audio, image and video).
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>
                {`# Configure Google Gemini backend
k8sgpt auth add --backend googlevertexai --model gemini-pro --password "<Your API KEY>"

# Run analysis using Google Gemini
k8sgpt analyze --explain --backend google`}
              </code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">LocalAI</h2>
          <p className="text-gray-600 mb-4">
            LocalAI is a local model, which is an OpenAI compatible API. It uses llama.cpp and ggml to run 
            inference on consumer-grade hardware.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>
                {`# Configure LocalAI backend
k8sgpt auth add --backend localai --model <model_name> --baseurl http://localhost:8080/v1

# Run analysis using LocalAI
k8sgpt analyze --explain --backend localai`}
              </code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">FakeAI</h2>
          <p className="text-gray-600 mb-4">
            FakeAI or the NoOpAiProvider might be useful in situations where you need to test a new feature 
            or simulate the behaviour of an AI based-system without actually invoking it.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>
                {`# Configure FakeAI backend
k8sgpt auth add -b noopai

# Run analysis using FakeAI
k8sgpt analyze --explain --backend noopai`}
              </code>
            </pre>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default Providers; 