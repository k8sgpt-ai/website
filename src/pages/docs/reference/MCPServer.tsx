import DocPage from '../../../components/DocPage';

const MCPServer = () => {
  return (
    <DocPage
      title="MCP Server"
      description="Reference for the Model Communication Protocol (MCP) server in K8sGPT"
      prev={{ title: 'Providers', href: '/docs/reference/providers' }}
      next={{ title: 'Integration', href: '/docs/explanation/integration' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            The MCP (Model Communication Protocol) server is a new feature in K8sGPT that enables advanced, real-time, and programmatic interaction with the analysis engine. It is designed for integration scenarios where you want to communicate with K8sGPT over a persistent connection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Prerequisites</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>K8sGPT v0.4.14 or later</li>
              <li>A client capable of communicating over stdio using the MCP protocol</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Starting the MCP Server</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`k8sgpt serve mcp`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Protocol Overview</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              The MCP protocol uses JSON messages exchanged over standard input and output. Each message includes a <code>type</code> field and a <code>payload</code> field.
            </p>
            <h3 className="text-xl font-semibold">Example Request</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`{
  "type": "analyze",
  "payload": {
    "namespace": "default",
    "filters": ["Pod", "Deployment"]
  }
}`}</code>
            </pre>
            <h3 className="text-xl font-semibold mt-4">Example Response</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`{
  "type": "analyzeResult",
  "payload": {
    "issues": [
      {
        "resource": "pod/my-app-123",
        "problem": "CrashLoopBackOff",
        "explanation": "The pod is crashing due to ...",
        "suggestion": "Check the container logs for errors."
      }
    ]
  }
}`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Supported Commands</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li><code>analyze</code>: Triggers an analysis of the cluster or a specific namespace</li>
            <li><code>status</code>: Returns the current status of the server</li>
            <li><code>shutdown</code>: Gracefully terminates the MCP server</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Integration with Claude Desktop</h2>
          <p className="text-gray-600">
            K8sGPT can be integrated with Claude Desktop to provide AI-powered Kubernetes cluster analysis via the MCP protocol. This integration enables:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>Real-time cluster analysis through Claude Desktop</li>
            <li>Natural language interaction with your Kubernetes clusters</li>
            <li>Enhanced troubleshooting capabilities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Configuration</h2>
          <p className="text-gray-600">
            Configure the MCP server using standard K8sGPT configuration mechanisms. Key settings include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>Concurrency limits for request handling</li>
            <li>Connection timeouts and keep-alive settings</li>
            <li>Protocol-specific options</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Ensure your client is correctly communicating over stdio</li>
            <li>Validate that your JSON messages conform to the expected schema</li>
            <li>Check for any interference with input/output streams</li>
          </ul>
        </section>
      </div>
    </DocPage>
  );
};

export default MCPServer; 