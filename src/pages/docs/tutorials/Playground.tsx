import DocPage from '../../../components/DocPage';

const Playground = () => {
  return (
    <DocPage
      title="K8sGPT CLI Playground (Killercoda)"
      description="Interactive terminal environment for learning and experimenting with the K8sGPT CLI."
      prev={{ title: 'In-Cluster Operator', href: '/docs/getting-started/in-cluster-operator' }}
      next={{ title: 'Custom Analyzers', href: '/docs/tutorials/custom-analyzers' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            Explore the K8sGPT command-line interface (CLI) in a hands-on, interactive terminal environment powered by Killercoda.
            This playground allows you to experiment with K8sGPT commands in a pre-configured Kubernetes cluster without any local setup.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Accessing the Playground</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Launch the interactive CLI scenario directly in your browser using the Killercoda platform:
            </p>
            <div className="my-4">
              <a 
                href="https://killercoda.com/matthisholleville/scenario/k8sgpt-cli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Launch K8sGPT CLI Scenario
              </a>
            </div>
            <p className="text-gray-600">
              No installation is required, just click the link to start the environment.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Run K8sGPT CLI commands in a real terminal.</li>
            <li>Interact with a pre-configured Kubernetes environment.</li>
            <li>Test different analysis options and filters.</li>
            <li>Experiment with authentication against an AI provider (if configured in the scenario).</li>
            <li>Learn command syntax and explore output formats.</li>
            <li>Requires only a web browser.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Using the Playground</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Once the Killercoda environment loads, you will have access to a terminal where you can directly run <code className="bg-gray-100 px-2 py-1 rounded">k8sgpt</code> commands.
            </p>
            <p className="text-gray-600">
              Follow the instructions provided within the Killercoda scenario pane to guide your exploration. You can typically:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Verify the K8sGPT installation (<code className="bg-gray-100 px-2 py-1 rounded">k8sgpt version</code>).</li>
              <li>Configure AI provider details (if applicable to the scenario).</li>
              <li>Run analysis commands (<code className="bg-gray-100 px-2 py-1 rounded">k8sgpt analyze</code>).</li>
              <li>Explore filtering and output options.</li>
              <li>Test specific analyzers.</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Limitations</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              The Killercoda environment has some limitations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Time-limited sessions (usually 1 hour).</li>
              <li>Environment resets after the session ends.</li>
              <li>Network access might be restricted.</li>
              <li>Specific Kubernetes cluster configuration defined by the scenario.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              After exploring the CLI playground, you can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Install K8sGPT locally or in your own cluster.</li>
              <li>Configure K8sGPT to use your preferred AI provider.</li>
              <li>Integrate K8sGPT into your CI/CD pipelines or monitoring tools.</li>
              <li>Dive deeper into the <a href="/docs/reference/cli" className="text-primary hover:text-secondary">CLI Reference</a>.</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
};

export default Playground; 