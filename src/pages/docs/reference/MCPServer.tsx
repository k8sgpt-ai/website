import DocPage from '../../../components/DocPage';

const MCPServer = () => {
  return (
    <DocPage
      title="Model Context Protocol (MCP) Server"
      description="K8sGPT MCP Server - Kubernetes operations as standardized tools for AI assistants"
      prev={{ title: 'Providers', href: '/docs/reference/providers' }}
      next={{ title: 'Integration', href: '/docs/explanation/integration' }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">What is MCP?</h2>
          <p className="text-gray-600 mb-4">
            The Model Context Protocol (MCP) is an open standard that enables AI assistants to securely connect to external data sources and tools. K8sGPT's MCP server exposes Kubernetes operations through this standardized interface, allowing AI assistants like Claude to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Analyze cluster health and issues</li>
            <li>Query Kubernetes resources</li>
            <li>Access pod logs and events</li>
            <li>Get troubleshooting guidance</li>
            <li>Manage analyzer filters</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Start the MCP Server - Stdio Mode</h3>
            <p className="text-gray-600 mb-2">For local AI assistants like Claude Desktop:</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <code>{`k8sgpt serve --mcp`}</code>
            </pre>
            
            <h3 className="text-xl font-semibold mt-6">Start the MCP Server - HTTP Mode</h3>
            <p className="text-gray-600 mb-2">For network access and webhooks:</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <code>{`k8sgpt serve --mcp --mcp-http --mcp-port 8089`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Server Modes</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">Stdio Mode (Default)</h3>
              <p className="text-gray-600 mb-3">Used by local AI assistants like Claude Desktop for direct process communication.</p>
              <p className="text-gray-600 mb-3 font-semibold">Configuration Example:</p>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`{
  "mcpServers": {
    "k8sgpt": {
      "command": "k8sgpt",
      "args": ["serve", "--mcp"]
    }
  }
}`}</code>
              </pre>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">HTTP Mode</h3>
              <p className="text-gray-600 mb-3">Used for network access and webhook integrations. The server runs in stateless mode with independent requests.</p>
              <p className="text-gray-600 mb-3 font-semibold">Command:</p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                <code>{`k8sgpt serve --mcp --mcp-http --mcp-port 8089`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Available Tools</h2>
          <p className="text-gray-600 mb-6">The MCP server exposes 12+ tools for Kubernetes operations:</p>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-600">Cluster Analysis</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">analyze</h4>
              <p className="text-gray-600 text-sm mb-3">Analyze Kubernetes resources for issues and problems with optional AI explanations.</p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Parameters:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><code>namespace</code> (optional): Namespace to analyze</li>
                  <li><code>explain</code> (optional): Get AI explanations for issues</li>
                  <li><code>filters</code> (optional): Comma-separated list of analyzers to use</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">cluster-info</h4>
              <p className="text-gray-600 text-sm">Get Kubernetes cluster information and version details.</p>
            </div>

            <h3 className="text-lg font-semibold text-blue-600 mt-6">Resource Management</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">list-resources</h4>
              <p className="text-gray-600 text-sm mb-3">List Kubernetes resources of a specific type.</p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Parameters:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><code>resourceType</code> (required): Type of resource (pods, deployments, services, nodes, jobs, cronjobs, statefulsets, daemonsets, replicasets, configmaps, secrets, ingresses, pvcs, pvs)</li>
                  <li><code>namespace</code> (optional): Namespace to query</li>
                  <li><code>labelSelector</code> (optional): Label selector for filtering</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">get-resource</h4>
              <p className="text-gray-600 text-sm mb-3">Get detailed information about a specific Kubernetes resource.</p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Parameters:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><code>resourceType</code> (required): Type of resource</li>
                  <li><code>name</code> (required): Resource name</li>
                  <li><code>namespace</code> (optional): Namespace</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">list-namespaces</h4>
              <p className="text-gray-600 text-sm">List all namespaces in the cluster.</p>
            </div>

            <h3 className="text-lg font-semibold text-blue-600 mt-6">Debugging and Troubleshooting</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">get-logs</h4>
              <p className="text-gray-600 text-sm mb-3">Get logs from a pod container.</p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Parameters:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><code>podName</code> (required): Name of the pod</li>
                  <li><code>namespace</code> (optional): Namespace</li>
                  <li><code>container</code> (optional): Container name</li>
                  <li><code>tail</code> (optional): Number of lines to show</li>
                  <li><code>previous</code> (optional): Show logs from previous container instance</li>
                  <li><code>sinceSeconds</code> (optional): Show logs from last N seconds</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">list-events</h4>
              <p className="text-gray-600 text-sm mb-3">List Kubernetes events for debugging.</p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Parameters:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><code>namespace</code> (optional): Namespace to query</li>
                  <li><code>involvedObjectName</code> (optional): Filter by object name</li>
                  <li><code>involvedObjectKind</code> (optional): Filter by object kind</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-blue-600 mt-6">Analyzer Management</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">list-filters</h4>
              <p className="text-gray-600 text-sm">List all available and active analyzers/filters.</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">add-filters</h4>
              <p className="text-gray-600 text-sm mb-3">Add filters to enable specific analyzers.</p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Parameters:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><code>filters</code> (required): Comma-separated list of analyzer names</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">remove-filters</h4>
              <p className="text-gray-600 text-sm mb-3">Remove filters to disable specific analyzers.</p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Parameters:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><code>filters</code> (required): Comma-separated list of analyzer names</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-blue-600 mt-6">Integration & Configuration</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">list-integrations</h4>
              <p className="text-gray-600 text-sm">List available integrations (Prometheus, AWS, Keda, Kyverno, etc.)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">config</h4>
              <p className="text-gray-600 text-sm">Configure K8sGPT settings including custom analyzers and cache.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Available Resources</h2>
          <p className="text-gray-600 mb-4">Resources provide read-only access to cluster information:</p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">cluster-info</h4>
              <p className="text-gray-600 text-sm">URI: <code>cluster-info</code> - Get information about the Kubernetes cluster</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">namespaces</h4>
              <p className="text-gray-600 text-sm">URI: <code>namespaces</code> - List all namespaces in the cluster</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">active-filters</h4>
              <p className="text-gray-600 text-sm">URI: <code>active-filters</code> - Get currently active analyzers/filters</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Available Prompts</h2>
          <p className="text-gray-600 mb-4">Prompts provide guided troubleshooting workflows:</p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">troubleshoot-pod</h4>
              <p className="text-gray-600 text-sm mb-2">Interactive pod debugging workflow</p>
              <p className="text-sm text-gray-600">Arguments: <code>podName</code> (required), <code>namespace</code> (required)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">troubleshoot-deployment</h4>
              <p className="text-gray-600 text-sm mb-2">Interactive deployment debugging workflow</p>
              <p className="text-sm text-gray-600">Arguments: <code>deploymentName</code> (required), <code>namespace</code> (required)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">troubleshoot-cluster</h4>
              <p className="text-gray-600 text-sm">General cluster troubleshooting workflow</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Integration with AI Assistants</h2>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Claude Desktop</h3>
            <p className="text-gray-600 mb-3">Add to <code>claude_desktop_config.json</code>:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`{
  "mcpServers": {
    "k8sgpt": {
      "command": "k8sgpt",
      "args": ["serve", "--mcp"]
    }
  }
}`}</code>
            </pre>
            <p className="text-gray-600">Restart Claude Desktop and you'll see k8sgpt tools available in the tool selector.</p>

            <h3 className="text-lg font-semibold mt-6">Custom MCP Clients</h3>
            <p className="text-gray-600 mb-3">Any MCP-compatible client can connect to the k8sgpt server:</p>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2">
              <li>Start the server: <code>k8sgpt serve --mcp --mcp-http --mcp-port 8089</code></li>
              <li>Connect to: <code>http://localhost:8089/mcp</code></li>
              <li>Use standard MCP protocol methods: <code>tools/list</code>, <code>tools/call</code>, <code>resources/read</code>, <code>prompts/get</code></li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Advanced Configuration</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Custom Port</h4>
              <pre className="bg-gray-900 text-green-400 p-2 rounded text-sm">
                <code>{`k8sgpt serve --mcp --mcp-http --mcp-port 9000`}</code>
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">With Specific Backend</h4>
              <pre className="bg-gray-900 text-green-400 p-2 rounded text-sm">
                <code>{`k8sgpt serve --mcp --backend openai`}</code>
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">With Kubeconfig</h4>
              <pre className="bg-gray-900 text-green-400 p-2 rounded text-sm">
                <code>{`k8sgpt serve --mcp --kubeconfig ~/.kube/config`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Connection Issues</h3>
              <p className="text-gray-600 mb-2">Verify the server is running:</p>
              <pre className="bg-gray-900 text-green-400 p-2 rounded text-sm">
                <code>{`curl http://localhost:8089/mcp`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Permission Issues</h3>
              <p className="text-gray-600 mb-2">Ensure your kubeconfig has appropriate cluster access:</p>
              <pre className="bg-gray-900 text-green-400 p-2 rounded text-sm">
                <code>{`kubectl cluster-info`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Tool Errors</h3>
              <p className="text-gray-600 mb-2">List available tools to verify names:</p>
              <pre className="bg-gray-900 text-green-400 p-2 rounded text-sm overflow-x-auto">
                <code>{`curl -X POST http://localhost:8089/mcp \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc": "2.0", "id": 1, "method": "tools/list"}'`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Learn More</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MCP Specification</a></li>
            <li><a href="https://docs.k8sgpt.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">K8sGPT Documentation</a></li>
            <li><a href="https://github.com/k8sgpt-ai/k8sgpt/blob/main/MCP.md" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MCP Server GitHub Documentation</a></li>
            <li><a href="https://github.com/mark3labs/mcp-go" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MCP Go Library</a></li>
          </ul>
        </section>
      </div>
    </DocPage>
  );
};

export default MCPServer;
