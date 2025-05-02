import DocPage from '../../../components/DocPage';

const CLI: React.FC = () => {
  return (
    <DocPage
      title="CLI Reference"
      description="Comprehensive reference for K8sGPT command-line interface commands and options"
      prev={{ title: "Observability", href: "/docs/tutorials/observability" }}
      next={{ title: "Operator Guide", href: "/docs/reference/operator" }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Commands</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-mono text-lg mb-2">analyze</h3>
              <p className="text-gray-600">Analyze your Kubernetes cluster for potential issues.</p>
              <pre className="mt-2 text-sm">
                <code>k8sgpt analyze</code>
              </pre>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-mono text-lg mb-2">configure</h3>
              <p className="text-gray-600">Configure K8sGPT settings and authentication.</p>
              <pre className="mt-2 text-sm">
                <code>k8sgpt configure</code>
              </pre>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-mono text-lg mb-2">version</h3>
              <p className="text-gray-600">Display the current version of K8sGPT.</p>
              <pre className="mt-2 text-sm">
                <code>k8sgpt version</code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Additional Commands</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-mono text-lg mb-2">generate</h3>
              <p className="text-gray-600">Generate configuration files and resources.</p>
              <pre className="mt-2 text-sm">
                <code>k8sgpt generate</code>
              </pre>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-mono text-lg mb-2">serve</h3>
              <p className="text-gray-600">Start the K8sGPT server.</p>
              <pre className="mt-2 text-sm">
                <code>k8sgpt serve</code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Serve Mode Options</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-mono text-lg mb-2">GRPC</h3>
              <p className="text-gray-600">Start the server with GRPC support.</p>
              <pre className="mt-2 text-sm">
                <code>k8sgpt serve --grpc</code>
              </pre>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-mono text-lg mb-2">REST API</h3>
              <p className="text-gray-600">Start the server with REST API support.</p>
              <pre className="mt-2 text-sm">
                <code>k8sgpt serve --rest</code>
              </pre>
            </div>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default CLI; 