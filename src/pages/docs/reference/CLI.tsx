import React from 'react';
import DocPage from '../../../components/DocPage';

const CLI = () => {
  return (
    <DocPage
      title="CLI Reference"
      description="Comprehensive reference for K8sGPT command-line interface commands and options"
      prev={{ title: 'Providers', href: '/docs/reference/providers' }}
      next={{ title: 'Operator Reference', href: '/docs/reference/operator-reference' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            This section provides an overview of the different `k8sgpt` CLI commands.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Prerequisites</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>You need to be connected to a Kubernetes cluster, K8sGPT will access it through your kubeconfig.</li>
                    <li>Signed-up to OpenAI ChatGPT</li>
                    <li>Have the K8sGPT CLI installed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Commands</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Run a scan with the default analyzers</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`# Generate OpenAI token
k8sgpt generate

# Set the token in K8sGPT
k8sgpt auth add

# Run analysis
k8sgpt analyze --explain`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Filter on resource</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`k8sgpt analyze --explain --filter=Service`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Filter by namespace</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`k8sgpt analyze --explain --filter=Pod --namespace=default`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Output to JSON</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`k8sgpt analyze --explain --filter=Service --output=json`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Anonymize during explain</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`k8sgpt analyze --explain --filter=Service --output=json --anonymize`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Additional Commands</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">List configured backends</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`k8sgpt auth list`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Remove configured backends</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`k8sgpt auth remove --backend $MY_BACKEND`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">List integrations</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`k8sgpt integrations list`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Activate integrations</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`k8sgpt integrations activate [integration(s)]`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Use integration</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`k8sgpt analyze --filter=[integration(s)]`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Deactivate integrations</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`k8sgpt integrations deactivate [integration(s)]`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Serve Mode</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Serve mode with GRPC</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`k8sgpt serve`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Analysis with GRPC serve mode</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`grpcurl -plaintext localhost:8080 schema.v1.ServerService/Analyze`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Serve mode with GRPC and non-default backend</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`k8sgpt serve -b amazonbedrock`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Analysis with GRPC serve mode and non-default backend</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`grpcurl -plaintext -d '{"explain": true, "backend": "amazonbedrock"}' localhost:8080 schema.v1.ServerService/Analyze`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Serve mode with REST API</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`k8sgpt serve --http`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Analysis with REST API serve mode</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`curl -X POST "http://localhost:8080/v1/analyze"`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default CLI; 